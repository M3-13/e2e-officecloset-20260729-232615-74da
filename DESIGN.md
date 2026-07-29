# Design — Project Identity

> This document is project-long-lived. Tokens are not changed without
> the Architect's approval. Developers MUST use these tokens
> instead of improvising their own colors/spacings.

## Style Direction

Tiefes Champagner-Schwarz (fast #0D0B0A) mit warmem Gold (#C9A84C) als Akzent – Hollywood-Premieren-Flair. Samtig-dunkle Oberflächen, große Bildkarten mit dezentem Goldrand, elegante Playfair-Display-Serifen für Überschriften und saubere Inter-Sans-Serif für Fließtext.

## Colors

- `--color-bg`: **#0D0B0A**
- `--color-fg`: **#F5F0E8**
- `--color-accent`: **#C9A84C**
- `--color-accent_hover`: **#D9B85C**
- `--color-accent_active`: **#A88A3C**
- `--color-border`: **#2A2520**
- `--color-muted`: **#8A8078**
- `--color-card_bg`: **#151210**
- `--color-card_border`: **#2F2922**
- `--color-danger`: **#C44B4B**
- `--color-danger_hover`: **#D45B5B**
- `--color-success`: **#5B8C5B**
- `--color-input_bg`: **#1A1612**
- `--color-input_border`: **#3A3430**
- `--color-overlay`: **rgba(13, 11, 10, 0.85)**

## Typography

- `font_family`: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- `heading_font_family`: 'Playfair Display', 'Times New Roman', serif
- `heading_weight`: 600
- `body_weight`: 400
- `size_scale`: 12px / 14px / 16px / 18px / 24px / 32px / 48px

## Spacing Scale

- `--space-0`: 4px
- `--space-1`: 8px
- `--space-2`: 12px
- `--space-3`: 16px
- `--space-4`: 24px
- `--space-5`: 32px
- `--space-6`: 48px
- `--space-7`: 64px

## Border-Radii

- `--radius-sm`: 4px
- `--radius-md`: 8px
- `--radius-lg`: 16px
- `--radius-pill`: 999px

## Components

### Button – Primary

padding 12px 28px, radius md, bg=accent #C9A84C, fg=#0D0B0A (dunkel für Kontrast), font-weight 600, font-size 14px, letter-spacing 0.5px, text-transform uppercase. Hover: bg=accent_hover #D9B85C, leichter box-shadow 0 0 20px rgba(201,168,76,0.4) (Gold-Glow). Active: bg=accent_active #A88A3C, kein Glow. Disabled: opacity 0.4, cursor not-allowed. Min-height 44px (mobile Tap-Target). Transition: all 0.2s ease.

### Button – Secondary / Ghost

padding 12px 28px, radius md, bg=transparent, fg=accent #C9A84C, border 1.5px solid #C9A84C, font-weight 600, font-size 14px, letter-spacing 0.5px. Hover: bg=rgba(201,168,76,0.1), border=accent_hover. Active: bg=rgba(201,168,76,0.2). Disabled: opacity 0.4. Min-height 44px. Transition: all 0.2s ease.

### Button – Danger

Wie Primary, aber bg=danger #C44B4B, fg=#F5F0E8. Hover: bg=danger_hover #D45B5B, box-shadow 0 0 16px rgba(196,75,75,0.35). Active: bg=#B43B3B. Min-height 44px.

### Input Field

padding 12px 16px, radius md, bg=input_bg #1A1612, fg=#F5F0E8, border 1px solid input_border #3A3430, font-size 14px, font-family 'Inter'. Placeholder: color=muted #8A8078. Focus: border=accent #C9A84C, box-shadow 0 0 0 3px rgba(201,168,76,0.15), outline none. Error: border=danger #C44B4B. Disabled: opacity 0.5. Min-height 44px.

### Card – Kleidungsstück (Galerie)

bg=card_bg #151210, border 1px solid card_border #2F2922, radius lg 16px, overflow hidden. Bildbereich: aspect-ratio 3/4, object-fit cover, Hintergrund #1A1612 (falls kein Bild). Info-Bereich: padding 12px 16px, h3 in heading-font (Playfair Display) 16px fg, Kategorie-Label in muted 12px uppercase. Hover: border=accent #C9A84C, transform scale(1.02), box-shadow 0 8px 30px rgba(0,0,0,0.5). Transition: all 0.25s ease.

### Kategorie-Chip / Filter-Pill

padding 6px 16px, radius pill 999px, bg=transparent, fg=muted #8A8078, border 1px solid #2A2520, font-size 12px, font-weight 500, cursor pointer. Hover: border=accent, fg=accent. Active/selected: bg=accent #C9A84C, fg=#0D0B0A, border=accent, font-weight 600. Min-height 32px. Transition: all 0.2s ease.

### Modal / Dialog

bg=card_bg #151210, border 1px solid #2F2922, radius lg 16px, padding 32px, max-width 480px, z-index auf Overlay-Ebene. Overlay: bg=overlay rgba(13,11,10,0.85), backdrop-filter blur(4px). Header: Playfair Display 24px, fg. Schließen-Button: 32×32px, radius sm, Icon-Kreuz in muted, hover=accent.

### Navigation / Top Bar

bg=#0D0B0A (gleicht bg), border-bottom 1px solid #2A2520, height 64px, padding 0 24px, flex row align-center. Logo/Name: Playfair Display 20px, fg=accent, letter-spacing 1px. Nav-Links: Inter 14px, fg=muted, hover=fg. Aktiver Link: fg=accent, leichter Unterstrich 2px in accent. Mobile: Hamburger-Icon 44×44px Tap-Target.

### Leerer Zustand / Empty State

Zentrierter Block, padding 64px 24px. Icon/Illustration 64×64px in muted mit 0.3 opacity. Text: Playfair Display 24px fg='#8A8078', darunter Inter 14px muted. CTA-Button (Primary) darunter mit 24px Abstand.

### Toast / Notification

bg=card_bg, border-left 4px solid, radius md, padding 12px 16px, font-size 13px, max-width 360px, fixed bottom-right 24px. Success: border-left=success #5B8C5B, icon checkmark. Error: border-left=danger #C44B4B, icon x-circle. Auto-dismiss nach 4s mit fade-out.

## Layout Principles

- Container max-width 1200px, zentriert mit padding 16px (mobile) / 32px (desktop)
- Breakpoints: mobile 0–639px, tablet 640–1023px, desktop 1024px+
- Galerie-Grid: mobile 2 Spalten (gap 12px), tablet 3 Spalten (gap 16px), desktop 4 Spalten (gap 24px)
- Seiten-Layout: Top-Navigation (fixed, 64px) + Seiteninhalt mit min-height calc(100vh - 64px)
- Formulare (Login/Registrierung/Bearbeiten): max-width 440px zentriert, Inputs vertikal mit 16px Abstand
- Sektion-Abstände: 48px zwischen großen Sektionen, 24px innerhalb einer Sektion
- Bild-Aspect-Ratio in Galeriekarten: 3/4 (Hochformat wie Fashion-Fotografie)
- Scrollverhalten: smooth, Galerie mit infinite-scroll-Ansatz (zunächst einfaches Grid)
- Touch-freundlich: alle interaktiven Elemente min. 44×44px, ausreichend Abstand zwischen klickbaren Elementen (min 8px)
- Fokus-Reihenfolge logisch entlang der visuellen Ordnung (Tab durch Formularfelder, dann Buttons)
