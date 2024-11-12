# phokkeomonnyratanak-diary-web

Welcome to the phokkeomonnyratanak-diary-web project repository. This repository contains a note-taking web application implemented using HTML, CSS, and JavaScript.

## Project Conventions Guide

This guide provides conventions and best practices for working on the `phokkeomonnyratanak-diary-web` project.

---

## CSS Conventions

1. **Naming Conventions:**
    - Use lowercase and hyphen-separated class names (`.card-header`, `.note-content`).
    - Use BEM (Block Element Modifier) for complex components (`.card__header--active`).
2. **Structure:**
    - Group related CSS properties (positioning, box model, typography, visual).
    - Place media queries at the end of the CSS file or just below the related rule.
3. **Comments:**
    - Use comments to separate sections (`/* Header Styles */`).
4. **Specificity:**
    - Avoid using IDs for styling.
    - Keep specificity low by using class names.
5. **Vendor Prefixes:**
    - Use autoprefixer to handle vendor prefixes automatically.

---

## HTML Conventions

1. **Doctype:**
    - Always use the HTML5 doctype: `<!DOCTYPE html>`.
2. **Structure:**
    - Use semantic HTML5 elements (`<header>`, `<main>`, `<footer>`, `<section>`).
3. **Attributes:**
    - Use lowercase for attribute names and wrap values in double quotes.
    - Include a `lang` attribute in the `<html>` tag (`<html lang="en">`).
4. **Indentation:**
    - Use 2 spaces for indentation.
5. **Comments:**
    - Use comments to annotate sections (`<!-- Header Section -->`).

---

## JavaScript (JS) Conventions

1. **Syntax:**
    - Use ES6+ features (let, const, arrow functions).
    - Use camelCase for variables and functions (`noteTitle`, `handleSubmit`).
    - Use PascalCase for class names (`MyCard`).
2. **Structure:**
    - Modularize code using ES6 modules.
    - Keep functions small and focused.
3. **Comments:**
    - Use JSDoc for function documentation.
    - Inline comments should explain why, not what.
4. **Error Handling:**
    - Always handle potential errors using try-catch blocks.

---

## Git Conventions

1. **Branches:**
    - Use `main` or `master` for the production branch.
    - Use descriptive names for feature branches (`feature/add-edit-functionality`).
2. **Commits:**
    - Write clear, concise commit messages in imperative mood.
    - Include a subject line and an optional body separated by a blank line.
    - Example:
        
        ```
        Add edit functionality to notes
        
        - Implement edit form
        - Handle save and delete actions
        ```
        
3. **Pull Requests:**
    - Provide a clear title and description.
    - Reference related issues.
4. **Tags:**
    - Use tags for release versions (`v1.0.0`).

---

## Project Setup Convention

1. **Dependencies:**
    - Use npm or yarn for managing dependencies.
    - Include a `package.json` with project metadata and dependencies.
2. **Scripts:**
    - Define scripts for common tasks (start, build, test).
3. **Environment Variables:**
    - Use a `.env` file for environment-specific variables.
    - Do not commit `.env` to version control; use `.env.example` for reference.
4. **Editor Config:**
    - Include an `.editorconfig` file to maintain consistent coding styles.

---

## File Structure Convention

```swift
phokkeomonnyratanak-diary-web/
│
├── public/
│   ├── CARD.html
│   ├── Create.html
│   ├── Dashboard.html
│   └── edit.html
│
├── src/
│   ├── images/
│   │   └── open-book_171322.png
│   │
│   ├── script/
│   │   ├── components/
│   │   │   ├── card.js
│   │   │   └── index.js
│   │   │
│   │   ├── global/
│   │   │   ├── DOM.js
│   │   │   ├── edit.js
│   │   │   └── index.js
│   │
│   ├── styles/
│       ├── components/
│       │   ├── card.css
│       │   └── header.css
│       │
│       ├── layouts/
│       │   ├── create.css
│       │   ├── dashBoard.css
│       │   ├── edit.css
│       │   └── index.css
│       │
│       └── pages/
│           ├── dashBoard.css
│           └── index.css
│
├── .gitignore
├── index.html
└── README.md
# Coffee-Dairy
