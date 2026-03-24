# Eallen Reigner Maninang — Portfolio Website

Personal portfolio website built with HTML, CSS, and JavaScript, deployed via GitHub Pages — with a full automated test suite powered by Playwright.

![Playwright Tests](https://github.com/eallenreignermaninang/eallenreignermaninang.github.io/actions/workflows/playwright.yml/badge.svg)

**Live Demo:** https://eallenreignermaninang.github.io/

---

## About the Site

A responsive portfolio showcasing QA engineering and frontend development work, featuring interactive QA documentation, project showcases, and cross-browser compatibility.

### Features
- Responsive web design
- Interactive QA documentation with search and filter
- Hosted and deployed via GitHub Pages
- CI/CD pipeline using GitHub Actions

### Technologies Used
- HTML, CSS, JavaScript
- GitHub Actions (CI/CD)

---

## Automated Testing

This project includes a Playwright test suite that automatically verifies the portfolio works correctly across multiple browsers and devices.

### What's Being Tested

| Test File | What It Covers |
|---|---|
| `navigation.spec.js` | Navbar links, page title, section routing |
| `sections.spec.js` | Hero, Skills, QA, Projects content + responsive design |
| `contact.spec.js` | Email, GitHub, LinkedIn links and validity |

### Test Structure

```
tests/
├── pages/
│   └── PortfolioPage.js   # Page Object Model — all selectors in one place
└── specs/
    ├── navigation.spec.js  # Navigation tests
    ├── sections.spec.js    # Content & responsiveness tests
    └── contact.spec.js     # Contact link tests
playwright.config.js        # Playwright configuration
```

### Browsers Tested
- Chromium (Desktop Chrome)
- Firefox
- WebKit (Desktop Safari)
- Mobile Chrome (Pixel 5)

### Design Pattern
Uses the **Page Object Model (POM)** — all element selectors are centralized in `tests/pages/PortfolioPage.js`. If the UI changes, only the Page Object needs updating, not every test file.

---

## Running Tests Locally

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Run all tests (headless)
npm test

# Run tests with browser visible
npm run test:headed

# View the HTML report after running
npm run test:report
```

---

## CI/CD

Every push and pull request automatically:
1. Runs the full Playwright test suite across all browsers
2. Uploads an HTML test report as a downloadable artifact
3. Flags any failures before they reach the live site

View the latest run: [Actions Tab](https://github.com/eallenreignermaninang/eallenreignermaninang.github.io/actions)

---

## Recent Updates (2026)
- Added Playwright automated test suite (UI, content, contact tests)
- Added Page Object Model design pattern
- Expanded CI/CD pipeline to include automated browser testing
- Identified mobile navigation bug via automated tests (Issue #1)
- Fix in progress: adding responsive hamburger menu (fix/mobile-nav)
- Improved documentation and project structure

---

## Author

**Eallen Reigner Maninang** — QA Engineer & Frontend Developer

[LinkedIn](https://linkedin.com/in/eallenm) · [GitHub](https://github.com/eallenreignermaninang)