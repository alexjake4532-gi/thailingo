from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page()

    # Home Page
    page.goto("http://localhost:3001/")
    page.screenshot(path="home.png", full_page=True)

    # Alphabet Page
    page.goto("http://localhost:3001/alphabet")
    page.screenshot(path="alphabet.png", full_page=True)

    # Vocabulary Page
    page.goto("http://localhost:3001/vocabulary")
    page.screenshot(path="vocabulary.png", full_page=True)

    # Practice Page
    page.goto("http://localhost:3001/practice")
    page.screenshot(path="practice.png", full_page=True)

    # Grammar Page
    page.goto("http://localhost:3001/grammar")
    page.screenshot(path="grammar.png", full_page=True)

    # Profile Page
    page.goto("http://localhost:3001/profile")
    page.screenshot(path="profile.png", full_page=True)

    browser.close()
