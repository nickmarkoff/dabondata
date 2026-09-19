import { expect, test } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const SHOT_DIR = "test-results/masthead-grand-d";

async function assertNoTitleUnderline(page: import("@playwright/test").Page) {
  const masthead = page.locator("img.dab-masthead");
  await expect(masthead).toBeVisible();

  const styles = await masthead.evaluate((el) => {
    const computed = getComputedStyle(el);
    return {
      textDecorationLine: computed.textDecorationLine,
      borderBottomWidth: computed.borderBottomWidth,
      borderBottomStyle: computed.borderBottomStyle,
      objectFit: computed.objectFit,
    };
  });

  expect(styles.textDecorationLine === "none" || styles.textDecorationLine === "").toBe(
    true,
  );
  expect(
    styles.borderBottomWidth === "0px" || styles.borderBottomStyle === "none",
  ).toBe(true);
  expect(styles.objectFit).toBe("contain");
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
