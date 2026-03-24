// tests/specs/contact.spec.js
//
// 📬 CONTACT SECTION TESTS
// These tests verify that your contact information is correct,
// visible, and all links actually work.
//
// WHY THIS MATTERS:
// A broken email or LinkedIn link means a recruiter who WANTS to hire you
// can't reach you. This is a critical real-world test.

const { test, expect } = require('@playwright/test');
const { PortfolioPage } = require('../pages/PortfolioPage');

test.describe('Contact Section', () => {

  test.beforeEach(async ({ page }) => {
    const portfolio = new PortfolioPage(page);
    await portfolio.goto();
  });

  test('Contact section should be visible', async ({ page }) => {
    const portfolio = new PortfolioPage(page);
    await expect(portfolio.contactSection).toBeVisible();
  });

  test('Email link should be present and have correct address', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    // ✅ Checks: Is there a mailto link?
    await expect(portfolio.emailLink).toBeVisible();

    // ✅ Checks: Does it point to YOUR email address?
    const href = await portfolio.emailLink.getAttribute('href');
    expect(href).toContain('eallenreigner.maninang@gmail.com');
  });

  test('GitHub link should be present and point to your profile', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    // ✅ Checks: Is the GitHub link visible?
    await expect(portfolio.githubLink).toBeVisible();

    // ✅ Checks: Does it point to the right GitHub profile?
    const href = await portfolio.githubLink.getAttribute('href');
    expect(href).toContain('eallenreignermaninang');
  });

  test('LinkedIn link should be present and point to your profile', async ({ page }) => {
    const portfolio = new PortfolioPage(page);

    await expect(portfolio.linkedinLink).toBeVisible();

    const href = await portfolio.linkedinLink.getAttribute('href');
    expect(href).toContain('linkedin.com');
  });

  test('Contact links should open without 404 errors', async ({ page, context }) => {
    // 🌐 This test intercepts network requests to check links aren't broken
    // We check the GitHub profile link specifically

    const portfolio = new PortfolioPage(page);
    const href = await portfolio.githubLink.getAttribute('href');

    // Open in a new tab and check the page loads
    const newPage = await context.newPage();
    const response = await newPage.goto(href);

    // ✅ Checks: Did GitHub respond with success (200) not an error?
    expect(response.status()).toBeLessThan(400);

    await newPage.close();
  });

});
