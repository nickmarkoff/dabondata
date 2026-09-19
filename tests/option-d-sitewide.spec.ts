import { expect, test } from "@playwright/test";

const INNER = ["/involve", "/sign", "/statement"] as const;

test.describe("Option D sitewide style", () => {
  test("home keeps the full cartouche; 390 shell clears the woodcut rails", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/");

    await expect(page.locator("img.dab-masthead")).toBeVisible();
    await expect(page.locator(".dab-wordmark")).toHaveCount(0);
    await expect(page.locator(".dab-page")).toHaveClass(/dab-page-home/);
    await expect(page.locator(".dab-doc-card .dab-iron-phrase")).toHaveCount(1);

    const pageBox = await page.locator(".dab-page").boundingBox();
    const shellBox = await page.locator(".dab-shell").boundingBox();
    expect(pageBox, "page box").not.toBeNull();
    expect(shellBox, "shell box").not.toBeNull();
    const inset = shellBox!.x - pageBox!.x;
    expect(inset).toBeGreaterThanOrEqual(48);
  });

  test("inner routes use wordmark + fleuron rule, not a second cartouche", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });

    for (const href of INNER) {
      await page.goto(href);
      await expect(page.locator("img.dab-masthead")).toHaveCount(0);
      await expect(page.locator(".dab-wordmark")).toHaveText("DAB ENERGY TRUST");
      await expect(page.locator(".dab-page")).toHaveClass(/dab-page-inner/);
      await expect(page.locator(".dab-inner-rail")).toBeVisible();
      await expect(page.locator("img.dab-divider")).toBeVisible();

      const h2 = page.locator(".dab-prose h2").first();
      await expect(h2).toBeVisible();
      const styles = await h2.evaluate((el) => {
        const computed = getComputedStyle(el);
        return {
          fontWeight: computed.fontWeight,
          borderBottomWidth: computed.borderBottomWidth,
          borderBottomStyle: computed.borderBottomStyle,
          textDecorationLine: computed.textDecorationLine,
        };
      });
      expect(Number(styles.fontWeight)).toBeGreaterThanOrEqual(700);
      expect(
        styles.borderBottomWidth === "0px" || styles.borderBottomStyle === "none",
      ).toBe(true);
      expect(styles.textDecorationLine === "none" || styles.textDecorationLine === "").toBe(
        true,
      );
    }
  });

  test("sign oath keeps the iron phrase; involve lead stays framed", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/sign");
    await expect(page.locator(".dab-sign-oath h3.dab-iron-phrase")).toHaveText(
      "Affirmation before you sign",
    );

    await page.goto("/involve");
    await expect(page.locator(".dab-involve-lede .dab-iron-phrase")).toBeVisible();
  });
});

