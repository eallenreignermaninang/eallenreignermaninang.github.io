// tests/pages/PortfolioPage.js
//
// 📌 What is a Page Object Model (POM)?
// Instead of writing selectors (like '#about', '.skills') directly in every test,
// we collect them all here in one place.
// Benefits:
//   ✅ If your HTML changes, you only update ONE file (this one), not every test
//   ✅ Tests become easier to read — they say WHAT they do, not HOW
//   ✅ This is a design pattern interviewers WILL ask about

const { expect } = require('@playwright/test');

class PortfolioPage {
  /**
   * @param {import('@playwright/test').Page} page
   * The `page` object is Playwright's way of controlling the browser.
   * We receive it from each test and store it here.
   */
  constructor(page) {
    this.page = page;

    // 🔗 Navigation links in your navbar
    this.navAbout      = page.locator('a[href="#about"]');
    this.navSkills     = page.locator('a[href="#skills"]');
    this.navQA         = page.locator('a[href="#qa"]');
    this.navQADocs     = page.locator('a[href="#qa-docs"]');
    this.navProjects   = page.locator('nav a[href="#projects"]');
    this.navContact    = page.locator('nav a[href="#contact"]');

    // 🏠 Hero section — the first thing visitors see
    // NOTE: Your HTML has <h1> in the header (logo) and <h2> in the hero.
    // We scope to .hero h2 so we grab the right element.
    this.heroHeading   = page.locator('.hero h2');
    this.heroSubtitle  = page.locator('.hero p').first();
    // .btn scopes this to the blue button, not the nav link
    this.viewProjectsBtn = page.locator('.hero a.btn[href="#projects"]');

    // 📋 Sections — each major section of your portfolio
    this.aboutSection    = page.locator('#about');
    this.skillsSection   = page.locator('#skills');
    this.qaSection       = page.locator('#qa');
    this.qaDocsSection   = page.locator('#qa-docs');
    this.projectsSection = page.locator('#projects');
    this.contactSection  = page.locator('#contact');

    // 📬 Contact links
    // Scoped to #contact so we don't accidentally grab the project's "View Code" button
    this.emailLink    = page.locator('#contact a[href^="mailto:"]');
    this.githubLink   = page.locator('#contact a[href*="github.com"]');
    this.linkedinLink = page.locator('#contact a[href*="linkedin.com"]');

    // 🧪 QA Documentation section
    this.qaFilterButtons = page.locator('#qa-docs button, .filter-btn');
    this.qaTableRows     = page.locator('table tbody tr, .qa-item');
    this.qaSearchInput   = page.locator('input[type="text"], input[placeholder*="search" i]');
  }

  // ─────────────────────────────────────────────
  // ACTIONS — things you DO on the page
  // ─────────────────────────────────────────────

  /** Navigate to the portfolio homepage */
  async goto() {
    await this.page.goto('/');
  }

  /** Click a nav link and wait for the page to settle */
  async clickNav(locator) {
    await locator.click();
    await this.page.waitForTimeout(500); // small wait for smooth scroll
  }

  // ─────────────────────────────────────────────
  // ASSERTIONS — things you CHECK on the page
  // ─────────────────────────────────────────────

  /** Confirm a section is visible in the viewport */
  async expectSectionVisible(locator) {
    await expect(locator).toBeVisible();
  }

  /** Confirm the page title contains your name */
  async expectCorrectPageTitle() {
    await expect(this.page).toHaveTitle(/Eallen/i);
  }
}

// Export the class so test files can import and use it
module.exports = { PortfolioPage };