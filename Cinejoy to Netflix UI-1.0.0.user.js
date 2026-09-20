// ==UserScript==
// @name         Cinejoy to Netflix UI
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Changes the default Cinejoy UI to look more like Netflix
// @author       Berdi1221
// @license      MIT
// @match        *://cinejoy.to/*
// @match        *://cinejoy.pk/*
// @grant        GM_addStyle
// @updateURL    https://raw.githubusercontent.com/YourUsername/YourRepo/main/cinejoy-to-netflix.user.js
// @downloadURL  https://raw.githubusercontent.com/YourUsername/YourRepo/main/cinejoy-to-netflix.user.js
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
        :root {
            --netflix-bg: #141414 !important;
            --theme-themePreview-primary: transparent !important;
            --theme-root-bg: #141414 !important;
        }

        html, body {
            background-color: #141414 !important;
            color: #e5e5e5 !important;
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
            overflow-x: hidden !important;
        }

        [style*="contain: strict"], .ambient-bleed, .ambient-blur {
            display: none !important;
            opacity: 0 !important;
            background: transparent !important;
        }

        /* Full-Bleed Layout Rules */
        .px-6, .lg\\:px-16, .lg\\:px-12 {
            padding-left: 0 !important;
            padding-right: 0 !important;
        }
        .group\\/row > div:first-child,
        .group\\/row > div:nth-child(2) > div:last-child {
            padding-left: 2rem !important;
            padding-right: 2.0rem !important;
        }

        .rounded-2xl { border-radius: 0px !important; }
        .group\\/tile div { border-radius: 9999px !important; }
        a[href*="/provider/"] div.rounded-2xl { border-radius: 1rem !important; }

        .theme-btn-primary, .hero-action-pill, .hero-action-pill button { border-radius: 4px !important; }
        .theme-btn-primary { background-color: #ffffff !important; color: #000000 !important; font-weight: 700 !important; box-shadow: none !important; }

        /* =========================================
            DESKTOP ONLY (>= 1024px)
            Left Vertical Rail & Page Content Alignment
           ========================================= */
        @media (min-width: 1024px) {
            /* Reset root wrappers so content starts right after the 80px sidebar */
            .app-shell,
            .app-shell > main,
            body > div:first-of-type {
                margin-left: 80px !important;
                padding-left: 0 !important;
                width: calc(100vw - 80px) !important;
                max-width: calc(100vw - 80px) !important;
                background-color: #141414 !important;
            }

            /* TARGETING HERO BANNER MARGIN */
            .app-shell .lg\\:pl-16,
            .app-shell div[class*="lg:pl-16"],
            div[class*="absolute inset-0"][class*="lg:pl-16"] {
                padding-left: 3.5rem !important;
            }

            /* FIX: Provider-Selector & Because-Selector Alignment */
            .provider-selector,
            div[class*="provider-selector"],
            .because-selector,
            div[class*="because-selector"] {
                padding-left: 2rem !important;
            }

            .header-row {
                position: fixed !important;
                top: 0 !important;
                bottom: 0 !important;
                left: 0 !important;
                width: 80px !important;
                height: 100vh !important;
                flex-direction: column !important;
                justify-content: center !important;
                align-items: center !important;
                background: #101010 !important;
                border-right: 1px solid rgba(255, 255, 255, 0.05) !important;
                padding: 0 !important;
                z-index: 9999 !important;
                overflow: visible !important;
            }

            .header-row > div:first-child, .nav-divider, .nav-pill, .theme-pill-bg {
                display: none !important;
            }

            .desktop-nav {
                flex-direction: column !important;
                background: transparent !important;
                border: none !important;
                box-shadow: none !important;
                gap: 1.25rem !important;
                padding: 0 !important;
                width: 100% !important;
                overflow: visible !important;
            }

            .desktop-nav .nav-item {
                width: 100% !important;
                height: 52px !important;
                display: flex !important;
                justify-content: center !important;
                align-items: center !important;
                padding: 0 !important;
                border-radius: 0 !important;
                background: transparent !important;
                opacity: 1 !important;
                position: relative !important;
                font-size: 0 !important;
                color: transparent !important;
                box-shadow: none !important;
                overflow: visible !important;
            }

            .desktop-nav .nav-item:has(.custom-nav-icon) .lucide-icon,
            .desktop-nav .nav-item:has(.custom-nav-icon) span.flex {
                display: none !important;
            }

            .desktop-nav .nav-item svg.custom-nav-icon {
                font-size: 26px !important;
                width: 26px !important;
                height: 26px !important;
                stroke: none !important;
                fill: #808080 !important;
                margin: auto !important;
                transition: fill 0.2s ease-in-out;
            }

            .desktop-nav .nav-item.is-icon svg.lucide-icon {
                fill: none !important;
                stroke: #808080 !important;
                width: 24px !important;
                height: 24px !important;
            }

            .desktop-nav .nav-item:hover svg.custom-nav-icon,
            .desktop-nav .nav-item.theme-icon-active svg.custom-nav-icon,
            .desktop-nav .nav-item[class*="active"] svg.custom-nav-icon {
                fill: #ffffff !important;
            }

            .desktop-nav .nav-item.is-icon:hover svg.lucide-icon {
                fill: none !important;
                stroke: #ffffff !important;
            }

            .desktop-nav .nav-item.theme-icon-active,
            .desktop-nav .nav-item[class*="active"] {
                box-shadow: inset 3px 0 0 #e50914 !important;
            }

            .header-row [role="menu"],
            .header-row [role="dialog"],
            .header-row .absolute,
            .desktop-nav .absolute,
            div[class*="popover"],
            div[class*="dropdown"] {
                position: fixed !important;
                left: 85px !important;
                bottom: 30px !important;
                top: auto !important;
                right: auto !important;
                transform: none !important;
                background-color: #181818 !important;
                border: 1px solid rgba(255, 255, 255, 0.15) !important;
                border-radius: 8px !important;
                z-index: 9999999 !important;
                min-width: 200px !important;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.9) !important;
                padding: 8px !important;
            }
        }

        /* =========================================
            TABLET & MOBILE (< 1024px)
            iOS Glass Pill Floating Menu & Unified Icons
           ========================================= */
        @media (max-width: 1023px) {
            .app-shell {
                margin-left: 0 !important;
                margin-bottom: 90px !important;
                width: 100% !important;
            }

            .mobile-nav-bar, .mobile-nav-layout, .mobile-custom-pill {
                position: fixed !important;
                bottom: 24px !important;
                left: 50% !important;
                transform: translateX(-50%) !important;
                margin: 0 !important;

                width: auto !important;
                height: 60px !important;

                background: rgba(25, 25, 25, 0.8) !important;
                backdrop-filter: blur(24px) saturate(180%) !important;
                -webkit-backdrop-filter: blur(24px) saturate(180%) !important;
                border: 1px solid rgba(255, 255, 255, 0.12) !important;
                border-radius: 9999px !important;
                box-shadow: 0 12px 36px rgba(0, 0, 0, 0.6) !important;

                display: flex !important;
                flex-direction: row !important;
                justify-content: center !important;
                align-items: center !important;
                padding: 0 10px !important;
                gap: 8px !important;
                z-index: 99999 !important;
                box-sizing: border-box !important;
            }

            .mobile-nav-bar a, .mobile-nav-layout a, .mobile-custom-pill a {
                flex: 0 0 44px !important;
                width: 44px !important;
                height: 44px !important;
                min-width: 44px !important;
                max-width: 44px !important;
                border-radius: 50% !important;

                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                margin: 0 !important;
                padding: 0 !important;
                background: transparent !important;
                transform: none !important;
            }

            .mobile-nav-bar a:has(.custom-nav-icon) .lucide-icon,
            .mobile-nav-layout a:has(.custom-nav-icon) .lucide-icon,
            .mobile-custom-pill a:has(.custom-nav-icon) .lucide-icon {
                display: none !important;
            }

            .mobile-nav-bar svg.custom-nav-icon,
            .mobile-nav-layout svg.custom-nav-icon,
            .mobile-custom-pill svg.custom-nav-icon {
                width: 22px !important;
                height: 22px !important;
                fill: #808080 !important;
                stroke: none !important;
                margin: auto !important;
                transition: fill 0.2s ease-in-out;
            }

            .mobile-nav-bar a:hover svg.custom-nav-icon,
            .mobile-nav-bar a.theme-glass-tint-active svg.custom-nav-icon,
            .mobile-nav-layout a:hover svg.custom-nav-icon,
            .mobile-nav-layout a.theme-glass-tint-active svg.custom-nav-icon,
            .mobile-custom-pill a:hover svg.custom-nav-icon,
            .mobile-custom-pill a.theme-glass-tint-active svg.custom-nav-icon {
                fill: #ffffff !important;
            }

            .mobile-nav-bar .theme-glass-tint-active,
            .mobile-nav-layout .theme-glass-tint-active,
            .mobile-custom-pill .theme-glass-tint-active {
                background: rgba(255, 255, 255, 0.15) !important;
            }
        }
    `);

    const SVGS = {
        home: `<svg class="custom-nav-icon" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>`,
        movie: `<svg class="custom-nav-icon" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>`,
        tv: `<svg class="custom-nav-icon" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/></svg>`,
        list: `<svg class="custom-nav-icon" viewBox="0 0 24 24"><path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"/></svg>`
    };

    function fixDesktopNav() {
        if (window.innerWidth < 1024) return;
        const navItems = document.querySelectorAll('.desktop-nav .nav-item');

        navItems.forEach((item, index) => {
            if (item.querySelector('.custom-nav-icon') || item.classList.contains('is-icon') || item.querySelector('.lucide-settings')) {
                return;
            }
            const text = item.textContent.trim().toLowerCase();
            let iconMarkup = null;
            if (text.includes('home') || index === 0) iconMarkup = SVGS.home;
            else if (text.includes('movie') || index === 1) iconMarkup = SVGS.movie;
            else if (text.includes('show') || text.includes('tv') || index === 2) iconMarkup = SVGS.tv;
            else if (text.includes('list') || index === 3) iconMarkup = SVGS.list;

            if (iconMarkup) item.insertAdjacentHTML('afterbegin', iconMarkup);
        });
    }

    function fixMobileNav() {
        if (window.innerWidth >= 1024) return;

        const mobileContainer = document.querySelector('.mobile-nav-bar, .mobile-nav-layout, div[class*="lg:hidden"] > div > div');
        if (mobileContainer) {
            mobileContainer.classList.add('mobile-custom-pill');
            mobileContainer.classList.remove('left-1/2', '-translate-x-1/2');
        }

        const links = document.querySelectorAll('.mobile-custom-pill a, .mobile-nav-bar a, .mobile-nav-layout a, div[class*="lg:hidden"] a');
        links.forEach(link => {
            link.classList.remove('w-[14vw]');

            if (link.querySelector('.custom-nav-icon')) return;
            const href = link.getAttribute('href') || '';
            let iconMarkup = null;
            if (href === '/' || href.endsWith('/')) iconMarkup = SVGS.home;
            else if (href.includes('movie')) iconMarkup = SVGS.movie;
            else if (href.includes('series') || href.includes('tv')) iconMarkup = SVGS.tv;
            else if (href.includes('list')) iconMarkup = SVGS.list;

            if (iconMarkup) {
                link.insertAdjacentHTML('afterbegin', iconMarkup);
            }
        });
    }

    function enforceDropdownPositions() {
        if (window.innerWidth < 1024) return;
        const popups = document.querySelectorAll('.header-row [role="menu"], .header-row [role="dialog"], .header-row .absolute');
        popups.forEach(popup => {
            popup.style.setProperty('left', '85px', 'important');
            popup.style.setProperty('bottom', '30px', 'important');
            popup.style.setProperty('top', 'auto', 'important');
            popup.style.setProperty('right', 'auto', 'important');
            popup.style.setProperty('transform', 'none', 'important');
        });
    }

    let isProcessing = false;
    const observer = new MutationObserver(() => {
        if (isProcessing) return;
        isProcessing = true;

        fixDesktopNav();
        fixMobileNav();
        enforceDropdownPositions();

        setTimeout(() => { isProcessing = false; }, 100);
    });

    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class'] });
    fixDesktopNav();
    fixMobileNav();
})();