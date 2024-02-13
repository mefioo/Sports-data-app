import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test.describe("simulation", () => {
  test("has title", async ({ page }) => {
    await expect(page).toHaveTitle(/Sports company app/);
  });

  test("has teams", async ({ page }) => {
    await expect(page.getByText("Germany")).toBeAttached();
    await expect(page.getByText("Poland")).toBeAttached();
    await expect(page.getByText("Brazil")).toBeAttached();
    await expect(page.getByText("Mexico")).toBeAttached();
    await expect(page.getByText("Argentina")).toBeAttached();
    await expect(page.getByText("Uruguay")).toBeAttached();
  });

  test("has default total goals", async ({ page }) => {
    await expect(page.getByText("Total goals: 0")).toBeAttached();
  });

  test("has proper button text", async ({ page }) => {
    await expect(page.getByText("Start")).toBeAttached();
  });

  test("has proper title", async ({ page }) => {
    await expect(page.getByText("Katar 2023")).toBeAttached();
  });

  test("has proper button text after click", async ({ page }) => {
    page.getByText("Start").click();

    await expect(page.getByText("Finish")).toBeAttached();
  });

  test("has proper button text after two clicks", async ({ page }) => {
    page.getByText("Start").click();
    page.getByText("Finish").click();

    await expect(page.getByText("Restart")).toBeAttached();
  });

  test("has proper total goals after 10 seconds", async ({ page }) => {
    page.getByText("Start").click();

    await page.waitForTimeout(11000);

    await expect(page.getByText("Total goals: 1")).toBeAttached();
  });

  test("has proper total goals after 10 seconds and restart", async ({
    page,
  }) => {
    page.getByText("Start").click();

    await page.waitForTimeout(11000);

    page.getByText("Finish").click();
    page.getByText("Restart").click();

    await expect(page.getByText("Total goals: 0")).toBeAttached();
  });
});
