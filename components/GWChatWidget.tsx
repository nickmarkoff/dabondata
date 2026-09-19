"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import {
  GW_CHAT_QUESTION_LIMIT,
  LOCKED_NOTICE,
  SUGGESTED_PROMPTS,
  WELCOME,
  isQuestionLimitReached,
  readStoredQuestionCount,
  takeGuideTurn,
  writeStoredQuestionCount,
  type ChatLink,
  type ChatReply,
} from "@/lib/gw-chat";

export const GW_CHAT_AVATAR = "/art/avatars/george-washington-chat.jpg";

function GWAvatar({
  size,
  className,
}: {
  size: number;
  className?: string;
}) {
  return (
    <Image
      src={GW_CHAT_AVATAR}
      alt=""
      width={size}
      height={size}
      className={className ?? "gw-chat-avatar"}
    />
  );
}

const LIFT_PATHS = new Set(["/sign", "/involve"]);

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <p>
      {parts.map((part, index) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={index}>{part.slice(2, -2)}</strong>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </p>
  );
}

type ChatMessage = {
  id: string;
  role: "guide" | "visitor";
  text: string;
  links?: ChatLink[];
};

function isInternalHref(href: string): boolean {
  return href.startsWith("/") && !href.startsWith("//") && !href.endsWith(".pdf");
}

function ReplyLinks({ links }: { links: ChatLink[] }) {
  if (!links.length) return null;
  return (
    <ul className="gw-chat-links">
      {links.map((link) => (
        <li key={`${link.href}-${link.label}`}>
          {isInternalHref(link.href) ? (
            <Link href={link.href}>{link.label}</Link>
          ) : (
            <a href={link.href}>{link.label}</a>
          )}
        </li>
      ))}
    </ul>
  );
}

function replyToMessage(reply: ChatReply, prefix: string): ChatMessage {
  return {
    id: `${prefix}-${reply.id}`,
    role: "guide",
    text: reply.text,
    links: reply.links,
  };
}

function hasTerminalLock(messages: ChatMessage[]): boolean {
  return messages.some(
    (message) =>
      message.role === "guide" &&
      (message.id.includes("limit-closing") ||
        message.id.includes("limit-notice")),
  );
}

function initialMessages(locked: boolean): ChatMessage[] {
  const welcome = replyToMessage(WELCOME, "init");
  if (!locked) return [welcome];
  return [welcome, replyToMessage(LOCKED_NOTICE, "init")];
}

