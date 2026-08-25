from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()

    # Home Page
    page.goto("http://localhost:3001/")
    page.screenshot(path="home_fixed.png", full_page=True)

    browser.close()
