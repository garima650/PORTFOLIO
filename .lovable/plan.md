

# Portfolio Updates Plan

## Changes Overview

Three updates to the portfolio site:

---

### 1. Add Extracurricular Activities to the About/Bio Section

In `src/components/AboutSection.tsx`, add a new "Extracurricular Activities" block after the bio text inside the glass card. This will include three activities displayed as styled tags/badges:

- **Singing** (with Music icon)
- **Crafting** (with Palette icon)
- **Participated in Women Empowerment** (with Heart/Users icon)

These will appear as visually distinct items with icons, fitting the existing glass/glow design style.

---

### 2. Add LinkedIn Button in the Navbar (Before "Let's Connect")

In `src/components/Navbar.tsx`, add a LinkedIn icon button right before the "Let's Connect" CTA button in both desktop and mobile views. It will link to `https://www.linkedin.com/in/garima-agarwal-1a9645378` and open in a new tab.

---

### 3. Make All Navigation Tabs/Badges Fully Elliptical

Update the border radius on interactive elements that currently use `rounded-md`, `rounded-sm`, or `rounded-lg` to use `rounded-full` instead, making them pill/elliptical shaped. This applies to:

- **Navbar nav links** hover underline containers (already fine)
- **"Let's Connect" button** in Navbar (`btn-primary-glow` class) -- update `rounded-lg` to `rounded-full` in `src/index.css`
- **"View Projects" / "Contact Me" buttons** in HeroSection -- same class update applies
- **`btn-outline-glow`** class -- update `rounded-lg` to `rounded-full` in `src/index.css`
- **Section badge pills** (like "About Me", "Get in Touch") -- already `rounded-full`, no change needed
- **Form inputs** -- update from `rounded-lg` to `rounded-full` in ContactSection
- **Logo badge** in Navbar -- update from `rounded-lg` to `rounded-full`

---

## Technical Details

### Files to modify:

1. **`src/components/AboutSection.tsx`** -- Add extracurricular activities section with icons after the bio paragraphs
2. **`src/components/Navbar.tsx`** -- Add LinkedIn icon button before the "Let's Connect" button (desktop and mobile)
3. **`src/index.css`** -- Change `rounded-lg` to `rounded-full` in `.btn-primary-glow` and `.btn-outline-glow` classes
4. **`src/components/Navbar.tsx`** -- Update logo container from `rounded-lg` to `rounded-full`
5. **`src/components/ContactSection.tsx`** -- Update form input `rounded-lg` to `rounded-full`

