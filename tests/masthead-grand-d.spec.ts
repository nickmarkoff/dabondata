import { expect, test } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const SHOT_DIR = "test-results/masthead-grand-d";

async function assertNoTitleUnderline(page: import("@playwright/test").Page) {
  const masthead = page.locator("img.dab-masthead");
  await expect(masthead).toBeVisible();

  const styles = await masthead.evaluate((el) => {
    const computed = getComputedStyle(el);
    const header = el.closest("header");
    const headerStyles = header ? getComputedStyle(header) : null;
    return {
      textDecorationLine: computed.textDecorationLine,
      borderBottomWidth: computed.borderBottomWidth,
      borderBottomStyle: computed.borderBottomStyle,
      objectFit: computed.objectFit,
      backgroundColor: computed.backgroundColor,
      boxShadow: computed.boxShadow,
      filter: computed.filter,
      headerBackgroundColor: headerStyles?.backgroundColor ?? null,
      headerBoxShadow: headerStyles?.boxShadow ?? null,
      headerFilter: headerStyles?.filter ?? null,
    };
  });

  expect(styles.textDecorationLine === "none" || styles.textDecorationLine === "").toBe(
    true,
  );
  expect(
    styles.borderBottomWidth === "0px" || styles.borderBottomStyle === "none",
  ).toBe(true);
  expect(styles.objectFit).toBe("contain");

  const transparent = (value: string | null) =>
    !value ||
    value === "transparent" ||
    value === "rgba(0, 0, 0, 0)" ||
    value === "rgba(0,0,0,0)";
  expect(transparent(styles.backgroundColor)).toBe(true);
  expect(styles.boxShadow === "none" || styles.boxShadow === "").toBe(true);
  expect(styles.filter === "none" || styles.filter === "").toBe(true);
  expect(transparent(styles.headerBackgroundColor)).toBe(true);
  expect(styles.headerBoxShadow === "none" || styles.headerBoxShadow === "").toBe(
    true,
  );
  expect(styles.headerFilter === "none" || styles.headerFilter === "").toBe(true);
}

test.describe("Option D masthead cartouche", () => {
  test("390 viewport shows full 390×389 cartouche without CSS title underline", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const masthead = page.locator("img.dab-masthead");
    await expect(masthead).toHaveAttribute(
      "src",
      /\/art\/mobile\/masthead_390_compact\.png/,
    );
    await expect(masthead).toHaveAttribute("width", "390");
    await expect(masthead).toHaveAttribute("height", "389");

    const box = await masthead.boundingBox();
    expect(box, "masthead should have a box").not.toBeNull();
    const expectedHeight = (box!.width * 389) / 390;
    expect(box!.height).toBeGreaterThan(expectedHeight - 2);
    expect(box!.height).toBeLessThan(expectedHeight + 2);
    // Must not still be the 250-tall crop
    expect(box!.height).toBeGreaterThan((box!.width * 250) / 390 + 8);

    await assertNoTitleUnderline(page);

    const corners = await masthead.evaluate((el) => {
      const img = el as HTMLImageElement;
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return [];
      ctx.drawImage(img, 0, 0);
      const pts = [
        [0, 0],
        [img.naturalWidth - 1, 0],
        [0, img.naturalHeight - 1],
        [img.naturalWidth - 1, img.naturalHeight - 1],
        [8, 8],
        [img.naturalWidth - 9, 8],
      ] as const;
      return pts.map(([x, y]) => Array.from(ctx.getImageData(x, y, 1, 1).data));
    });
    expect(corners.length).toBeGreaterThan(0);
    for (const pixel of corners) {
      expect(pixel[3], "masthead corners must be transparent").toBe(0);
    }

    await mkdir(SHOT_DIR, { recursive: true });
    await page.screenshot({
      path: `${SHOT_DIR}/masthead_390.png`,
      fullPage: false,
    });
    await masthead.screenshot({ path: `${SHOT_DIR}/masthead_390_plate.png` });
  });

  test("desktop keeps cartouche at intrinsic scale (no stretch, no CSS underline)", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");

    const masthead = page.locator("img.dab-masthead");
    await expect(masthead).toBeVisible();

    const box = await masthead.boundingBox();
    expect(box, "masthead should have a box").not.toBeNull();
    expect(box!.width).toBeLessThanOrEqual(390);
    expect(box!.width).toBeGreaterThan(200);
    const expectedHeight = (box!.width * 389) / 390;
    expect(Math.abs(box!.height - expectedHeight)).toBeLessThan(2);

    await assertNoTitleUnderline(page);

    await mkdir(SHOT_DIR, { recursive: true });
    await page.screenshot({
      path: `${SHOT_DIR}/masthead_desktop.png`,
      fullPage: false,
    });
    await masthead.screenshot({ path: `${SHOT_DIR}/masthead_desktop_plate.png` });
  });
});
