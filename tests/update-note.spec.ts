import { expect, test } from "@playwright/test";

const COPY = "This site is updated often — thank you for your patience.";

const ROUTES = [
  "/",
  "/statement",
  "/plan",
  "/grandfather",
  "/rebate",
  "/attachments",
  "/sources",
  "/involve",
  "/sign",
] as const;

function boxesOverlap(
  a: { x: number; y: number; width: number; height: number },
  b: { x: number; y: number; width: number; height: number },
) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

test.describe("Sitewide update note", () => {
  test("appears on every page between nav and main", async ({ page }) => {
    for (const href of ROUTES) {
      await page.goto(href);
      const note = page.locator(".dab-update-note");
      await expect(note, `${href} should show one update note`).toHaveCount(1);
      await expect(note).toHaveText(COPY);

      const navBox = await page.locator("nav.dab-nav").boundingBox();
      const noteBox = await note.boundingBox();
      const mainBox = await page.locator("main").boundingBox();
      expect(navBox, `${href} nav box`).not.toBeNull();
      expect(noteBox, `${href} note box`).not.toBeNull();
      expect(mainBox, `${href} main box`).not.toBeNull();
      expect(noteBox!.y).toBeGreaterThan(navBox!.y);
      expect(noteBox!.y + noteBox!.height).toBeLessThanOrEqual(mainBox!.y + 1);
    }
  });

  test("390: readable navy-on-parchment strip does not cover cartouche or CTAs", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const note = page.locator(".dab-update-note");
    await expect(note).toBeVisible();

    const styles = await note.evaluate((el) => {
      const computed = getComputedStyle(el);
      return {
        fontSize: parseFloat(computed.fontSize),
        color: computed.color,
        position: computed.position,
        backgroundColor: computed.backgroundColor,
      };
    });
    expect(styles.fontSize).toBeGreaterThanOrEqual(12.5);
    expect(styles.position).toBe("static");
    expect(styles.color).toMatch(/rgb\(\s*8,\s*22,\s*45\s*\)/);

    const noteBox = await note.boundingBox();
    const mastheadBox = await page.locator("img.dab-masthead").boundingBox();
    const ctaBox = await page.locator(".involve-btn.primary").boundingBox();
    expect(noteBox).not.toBeNull();
    expect(mastheadBox).not.toBeNull();
    expect(ctaBox).not.toBeNull();
    expect(boxesOverlap(noteBox!, mastheadBox!)).toBe(false);
    expect(boxesOverlap(noteBox!, ctaBox!)).toBe(false);
    expect(noteBox!.width).toBeLessThanOrEqual(390);
    expect(noteBox!.height).toBeLessThan(72);
  });

  test("does not cover the sign wall or involve mail buttons", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });

    await page.goto("/sign");
    const noteOnSign = page.locator(".dab-update-note");
    const wall = page.locator(".dab-sign-wall, .sign-wall, .dab-sign").first();
    await expect(noteOnSign).toBeVisible();
    await expect(wall).toBeVisible();
    const signNoteBox = await noteOnSign.boundingBox();
    const wallBox = await wall.boundingBox();
    expect(signNoteBox).not.toBeNull();
    expect(wallBox).not.toBeNull();
    expect(boxesOverlap(signNoteBox!, wallBox!)).toBe(false);

    await page.goto("/involve");
    const noteOnInvolve = page.locator(".dab-update-note");
    const mail = page.locator(".dab-mail-btn").first();
    await expect(noteOnInvolve).toBeVisible();
    await expect(mail).toBeVisible();
    const involveNoteBox = await noteOnInvolve.boundingBox();
    const mailBox = await mail.boundingBox();
    expect(involveNoteBox).not.toBeNull();
    expect(mailBox).not.toBeNull();
    expect(boxesOverlap(involveNoteBox!, mailBox!)).toBe(false);
  });
});
