#!/usr/bin/env python3
"""Regenerate public packet PDFs.

The repo previously stored these PDFs as static binaries (python-docx →
LibreOffice) with no generator. This script renders the updated markdown
sources with fpdf2 and Inter, the face already embedded in the prior files.

Outputs:
  public/docs/DABonData.pdf          ← public/docs/DABonData.md
  public/docs/DABonData.docx         ← same markdown, so the docx is not stale
  public/docs/DAB_Energy_Trust_Memo.pdf
  public/docs/DAB_Energy_Trust_Bylaws.pdf
  public/docs/DAB_Resident_Proposal_Letter.pdf
  public/docs/DAB_Script_Handout.pdf
  public/docs/DAB_Example_Email.pdf
"""

from __future__ import annotations

import re
from pathlib import Path

from docx import Document
from docx.shared import Inches, Pt
from fpdf import FPDF

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "public" / "docs"
SRC = ROOT / "docs" / "pdf-src"
FONT = Path("/usr/share/fonts/truetype/macos")

PACKET = (DOCS / "DABonData.md").read_text(encoding="utf-8")


def slice_between(text: str, start: str, end: str | None) -> str:
    i = text.find(start)
    if i < 0:
        raise SystemExit(f"missing start marker: {start}")
    if end is None:
        return text[i:].strip() + "\n"
    j = text.find(end, i + len(start))
    if j < 0:
        raise SystemExit(f"missing end marker: {end}")
    return text[i:j].strip() + "\n"


class PacketPDF(FPDF):
    def __init__(self) -> None:
        super().__init__(format="letter", unit="mm")
        self.add_font("Inter", "", str(FONT / "Inter-Regular.ttf"))
        self.add_font("Inter", "B", str(FONT / "Inter-Bold.ttf"))
        self.add_font("Inter", "I", str(FONT / "Inter-Italic.ttf"))
        self.set_auto_page_break(auto=True, margin=18)
        self.set_margins(16, 16, 16)

    def footer(self) -> None:
        self.set_y(-12)
        self.set_font("Inter", "", 8)
        self.set_text_color(90, 78, 60)
        self.cell(
            0,
            6,
            f"DAB ENERGY TRUST — proposed, not enacted law  |  {self.page_no()}",
            align="C",
        )
        self.set_text_color(20, 16, 12)

    def heading(self, text: str, level: int) -> None:
        sizes = {1: 16, 2: 13, 3: 11}
        self.ln(2 if level > 1 else 1)
        self.set_font("Inter", "B", sizes.get(level, 11))
        self.multi_cell(0, 6.2, text, markdown=True, new_x="LMARGIN", new_y="NEXT")
        self.ln(1)
        self.set_font("Inter", "", 10.5)

    def rich(self, text: str, size: float = 10.5, h: float = 5.2) -> None:
        self.set_font("Inter", "", size)
        self.multi_cell(0, h, text, markdown=True, new_x="LMARGIN", new_y="NEXT")
        self.ln(1.4)

    def bullet(self, text: str) -> None:
        self.set_font("Inter", "", 10.5)
        self.multi_cell(0, 5.2, "•  " + text, markdown=True, new_x="LMARGIN", new_y="NEXT")
        self.ln(0.6)

    def render_table(self, rows: list[list[str]]) -> None:
        if not rows:
            return
        usable = self.w - self.l_margin - self.r_margin
        cols = max(len(r) for r in rows)
        rows = [r + [""] * (cols - len(r)) for r in rows]
        if cols == 2:
            weights = (0.22, 0.78)
        elif cols == 3:
            weights = (0.34, 0.40, 0.26)
        else:
            weights = tuple(1 / cols for _ in range(cols))
        col_widths = tuple(usable * w for w in weights)
        self.set_font("Inter", "", 9)
        with super().table(
            col_widths=col_widths,
            text_align="LEFT",
            line_height=4.6,
            markdown=True,
            first_row_as_headings=True,
            padding=1.2,
        ) as tbl:
            for i, row in enumerate(rows):
                pdf_row = tbl.row()
                for cell in row:
                    pdf_row.cell(cell, align="L")
                if i == 0:
                    pass
        self.ln(2)


