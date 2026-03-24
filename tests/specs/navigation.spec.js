// tests/specs/navigation.spec.js
//
// 🧭 NAVIGATION TESTS
// These tests verify that your navbar works correctly —
// that every link exists and points to the right section.
//
// WHY THIS MATTERS:
// Broken navigation is one of the most common UI bugs.
// Testing it shows you think about user experience, not just code.

const { test, expect } = require('@playwright/test');
const { PortfolioPage } = require('../pages/PortfolioPage');

// `test.describe` groups related tests together under one label
test.describe('Navigation', () => {

  // `test.beforeEach` runs BEFORE every test inside this describe block
  // Here we open the portfolio page so every test starts fresh
  test.beforeEach(async ({ page }) => {
    const portfolio = new PortfolioPage(page);
    await portfolio.goto();
  });

  test('Page title should contain my name', async ({ page }) => {
    // ✅ Checks: Does the browser tab show "Eallen" in the title?
    await expect(page).toHaveTitle(/Eallen/i);
  });

  test('All navigation links should be visible', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    // ✅ Checks: Is every nav link present on the page?
    await expect(portfolio.navAbout).toBeVisible();
    await expect(portfolio.navSkills).toBeVisible();
    await expect(portfolio.navQA).toBeVisible();
    await expect(portfolio.navQADocs).toBeVisible();
    await expect(portfolio.navProjects).toBeVisible();
    await expect(portfolio.navContact).toBeVisible();
  });

  test('Clicking About nav link should show the About section', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    // 🖱️ Action: Click the About link
    await portfolio.clickNav(portfolio.navAbout);

    // ✅ Check: Is the About section now visible?
    await expect(portfolio.aboutSection).toBeVisible();
  });

  test('Clicking Projects nav link should show the Projects section', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    await portfolio.clickNav(portfolio.navProjects);
    await expect(portfolio.projectsSection).toBeVisible();
  });

  test('Clicking Contact nav link should show the Contact section', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    await portfolio.clickNav(portfolio.navContact);
    await expect(portfolio.contactSection).toBeVisible();
  });

  test('Clicking QA Docs nav link should show the QA Documentation section', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    await portfolio.clickNav(portfolio.navQADocs);
    await expect(portfolio.qaDocsSection).toBeVisible();
  });

});
