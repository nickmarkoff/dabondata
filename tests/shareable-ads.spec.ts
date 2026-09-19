import { expect, test } from "@playwright/test";

const AD_FILES = [
  "01-dabs-on-datacenters.jpg",
  "02-she-times-driveway.jpg",
  "03-asking-for-a-deal.jpg",
  "04-three-towns-one-table.jpg",
  "05-campus-still-gets-built.jpg",
  "06-apartments-follow-boundary.jpg",
] as const;

test.describe("Shareable ads", () => {
  test("Involve links to the gallery; downloads return JPEGs at 390", async ({
    page,
    request,
  }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/involve");

    const cta = page.getByRole("link", { name: "Share these ads" });
    await expect(cta).toBeVisible();
    const ctaBox = await cta.boundingBox();
    expect(ctaBox, "Share these ads tap target").not.toBeNull();
    expect(ctaBox!.height).toBeGreaterThanOrEqual(44);

    await cta.click();
    await expect(page).toHaveURL(/\/involve\/ads$/);
    await expect(page.locator(".dab-prose h2")).toHaveText("Shareable ads");

    const cards = page.locator("ul.dab-ads-grid > li.dab-ads-card");
    await expect(cards).toHaveCount(AD_FILES.length);

    const downloads = page.locator("a.dab-ads-download");
    await expect(downloads).toHaveCount(AD_FILES.length);

    for (let i = 0; i < AD_FILES.length; i += 1) {
      const card = cards.nth(i);
      const img = card.locator("img.dab-ads-preview");
      await expect(img).toBeVisible();
      const naturalWidth = await img.evaluate((el) => (el as HTMLImageElement).naturalWidth);
      expect(naturalWidth, `${AD_FILES[i]} should render`).toBeGreaterThan(0);

      const download = card.locator("a.dab-ads-download");
      await expect(download).toHaveText("Download");
      await expect(download).toHaveAttribute("href", `/art/ads/${AD_FILES[i]}`);
      await expect(download).toHaveAttribute("download", AD_FILES[i]);
      const box = await download.boundingBox();
      expect(box, `${AD_FILES[i]} download tap`).not.toBeNull();
      expect(box!.height).toBeGreaterThanOrEqual(44);

      const res = await request.get(`/art/ads/${AD_FILES[i]}`);
      expect(res.status(), `${AD_FILES[i]} status`).toBe(200);
      expect(res.headers()["content-type"]).toMatch(/image\/jpeg/);
      const body = await res.body();
      expect(body.byteLength).toBeGreaterThan(1000);
    }
  });
});