export function GWChatWidget() {
  const pathname = usePathname() ?? "";
  const lift = LIFT_PATHS.has(pathname);
  const panelId = useId();
  const inputId = useId();
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [questionCount, setQuestionCount] = useState(0);
  const [messages, setMessages] = useState<ChatMessage[]>(() =>
    initialMessages(false),
  );
  const listRef = useId();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);
  const nextId = useRef(1);
  const countRef = useRef(0);
  const locked = isQuestionLimitReached(questionCount);

  useEffect(() => {
    const stored = readStoredQuestionCount();
    countRef.current = stored;
    setQuestionCount(stored);
    if (stored >= GW_CHAT_QUESTION_LIMIT) {
      setMessages(initialMessages(true));
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    const node = scrollerRef.current;
    if (!node) return;
    const scrollToEnd = () => {
      node.scrollTop = node.scrollHeight;
    };
    scrollToEnd();
    // Locking swaps the form for a banner and can change the log height
    // after the first paint; scroll again once layout settles.
    const frame = requestAnimationFrame(() => {
      scrollToEnd();
      requestAnimationFrame(scrollToEnd);
    });
    return () => cancelAnimationFrame(frame);
  }, [messages, open, locked]);

  useEffect(() => {
    if (open) {
      if (locked) {
        closeRef.current?.focus();
      } else {
        inputRef.current?.focus();
      }
    } else if (wasOpen.current) {
      launcherRef.current?.focus();
    }
    wasOpen.current = open;
  }, [open, locked]);

  function applyStoredCount(count: number) {
    countRef.current = count;
    setQuestionCount(count);
    return isQuestionLimitReached(count);
  }

  function openPanel() {
    const stored = readStoredQuestionCount();
    const nowLocked = applyStoredCount(stored);
    if (nowLocked) {
      setMessages((prev) =>
        hasTerminalLock(prev) ? prev : initialMessages(true),
      );
    }
    setOpen(true);
  }

  function pushExchange(
    question: string,
    reply: ChatReply,
    closing?: ChatReply,
  ) {
    const visitorId = `v-${nextId.current++}`;
    const guideId = `g-${nextId.current++}`;
    const next: ChatMessage[] = [
      { id: visitorId, role: "visitor", text: question },
      { ...replyToMessage(reply, guideId), id: guideId },
    ];
    if (closing) {
      next.push(replyToMessage(closing, `g-${nextId.current++}`));
    }
    setMessages((prev) => [...prev, ...next]);
  }

  function ask(question: string) {
    const trimmed = question.trim();
    if (!trimmed) return;
    const turn = takeGuideTurn(trimmed, countRef.current);
    if (!turn) return;
    writeStoredQuestionCount(turn.count);
    applyStoredCount(turn.count);
    pushExchange(trimmed, turn.reply, turn.closing);
    setDraft("");
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ask(draft);
  }

  function onLauncherKey(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "Escape" && open) {
      event.preventDefault();
      setOpen(false);
    }
  }

  function onPanelKey(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "Escape") {
      event.preventDefault();
      setOpen(false);
    }
  }

  return (
    <div className={lift ? "gw-chat gw-chat-lift" : "gw-chat"}>
      {open ? (
        <div
          className="gw-chat-panel"
          id={panelId}
          role="dialog"
          aria-modal="false"
          aria-labelledby={`${panelId}-title`}
          onKeyDown={onPanelKey}
        >
          <header className="gw-chat-head">
            <div className="gw-chat-head-id">
              <GWAvatar size={44} className="gw-chat-avatar gw-chat-avatar-head" />
              <div>
                <p className="gw-chat-kicker">Packet guide</p>
                <h2 id={`${panelId}-title`} className="gw-chat-title">
                  George Washington
                </h2>
              </div>
            </div>
            <div className="gw-chat-head-tools">
              <p className="gw-chat-meter" aria-live="polite">
                {locked
                  ? "3 of 3 questions"
                  : `${questionCount} of ${GW_CHAT_QUESTION_LIMIT} questions`}
              </p>
              <button
                type="button"
                className="gw-chat-close"
                ref={closeRef}
                onClick={() => setOpen(false)}
              >
                Close
              </button>
            </div>
          </header>
          <p className="gw-chat-disclaimer" role="note">
            This guide cannot change the site, the memorandum, or any document.
            Guidance only — use Get Involved and Sign.
          </p>
          <div
            className="gw-chat-log"
            ref={scrollerRef}
            aria-live="polite"
            aria-relevant="additions"
            id={listRef}
          >
            {messages.map((message) => (
              <article
                key={message.id}
                className={
                  message.role === "guide"
                    ? "gw-chat-bubble gw-chat-bubble-guide"
                    : "gw-chat-bubble gw-chat-bubble-visitor"
                }
              >
                <p className="gw-chat-who">
                  {message.role === "guide" ? "George Washington" : "You"}
                </p>
                <RichText text={message.text} />
                {message.links ? <ReplyLinks links={message.links} /> : null}
              </article>
            ))}
          </div>
          {locked ? (
            <p className="gw-chat-locked" role="status">
              This guide is closed. Three questions have been answered. Read
              the Official Plan or the packet downloads.
            </p>
          ) : (
            <>
              <div className="gw-chat-prompts">
                <p className="gw-chat-prompts-label">Ask about</p>
                <div className="gw-chat-prompt-row">
                  {SUGGESTED_PROMPTS.map((entry) => (
                    <button
                      key={entry.id}
                      type="button"
                      className="gw-chat-chip"
                      onClick={() => ask(entry.prompt)}
                    >
                      {entry.chip ?? entry.prompt}
                    </button>
                  ))}
                </div>
              </div>
              <form className="gw-chat-form" onSubmit={onSubmit}>
                <label className="gw-chat-sr" htmlFor={inputId}>
                  Ask about the packet
                </label>
                <input
                  id={inputId}
                  ref={inputRef}
                  type="text"
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder="Ask about the Trust, Tier 1, or how to act…"
                  autoComplete="off"
                  enterKeyHint="send"
                />
                <button type="submit" className="gw-chat-send">
                  Ask
                </button>
              </form>
            </>
          )}
        </div>
      ) : null}

      {open ? null : (
        <button
          ref={launcherRef}
          type="button"
          className="gw-chat-launcher"
          aria-label="George Washington, ask about the packet"
          aria-expanded={false}
          aria-controls={panelId}
          onClick={openPanel}
          onKeyDown={onLauncherKey}
        >
          <GWAvatar
            size={lift ? 52 : 56}
            className="gw-chat-avatar gw-chat-avatar-fab"
          />
          {lift ? (
            <span className="gw-chat-sr">George Washington, ask about the packet</span>
          ) : (
            <span className="gw-chat-launcher-copy">
              <span className="gw-chat-launcher-name">George Washington</span>
              <span className="gw-chat-launcher-sub">Ask about the packet</span>
            </span>
          )}
        </button>
      )}
    </div>
  );
}