def render_markdown(pdf: PacketPDF, text: str) -> None:
    text = re.sub(r"<a\s+[^>]*>|</a>", "", text)
    text = re.sub(r"\[([^\]]+)\]\([^)]*\)", r"\1", text)
    lines = text.replace("\r\n", "\n").split("\n")
    i = 0
    para: list[str] = []

    def flush() -> None:
        if not para:
            return
        pdf.rich(" ".join(s.strip() for s in para))
        para.clear()

    while i < len(lines):
        raw = lines[i]
        line = raw.rstrip()
        stripped = line.strip()

        if stripped.startswith("<a ") or stripped.startswith("</a"):
            i += 1
            continue

        if (
            stripped.startswith("|")
            and i + 1 < len(lines)
            and re.match(r"^\s*\|(?:\s*:?-{1,}:?\s*\|)+\s*$", lines[i + 1])
        ):
            flush()
            rows: list[list[str]] = []
            while i < len(lines) and lines[i].strip().startswith("|"):
                if not re.match(r"^\s*\|(?:\s*:?-{1,}:?\s*\|)+\s*$", lines[i]):
                    cells = [c.strip() for c in lines[i].strip().strip("|").split("|")]
                    rows.append(cells)
                i += 1
            pdf.render_table(rows)
            continue

        if not stripped or stripped == "---":
            flush()
            i += 1
            continue

        if stripped.startswith("#"):
            flush()
            level = len(stripped) - len(stripped.lstrip("#"))
            pdf.heading(stripped[level:].strip(), level)
            i += 1
            continue

        if stripped.startswith("- "):
            flush()
            pdf.bullet(stripped[2:].strip())
            i += 1
            continue

        para.append(stripped)
        i += 1

    flush()


def write_pdf(path: Path, markdown: str) -> None:
    pdf = PacketPDF()
    pdf.add_page()
    render_markdown(pdf, markdown)
    path.parent.mkdir(parents=True, exist_ok=True)
    pdf.output(str(path))
    print(f"wrote {path.relative_to(ROOT)} ({path.stat().st_size} bytes, {pdf.page_no()} pages)")


def write_docx(path: Path, markdown: str) -> None:
    doc = Document()
    for section in doc.sections:
        section.top_margin = Inches(0.85)
        section.bottom_margin = Inches(0.85)
        section.left_margin = Inches(0.9)
        section.right_margin = Inches(0.9)
    style = doc.styles["Normal"]
    style.font.name = "Times New Roman"
    style.font.size = Pt(11)
    for raw in markdown.splitlines():
        line = raw.strip()
        if not line or line == "---" or line.startswith("<"):
            continue
        if re.match(r"^\|?(?:\s*:?-{1,}:?\s*\|)+\s*$", line):
            continue
        if line.startswith("|"):
            cells = [c.strip() for c in line.strip("|").split("|")]
            doc.add_paragraph("  |  ".join(cells))
            continue
        if line.startswith("#"):
            level = min(3, len(line) - len(line.lstrip("#")))
            text = re.sub(r"\*\*", "", line.lstrip("#").strip())
            doc.add_heading(text, level=level)
            continue
        text = re.sub(r"\*\*", "", line)
        if text.startswith("- "):
            doc.add_paragraph(text[2:], style="List Bullet")
        else:
            doc.add_paragraph(text)
    doc.save(path)
    print(f"wrote {path.relative_to(ROOT)}")


def main() -> None:
    memo = "\n".join(
        [
            (SRC / "memo-preamble.md").read_text(encoding="utf-8").strip(),
            slice_between(PACKET, "## 1. Request", "# Grandfather Clause"),
            (SRC / "memo-sources.md").read_text(encoding="utf-8").strip(),
        ]
    )
    handout = (
        "STATEMENT AND ONE-PAGE HANDOUT\n\n"
        "Read at the mic. Leave the handout on the table.\n\n"
        + slice_between(PACKET, "## Resident handout / script", "## Resident proposal letter")
    )
    letter = slice_between(PACKET, "## Resident proposal letter", None)

    write_pdf(DOCS / "DABonData.pdf", PACKET)
    write_docx(DOCS / "DABonData.docx", PACKET)
    write_pdf(DOCS / "DAB_Energy_Trust_Memo.pdf", memo)
    write_pdf(DOCS / "DAB_Energy_Trust_Bylaws.pdf", (SRC / "bylaws.md").read_text(encoding="utf-8"))
    write_pdf(DOCS / "DAB_Script_Handout.pdf", handout)
    write_pdf(DOCS / "DAB_Resident_Proposal_Letter.pdf", letter)
    write_pdf(DOCS / "DAB_Example_Email.pdf", (SRC / "email.md").read_text(encoding="utf-8"))


if __name__ == "__main__":
    main()
