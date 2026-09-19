import { expect, test, type Page } from "@playwright/test";

const INK_TARGETS = [
  { hex: "#1A1814", rgb: [26, 24, 20] as const },
  { hex: "#12100c", rgb: [18, 16, 12] as const },
];

function parseCssColor(value: string): [number, number, number] | null {
  const rgb = value.match(
    /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*[\d.]+)?\s*\)$/i,
  );
  if (rgb) {
    return [Number(rgb[1]), Number(rgb[2]), Number(rgb[3])];
  }
  const modern = value.match(
    /^rgba?\(\s*(\d+)\s+(\d+)\s+(\d+)(?:\s*\/\s*[\d.]+%?)?\s*\)$/i,
  );
  if (modern) {
    return [Number(modern[1]), Number(modern[2]), Number(modern[3])];
  }
  return null;
}

function colorDistance(
  a: readonly [number, number, number],
  b: readonly [number, number, number],
): number {
  return Math.sqrt(
    (a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2,
  );
}

async function seedWallName(page: Page) {
  await page.route("**/api/signatures", async (route) => {
    if (route.request().method() !== "GET") {
      await route.continue();
      return;
    }
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        signatures: [
          {
            id: "playwright-meddon",
            name: "Test Neighbor",
            community: "Doubs",
            createdAt: "2026-09-19T00:00:00.000Z",
          },
        ],
      }),
    });
  });
}

test.describe("/sign signature names", () => {
  test("computed name face is Meddon and ink is #1A1814 or #12100c", async ({
    page,
  }) => {
    await seedWallName(page);
    await page.goto("/sign");

    const name = page.locator(".dab-sign-name").first();
    await expect(name).toBeVisible();
    await expect(name).toHaveText("Test Neighbor");

    const styles = await name.evaluate((el) => {
      const computed = getComputedStyle(el);
      return {
        fontFamily: computed.fontFamily,
        fontWeight: computed.fontWeight,
        color: computed.color,
      };
    });

    expect(styles.fontFamily).toMatch(/Meddon/i);
    expect(styles.fontFamily).not.toMatch(/Italianno|Pinyon|Great Vibes/i);
    expect(styles.fontWeight === "400" || styles.fontWeight === "normal").toBe(
      true,
    );

    const rgb = parseCssColor(styles.color);
    expect(rgb, `unparsed color ${styles.color}`).not.toBeNull();
    const nearest = INK_TARGETS.map((target) => ({
      ...target,
      distance: colorDistance(rgb!, target.rgb),
    })).sort((a, b) => a.distance - b.distance)[0];
    expect(
      nearest.distance,
      `ink ${styles.color} should be near #1A1814 or #12100c`,
    ).toBeLessThanOrEqual(12);

    const inputFamily = await page
      .locator('.dab-sign-form input[name="name"]')
      .evaluate((el) => getComputedStyle(el).fontFamily);
    expect(inputFamily).not.toMatch(/Meddon|Italianno|Pinyon|Great Vibes/i);
  });
});
