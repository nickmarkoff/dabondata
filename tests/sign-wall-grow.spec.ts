import { expect, test } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const SEEDED = [
  {
    id: "mu7w3hsl-u7i2bv",
    name: "Nicholas Markoff",
    community: "Buckeystown",
    note: "Let’s make our candidates actually compete for our vote and represent our mandate!",
    createdAt: "2026-09-19T04:30:54.165Z",
  },
  {
    id: "seed-2",
    name: "Ada Doubs",
    community: "Doubs",
    note: "A longer optional note that must wrap on a 390-wide wall instead of stretching or clipping later names.",
    createdAt: "2026-09-19T04:31:00.000Z",
  },
  {
    id: "seed-3",
    name: "Ben Adamstown",
    community: "Adamstown",
    createdAt: "2026-09-19T04:31:10.000Z",
  },
  {
    id: "seed-4",
    name: "Cora Buckeystown",
    community: "Buckeystown",
    createdAt: "2026-09-19T04:31:20.000Z",
  },
  {
    id: "seed-5",
    name: "Drew Doubs",
    community: "Doubs",
    createdAt: "2026-09-19T04:31:30.000Z",
  },
  {
    id: "seed-6",
    name: "Eve Adamstown",
    community: "Adamstown",
    createdAt: "2026-09-19T04:31:40.000Z",
  },
];

test.describe("/sign wall grows", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("six names stay in a growing single column at 390", async ({ page }) => {
    await page.route("**/api/signatures", async (route) => {
      if (route.request().method() !== "GET") {
        await route.continue();
        return;
      }
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify({ signatures: SEEDED }),
      });
    });

    await page.goto("/sign");
    const names = page.locator(".dab-sign-name");
    await expect(names).toHaveCount(6);

    const metrics = await page.evaluate(() => {
      const pageEl = document.querySelector(".dab-page") as HTMLElement;
      const wall = document.querySelector(".dab-sign-wall") as HTMLElement;
      const list = document.querySelector(".dab-sign-list") as HTMLElement;
      const items = [...document.querySelectorAll(".dab-sign-name")] as HTMLElement[];
      const pageStyle = getComputedStyle(pageEl);
      const wallStyle = getComputedStyle(wall);
      const listStyle = getComputedStyle(list);
      const pageBox = pageEl.getBoundingClientRect();
      const last = items[items.length - 1].getBoundingClientRect();
      return {
        count: items.length,
        texts: items.map((el) => el.textContent),
        pageHeight: pageEl.getBoundingClientRect().height,
        pageScrollHeight: pageEl.scrollHeight,
        wallHeight: wall.getBoundingClientRect().height,
        listHeight: list.getBoundingClientRect().height,
        pageMaxHeight: pageStyle.maxHeight,
        wallMaxHeight: wallStyle.maxHeight,
        listMaxHeight: listStyle.maxHeight,
        pageOverflow: pageStyle.overflow,
        wallOverflow: wallStyle.overflow,
        listOverflow: listStyle.overflow,
        listDisplay: listStyle.display,
        lastBottom: last.bottom,
        pageBottom: pageBox.bottom,
        columns: listStyle.columnCount,
      };
    });

    expect(metrics.texts).toEqual(SEEDED.map((s) => s.name));
    expect(metrics.pageMaxHeight).toBe("none");
    expect(metrics.wallMaxHeight).toBe("none");
    expect(metrics.listMaxHeight).toBe("none");
    expect(metrics.pageOverflow).toMatch(/visible|auto/);
    expect(metrics.wallOverflow).toMatch(/visible|auto/);
    expect(metrics.listDisplay).toBe("flex");
    expect(metrics.columns === "auto" || metrics.columns === "1").toBe(true);
    expect(metrics.pageHeight).toBeGreaterThan(844);
    expect(metrics.wallHeight).toBeGreaterThan(300);
    expect(metrics.lastBottom).toBeLessThanOrEqual(metrics.pageBottom + 1);

    const last = names.nth(5);
    await last.scrollIntoViewIfNeeded();
    await expect(last).toBeVisible();
    await expect(last).toHaveText("Eve Adamstown");

    for (let i = 0; i < 6; i += 1) {
      await names.nth(i).scrollIntoViewIfNeeded();
      await expect(names.nth(i)).toBeVisible();
    }

    await mkdir("/opt/cursor/artifacts", { recursive: true });
    await page.screenshot({
      path: "/opt/cursor/artifacts/sign_wall_six_names_390.png",
      fullPage: true,
    });
  });
});
