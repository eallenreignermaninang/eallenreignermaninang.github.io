// tests/specs/sections.spec.js
//
// 📄 SECTIONS & CONTENT TESTS
// These tests verify that the key content of your portfolio
// actually appears on the page correctly.
//
// WHY THIS MATTERS:
// A page can load without errors but still show wrong or missing content.
// Content tests catch those "silent" bugs — the kind users notice but
// error logs don't.

const { test, expect } = require('@playwright/test');
const { PortfolioPage } = require('../pages/PortfolioPage');

test.describe('Portfolio Sections', () => {

  test.beforeEach(async ({ page }) => {
    const portfolio = new PortfolioPage(page);
    await portfolio.goto();
  });

  // ─── HERO SECTION ───────────────────────────────────────────
  test.describe('Hero Section', () => {

    test('Hero heading should display my name', async ({ page }) => {
      const portfolio = new PortfolioPage(page);

      // ✅ Checks: Does your name appear in the hero h2?
      // NOTE: Your header <h1> is the logo "Eallen", your hero title is <h2>
      await expect(portfolio.heroHeading).toContainText(/Eallen/i);
    });

    test('View Projects button should be visible', async ({ page }) => {
      const portfolio = new PortfolioPage(page);

      // ✅ Checks: Is the CTA button present?
      await expect(portfolio.viewProjectsBtn).toBeVisible();
    });

  });

  // ─── SKILLS SECTION ─────────────────────────────────────────
  test.describe('Skills Section', () => {

    test('Skills section should be present on the page', async ({ page }) => {
      const portfolio = new PortfolioPage(page);

      await expect(portfolio.skillsSection).toBeVisible();
    });

    test('Skills section should mention HTML', async ({ page }) => {
      // ✅ Checks: Does your skills section list HTML?
      // We look at the whole section text, not a specific element
      const skillsText = await page.locator('#skills').innerText();
      expect(skillsText).toMatch(/HTML/i);
    });

    test('Skills section should mention JavaScript', async ({ page }) => {
      const skillsText = await page.locator('#skills').innerText();
      expect(skillsText).toMatch(/JavaScript/i);
    });

  });

  // ─── QA SECTION ─────────────────────────────────────────────
  test.describe('QA Expertise Section', () => {

    test('QA section should be visible', async ({ page }) => {
      const portfolio = new PortfolioPage(page);
      await expect(portfolio.qaSection).toBeVisible();
    });

    test('QA section should display stats', async ({ page }) => {
      // ✅ Checks: Do the stat numbers appear (like "100+" or "50+")?
      const qaText = await page.locator('#qa').innerText();
      expect(qaText).toMatch(/\d+/); // At least one number should appear
    });

  });

  // ─── PROJECTS SECTION ───────────────────────────────────────
  test.describe('Projects Section', () => {

    test('Projects section should be visible', async ({ page }) => {
      const portfolio = new PortfolioPage(page);
      await expect(portfolio.projectsSection).toBeVisible();
    });

    test('Mal De Wear project should be listed', async ({ page }) => {
      // ✅ Checks: Is your featured project mentioned?
      const projectsText = await page.locator('#projects').innerText();
      expect(projectsText).toMatch(/Mal De Wear/i);
    });

    test('Project should have a View Code link', async ({ page }) => {
      // ✅ Checks: Does the project card have a .btn link (the "View Code" button)?
      // Your HTML uses <a class="btn" href="https://github.com/..."> inside #projects
      const codeLink = page.locator('#projects a.btn');
      await expect(codeLink).toBeVisible();
    });

  });

  // ─── RESPONSIVENESS ─────────────────────────────────────────
  test.describe('Responsive Design', () => {

    test('Portfolio should look correct on mobile viewport', async ({ page }) => {
      // 📱 Simulate a mobile screen (iPhone SE size)
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');

      const portfolio = new PortfolioPage(page);

      // ✅ Checks: Core content still visible on mobile
      await expect(portfolio.heroHeading).toBeVisible();
      await expect(portfolio.contactSection).toBeVisible();
    });

    test('Portfolio should look correct on tablet viewport', async ({ page }) => {
      // 📱 Simulate an iPad
      await page.setViewportSize({ width: 768, height: 1024 });
      await page.goto('/');

      const portfolio = new PortfolioPage(page);
      await expect(portfolio.heroHeading).toBeVisible();
    });

  });

});
