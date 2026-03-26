// tests/specs/navigation.spec.js
const { test, expect } = require('@playwright/test');
const { PortfolioPage } = require('../pages/PortfolioPage');

test.describe('Navigation', () => {

  test.beforeEach(async ({ page }) => {
    const portfolio = new PortfolioPage(page);
    await portfolio.goto();
  });

  test('Page title should contain my name', async ({ page }) => {
    await expect(page).toHaveTitle(/Eallen/i);
  });

  test('All navigation links should be visible', async ({ page, isMobile }) => {
    const portfolio = new PortfolioPage(page);

    // On mobile the nav is hidden until hamburger is clicked first
    if (isMobile) {
      await page.click('#hamburger');
      await page.waitForTimeout(300);
    }

    await expect(portfolio.navAbout).toBeVisible();
    await expect(portfolio.navSkills).toBeVisible();
    await expect(portfolio.navQA).toBeVisible();
    await expect(portfolio.navQADocs).toBeVisible();
    await expect(portfolio.navProjects).toBeVisible();
    await expect(portfolio.navContact).toBeVisible();
  });

  test('Clicking About nav link should show the About section', async ({ page, isMobile }) => {
    const portfolio = new PortfolioPage(page);

    if (isMobile) {
      await page.click('#hamburger');
      await page.waitForTimeout(300);
    }

    await portfolio.clickNav(portfolio.navAbout);
    await expect(portfolio.aboutSection).toBeVisible();
  });

  test('Clicking Projects nav link should show the Projects section', async ({ page, isMobile }) => {
    const portfolio = new PortfolioPage(page);

    if (isMobile) {
      await page.click('#hamburger');
      await page.waitForTimeout(300);
    }

    await portfolio.clickNav(portfolio.navProjects);
    await expect(portfolio.projectsSection).toBeVisible();
  });

  test('Clicking Contact nav link should show the Contact section', async ({ page, isMobile }) => {
    const portfolio = new PortfolioPage(page);

    if (isMobile) {
      await page.click('#hamburger');
      await page.waitForTimeout(300);
    }

    await portfolio.clickNav(portfolio.navContact);
    await expect(portfolio.contactSection).toBeVisible();
  });

  test('Clicking QA Docs nav link should show the QA Documentation section', async ({ page, isMobile }) => {
    const portfolio = new PortfolioPage(page);

    if (isMobile) {
      await page.click('#hamburger');
      await page.waitForTimeout(300);
    }

    await portfolio.clickNav(portfolio.navQADocs);
    await expect(portfolio.qaDocsSection).toBeVisible();
  });

});