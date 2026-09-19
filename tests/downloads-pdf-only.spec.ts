import { expect, test } from "@playwright/test";

const ROUTES = [
  "/",
  "/sources",
  "/plan",
  "/attachments",
  "/involve",
  "/statement",
] as const;

test.describe("PDF-only downloads", () => {
  test("no user-facing .md or .docx download links sitewide", async ({
    page,
  }) => {
    for (const href of ROUTES) {
      await page.goto(href);
      const banned = page.locator(
        'a[href$=".md"], a[href$=".docx"], a[href*=".md?"], a[href*=".docx?"]',
      );
      await expect(banned, `${href} should not link to .md or .docx`).toHaveCount(
        0,
      );
    }
  });

  test("Sources shows three labeled PDF buckets", async ({ page }) => {
    await page.goto("/sources");
    await expect(page.getByRole("heading", { name: "Summary packet" })).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Example emails & letters" }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Official memo & bylaws" }),
    ).toBeVisible();

    const main = page.locator("main");
    await expect(main.locator('a[href="/docs/DABonData.pdf"]')).toBeVisible();
    await expect(
      main.locator('a[href="/docs/DAB_Resident_Proposal_Letter.pdf"]'),
    ).toBeVisible();
    await expect(
      main.locator('a[href="/docs/DAB_Script_Handout.pdf"]'),
    ).toBeVisible();
    await expect(
      main.locator('a[href="/docs/DAB_Example_Email.pdf"]'),
    ).toBeVisible();
    await expect(
      main.locator('a[href="/docs/DAB_Energy_Trust_Memo.pdf"]'),
    ).toBeVisible();
    await expect(
      main.locator('a[href="/docs/DAB_Energy_Trust_Bylaws.pdf"]'),
    ).toBeVisible();
  });

  test("Plan and Attachments link official memo and full bylaws PDFs", async ({
    page,
  }) => {
    await page.goto("/plan");
    await expect(
      page.locator("main a[href='/docs/DAB_Energy_Trust_Memo.pdf']"),
    ).toBeVisible();
    await expect(
      page.locator("main a[href='/docs/DAB_Energy_Trust_Bylaws.pdf']"),
    ).toBeVisible();

    await page.goto("/attachments");
    await expect(
      page.locator("main a[href='/docs/DAB_Energy_Trust_Memo.pdf']"),
    ).toBeVisible();
    await expect(
      page.locator("main a[href='/docs/DAB_Energy_Trust_Bylaws.pdf']"),
    ).toBeVisible();
  });

  test("footer mirrors PDF buckets and points to Sources", async ({ page }) => {
    await page.goto("/");
    const footer = page.locator("footer.dab-footer");
    await expect(footer.getByText("Summary packet")).toBeVisible();
    await expect(footer.getByText("Example emails & letters")).toBeVisible();
    await expect(footer.getByText("Official memo & bylaws")).toBeVisible();
    await expect(footer.getByRole("link", { name: "All on Sources" })).toHaveAttribute(
      "href",
      "/sources",
    );
    await expect(footer.locator('a[href$=".md"], a[href$=".docx"]')).toHaveCount(0);
  });
});
