import { expect, test } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const SHOT_DIR = "test-results/involve-ways-markers";

test.describe("Get Involved American star markers", () => {
  test("390 viewport uses 14px star markers on the ways list only", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/involve");

    const list = page.locator("ol.dab-involve-ways");
    await expect(list).toHaveAttribute("aria-label", "Ways to get involved");
    await expect(list.locator("> li")).toHaveCount(7);

    const marker = await list.evaluate((el) => {
      const li = el.querySelector(":scope > li");
      if (!li) return null;
      const before = getComputedStyle(li, "::before");
      return {
        width: before.width,
        height: before.height,
        image: before.backgroundImage,
        content: before.content,
      };
    });

    expect(marker, "ways list items should have a ::before marker").not.toBeNull();
    expect(marker!.width).toBe("14px");
    expect(marker!.height).toBe("14px");
    expect(marker!.image).toMatch(/american_star_14\.svg/);

    const otherLists = page.locator("article.dab-prose ol:not(.dab-involve-ways), article.dab-prose ul");
    await expect(otherLists).toHaveCount(0);

    await mkdir(SHOT_DIR, { recursive: true });
    await list.screenshot({ path: `${SHOT_DIR}/involve_ways_390.png` });
  });

  test("homepage document bullets stay ordinary discs", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    const homeList = page.locator("ul.dab-bullet-list");
    await expect(homeList).toBeVisible();
    const style = await homeList.evaluate((el) => {
      const computed = getComputedStyle(el);
      const li = el.querySelector(":scope > li");
      const before = li ? getComputedStyle(li, "::before") : null;
      return {
        listStyleType: computed.listStyleType,
        beforeImage: before?.backgroundImage ?? "none",
      };
    });
    expect(style.listStyleType).toBe("disc");
    expect(style.beforeImage === "none" || style.beforeImage === "").toBe(true);
  });
});
