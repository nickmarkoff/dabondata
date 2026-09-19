"use client";

import Link from "next/link";
import {
  FormEvent,
  KeyboardEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import {
  SUGGESTED_PROMPTS,
  WELCOME,
  answerVisitor,
  type ChatLink,
  type ChatReply,
} from "@/lib/gw-chat";

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

export function GWChatWidget() {
  const panelId = useId();
  const inputId = useId();
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    replyToMessage(WELCOME, "init"),
  ]);
  const listRef = useId();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);
  const nextId = useRef(1);

  useEffect(() => {
    if (!open) return;
    const node = scrollerRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [messages, open]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    } else if (wasOpen.current) {
      launcherRef.current?.focus();
    }
    wasOpen.current = open;
  }, [open]);

  function pushExchange(question: string, reply: ChatReply) {
    const visitorId = `v-${nextId.current++}`;
    const guideId = `g-${nextId.current++}`;
    setMessages((prev) => [
      ...prev,
      { id: visitorId, role: "visitor", text: question },
      { ...replyToMessage(reply, guideId), id: guideId },
    ]);
  }

  function ask(question: string) {
    const trimmed = question.trim();
    if (!trimmed) return;
    pushExchange(trimmed, answerVisitor(trimmed));
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
    <div className="gw-chat">
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
            <div>
              <p className="gw-chat-kicker">Packet guide</p>
              <h2 id={`${panelId}-title`} className="gw-chat-title">
                George Washington
              </h2>
            </div>
            <button
              type="button"
              className="gw-chat-close"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
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
                <p>{message.text}</p>
                {message.links ? <ReplyLinks links={message.links} /> : null}
              </article>
            ))}
          </div>
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
        </div>
      ) : null}

      {open ? null : (
        <button
          ref={launcherRef}
          type="button"
          className="gw-chat-launcher"
          aria-expanded={false}
          aria-controls={panelId}
          onClick={() => setOpen(true)}
          onKeyDown={onLauncherKey}
        >
          <span className="gw-chat-launcher-name">George Washington</span>
          <span className="gw-chat-launcher-sub">Ask about the packet</span>
        </button>
      )}
    </div>
  );
}
