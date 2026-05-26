# Plan: Update Header, Footer & Logo

## File to edit: src/components/Layout.css

### 1. Bigger logo
- .logo-img height: 44px -> 64px
- .footer-logo height: 50px -> 80px

### 2. Header -> pure white
- .header background: var(--primary) -> #ffffff, color: var(--text-white) -> var(--text)
- .nav a color: var(--text-white) -> var(--text)
- .hamburger span background: var(--text-white) -> var(--text)
- Mobile .nav background: var(--primary) -> #ffffff
- Mobile .nav a border: rgba(255,255,255,0.1) -> var(--border)
- Mobile .nav a.active background: rgba(255,255,255,0.1) -> var(--bg-alt)

### 3. Footer -> pure white
- .footer background: var(--primary) -> #ffffff, color: var(--text-white) -> var(--text)
- .footer-links h4, .footer-contact h4 color: var(--text-white) -> var(--text)
- .footer-links a color: var(--text-light), hover -> var(--primary)
- .footer-contact p color: var(--text-light)
- .footer-bottom border: rgba(255,255,255,0.15) -> var(--border)
- .footer-bottom p color: var(--text-light)
