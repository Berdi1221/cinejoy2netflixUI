# 🎬 Cinejoy to Netflix UI

> Transform the default Cinejoy layout into a sleek, modern, desktop and mobile Netflix-inspired interface.

A custom Tampermonkey user script designed to completely overhaul the visual presentation of **Cinejoy.to** and **Cinejoy.pk**. It replaces the default site structure with a clean, immersive dark theme, responsive navigation rails, custom iconography, and full-bleed content layouts inspired by Netflix.

---

## 📸 Interface Preview

Compare the default layout with the revamped Netflix-style experience:

### Before (Default Interface)
![Cinejoy Default UI](https://raw.githubusercontent.com/Berdi1221/cinejoy2netflixUI/main/images/preview1.png)

### After (Netflix Style Interface)
![Cinejoy Netflix UI](https://raw.githubusercontent.com/Berdi1221/cinejoy2netflixUI/main/images/preview2.png)

---

## ✨ Key Features

* 🎨 **Deep Dark Netflix Aesthetic:** Sets a true `#141414` deep-dark background, eliminates unnecessary ambient glow/bleed artifacts, and applies clean typography (`Helvetica Neue`).
* 🖥️ **Desktop Vertical Navigation Rail:**
  * Replaces the bulky top banner header with a compact **80px vertical sidebar** on screens $\ge$ 1024px.
  * Adds custom vector icons (Home, Movies, TV Shows, My List) with smooth hover and active state highlights (`#E50914` left-border accent).
  * Automatically repositions drop-down menus and settings popovers to anchor neatly next to the side rail.
* 📱 **Mobile & Tablet Floating Glass Pill:**
  * Converts mobile navigation into a sleek, centered **iOS-style frosted glass floating pill bar**.
  * Employs real-time `backdrop-filter` blurring and circular touch targets optimized for mobile screens (< 1024px).
* 📐 **Full-Bleed Media Grid:** Restructures container padding, strips out unnecessary outer margins, and cleans up rounded borders on media tiles to match modern streaming service cards.
* ⚡ **Lightweight & Fast:** Built entirely with native `GM_addStyle` CSS rules and an optimized, throttled `MutationObserver` to ensure zero performance overhead or memory leaks during site navigation.

---

## 🌐 Supported Domains

The script natively matches and executes on:
* `https://cinejoy.to/*`
* `https://cinejoy.pk/*`

---

## 🚀 Installation Guide

### Prerequisites
Make sure you have a compatible userscript manager installed in your browser:
* [Tampermonkey](https://www.tampermonkey.net/) *(Recommended)*
* [Violentmonkey](https://violentmonkey.github.io/)

### Installation Options

#### Option A: Direct via Greasy Fork (Easiest)
1. Head over to the official **[Greasy Fork Page](https://greasyfork.org/)** *(Replace with your script link)*.
2. Click the green **Install this script** button.
3. Confirm the installation when prompted by Tampermonkey.

#### Option B: Direct via Raw GitHub Link
1. Click the link below to open the raw user script file:
   👉 **[Install Cinejoy to Netflix UI](https://raw.githubusercontent.com/Berdi1221/cinejoy2netflixUI/main/Cinejoy%20to%20Netflix%20UI-1.0.0.user.js)**
2. Tampermonkey will automatically detect the `.user.js` header and prompt you to install it.

---

## 🛠️ How It Works

1. **CSS Overrides (`GM_addStyle`):** Injects dynamic flexbox layouts, media queries, and color updates into the DOM prior to rendering.
2. **Dynamic DOM Adjustments:** Uses a lightweight `MutationObserver` to detect route transitions or single-page application (SPA) updates on Cinejoy, seamlessly mapping text items into custom vector icons on the fly.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.
