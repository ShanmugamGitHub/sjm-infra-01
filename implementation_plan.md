# SJM Infrastructure — National Expansion Website

A high-fidelity, multi-page corporate website for **SJM Infrastructure** (under Sri Lakshmi Foundations), engineered as a national-level civil contractor and building consultancy brand.

---

## User Review Required

> [!IMPORTANT]
> This is a **pure HTML/CSS/JS** implementation (no framework) deployed directly in `c:\My Web Sites\SJM`. Each page is a separate `.html` file, sharing common CSS and JS files. This matches the workspace — please confirm this is the preferred approach, or indicate if you want a framework (Vite/Next.js).

> [!IMPORTANT]
> The **Admin Dashboard** will be a standalone `admin.html` page with no real backend. All data (leads, analytics counters, CMS) will be stored in `localStorage`. If you require a real backend (Node.js, PHP, or a cloud database), please specify.

> [!WARNING]
> The "National Reach" interactive map will use **SVG India map + JS** (no Google Maps API key required). If you want a real interactive Mapbox/Google map, please provide an API key.

---

## Proposed Changes

### Design System

#### [NEW] `css/variables.css`
Global CSS custom properties: color palette (`--navy: #0A192F`, `--gold: #FFB400`, `--white`, `--grey-*`), typography scales (Montserrat + Syne for headings, Inter for body), spacing tokens, border-radius, shadows, glassmorphism mixins.

#### [NEW] `css/global.css`
Reset, base HTML styles, reusable utility classes (`.glass-card`, `.btn-primary`, `.btn-ghost`, `.section-title`, `.bento-grid`), page transition animations, scroll-reveal keyframes, floating button styles (WhatsApp + Download CTA).

---

### Shared Components (JS)

#### [NEW] `js/components.js`
Injects shared HTML components: sticky navbar with hamburger mobile menu, footer with social links, floating WhatsApp button, floating "Download Corporate Profile" CTA, and exit-intent popup overlay.

#### [NEW] `js/utils.js`
Scroll-reveal IntersectionObserver, smooth page transitions, parallax scroll handler, counter animation (stats), modal open/close logic.

---

### Page 1 — Home

#### [NEW] `index.html`
- **Split-Hero**: Two-panel entry. Left = Government Infrastructure (Highways, PWD, GCC) with a dark overlay. Right = Private Building Services (Design, Approvals, Loans) with a gold-accent overlay. CTA buttons on each side.
- **Stats Bar**: Animated counters — 30+ Years, 200+ Projects, 15+ Districts, A-Class Registration.
- **Why Choose Us**: Glassmorphism cards with icons.
- **Services Bento Grid**: 6-cell bento layout previewing both Infra and Consultancy services.
- **Featured Projects**: 2 spotlight cards (Government + Private) linking to Projects page.
- **Testimonials Carousel**.
- **National Reach Teaser Map** (India SVG, links to map page).
- **Exit-Intent Popup**: Captures name + email for "Free Consultation" or "Tender Updates."

---

### Page 2 — About Us

#### [NEW] `about.html`
- **Legacy Hero**: Parallax banner with "30+ Years of Engineered Trust" headline.
- **Founding Story**: Timeline layout (2 columns) from founding → expansion milestones.
- **Leadership/Team Cards**: Glassmorphism profile cards.
- **Registrations & Certifications**: Logo badges grid (A-Class PWD, GCC, CMDA, DTCP).
- **Vision & Mission**: Split card with national expansion roadmap.
- **Awards & Recognition**.

---

### Page 3 — Services

#### [NEW] `services.html`
- **Two-Tab System**: Toggle between "Government Infrastructure" and "Building Consultancy."
- **Government Infra Cards**: Highways, Municipalities, PWD Contracts, GCC Works — each with bento card, scope details, and "Request Quote" CTA.
- **Consultancy Cards**: Building Plan Design, CMDA/DTCP Approvals, Structural Design, 3D Elevation, Valuation, Loan Facilitation.
- **Process Flow**: Step-by-step SVG timeline for DTCP Approval process (SEO long-form content section).
- **FAQ Accordion**: Targeting long-tail SEO keywords.

---

### Page 4 — Projects

#### [NEW] `projects.html`
- **Dual Gallery**: Toggle tabs for [Government] / [Private].
- **Project Cards**: On hover, reveal "Scale & Location" overlay (district, contract value, year, status).
- **Project Modals**: On click, full-screen modal with image carousel, description, "Before/After" or "Design/Final."
- **Filter Bar**: Filter by Type, District, Year.

---

### Page 5 — Contact & Lead Gen

#### [NEW] `contact.html`
- **Multi-Step Form**: Step 1 = Contact Info; Step 2 = Project Type (Government/Private/Consultancy); Step 3 = Scope & Timeline; Confirmation screen.
- **Map Embed**: Google Maps embed for office location.
- **Contact Cards**: Phone, Email, WhatsApp, Office Address.
- **Quick Links**: Download brochure, Schedule a Call.

---

### Page 6 — National Reach Map

#### [NEW] `reach.html`
- **Interactive SVG India Map**: District/state pins highlighting completed project locations.
- **Hover Tooltips**: Show project count and type per district.
- **Click Panel**: Side panel revealing district-wise project list.
- **Summary Stats**: Total districts, states, active projects.

---

### Page 7 — Admin Dashboard

#### [NEW] `admin.html`
- **Dark-themed UI** (separate visual identity from main site).
- **Widgets**: Visitor counter (localStorage-based), Lead Tracker (form submissions stored locally), Project CMS (drag-and-drop project card manager).
- **CMS**: Add/edit/delete project entries with image URL, description, type, district.
- **Lead Table**: View, filter, and export leads captured from contact form.
- **Password gate**: Simple PIN/password prompt before showing dashboard.

---

### Assets

#### [NEW] `assets/images/`
AI-generated hero images, project placeholders, team photos — all generated with the `generate_image` tool.

#### [NEW] `assets/icons/`
SVG icon set for services (highway, building, approval stamp, ruler, 3D cube, calculator).

#### [NEW] `assets/docs/`
`corporate-profile.pdf` placeholder (a downloadable brochure prompt page).

---

## Open Questions

> [!IMPORTANT]
> **Real project photos**: Do you have actual photos of completed projects to use? Or should I generate realistic AI construction photos as placeholders?

> [!IMPORTANT]
> **Company details**: Please provide real details for accuracy:
> - Office address(es)
> - WhatsApp number / Phone number
> - Email address
> - Registration numbers (PWD, GCC, CMDA class)
> - Key team members / founders names & roles
> - List of completed projects (name, location, type, year)

> [!IMPORTANT]
> **Logo**: Do you have an existing SJM Infrastructure logo? Or should I design one using the `generate_image` tool?

> [!NOTE]
> **Districts/Map Data**: Which Tamil Nadu districts (or other states) should show active project pins on the National Reach map?

---

## Verification Plan

### Automated
- Open each `.html` page in the browser subagent and verify layout at 1440px desktop and 375px mobile.
- Test all modals, tab switches, form multi-step navigation, and exit-intent popup trigger.
- Verify admin dashboard CMS CRUD operations via localStorage.

### Manual
- User reviews all 7 pages visually in their browser.
- User verifies placeholder data matches real company info before launch.
