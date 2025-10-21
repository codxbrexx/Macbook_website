# 🗺️ Component Architecture Map

```
┌─────────────────────────────────────────────────────────────┐
│                         APP.JSX                              │
│                     (Main Container)                         │
└─────────────────────────────────────────────────────────────┘
                            │
        ┌───────────────────┴───────────────────┐
        │                                       │
        ▼                                       ▼
┌──────────────┐                    ┌──────────────────┐
│ LoadingScreen│ [NEW]              │  Main Content    │
│  - Progress  │                    │   (Conditional)  │
│  - Animation │                    └────────┬─────────┘
└──────────────┘                             │
                                             │
                    ┌────────────────────────┴────────────────────────┐
                    │                                                  │
                    ▼                                                  ▼
          ┌──────────────────┐                             ┌──────────────────┐
          │ ScrollProgress   │ [NEW]                       │ SmoothScrollNav  │ [NEW]
          │  - Top bar       │                             │  - Side dots     │
          │  - Gradient      │                             │  - Active state  │
          └──────────────────┘                             └──────────────────┘
                    │
                    ▼
        ┌───────────────────────┐
        │      <main>           │
        └───────────┬───────────┘
                    │
    ┌───────────────┼───────────────────────────────────────────────┐
    │               │                                               │
    ▼               ▼                                               ▼
┌────────┐    ┌─────────┐                                    ┌─────────┐
│ NavBar │    │  Hero   │                                    │ Footer  │
│        │    │ - Video │                                    │ - Links │
└────────┘    │ - CTA   │                                    └─────────┘
              └─────────┘
                    │
    ┌───────────────┼────────────────────────────────────┐
    │               │                                    │
    ▼               ▼                                    ▼
┌───────────────┐ ┌──────────────┐              ┌──────────────┐
│ ProductViewer │ │   Showcase   │              │ Performance  │
│ - 3D Model    │ │ - Gallery    │              │ - Charts     │
│ - Controls    │ │ - Features   │              │ - Images     │
└───────────────┘ └──────────────┘              └──────────────┘
                    │
    ┌───────────────┼────────────────────────────────────┐
    │               │                                    │
    ▼               ▼                                    ▼
┌───────────┐  ┌──────────────┐               ┌──────────────┐
│ Features  │  │ Comparison   │ [NEW]         │ Configurator │ [NEW]
│ - Specs   │  │ - 14" vs 16" │               │ - Builder    │
│ - Videos  │  │ - Specs Grid │               │ - Pricing    │
└───────────┘  └──────────────┘               └──────────────┘
                    │
    ┌───────────────┼────────────────────────────────────┐
    │               │                                    │
    ▼               ▼                                    ▼
┌──────────────┐ ┌─────────┐                  ┌──────────────┐
│ Accessories  │ │ Reviews │ [NEW]            │     FAQ      │ [NEW]
│ - Grid       │ │ - Carousel │              │ - Accordion  │
│ - Products   │ │ - Ratings  │              │ - Q&A        │
└──────────────┘ └────────────┘              └──────────────┘
      [NEW]
                    │
    ┌───────────────┴────────────────┐
    │                                │
    ▼                                ▼
┌──────────────┐            ┌──────────────┐
│  Highlights  │            │  Newsletter  │ [NEW]
│  - Features  │            │  - Email Form│
│  - Summary   │            │  - Subscribe │
└──────────────┘            └──────────────┘
```

---

## 📊 Component Flow & Dependencies

### Level 1: App Entry Point
```
App.jsx
├── useState (isLoading)
└── Conditional rendering based on loading state
```

### Level 2: Global UI Elements
```
LoadingScreen [NEW]
├── Progress animation
└── Triggers: onLoadingComplete()

ScrollProgress [NEW]
└── Tracks: window.scrollY

SmoothScrollNav [NEW]
├── Uses: IntersectionObserver
└── Tracks: Active section
```

### Level 3: Main Sections (in order)

#### 1. Navigation & Hero
```
NavBar (existing)
└── Links to sections

Hero (existing)
├── Video background
└── Primary CTA
```

#### 2. Product Sections
```
ProductViewer (existing)
├── 3D Canvas
├── ModelSwitcher
└── StudioLights

Showcase (existing)
└── Product gallery

Performance (existing)
└── Specs display

Features (existing)
└── Video features
```

#### 3. NEW Interactive Sections
```
Comparison [NEW]
├── Model cards (14" & 16")
└── Specs comparison grid

Configurator [NEW]
├── ConfigOption components (×5)
│   ├── Model selection
│   ├── Chip selection
│   ├── Memory selection
│   ├── Storage selection
│   └── Color selection
├── calculateTotal()
└── Summary card (sticky)

Accessories [NEW]
└── Grid of 8 products

Reviews [NEW]
├── Carousel state
├── Navigation controls
└── Statistics display

FAQ [NEW]
├── Accordion items (×8)
└── Toggle state per item
```

#### 4. Closing Sections
```
Highlights (existing)
└── Feature summary

Newsletter [NEW]
├── Email form
└── Subscription state

Footer (existing)
└── Links & copyright
```

---

## 🔄 Data Flow

### State Management
```
┌────────────────────────────────────┐
│         App Component              │
│  ┌──────────────────────────────┐  │
│  │ isLoading: boolean           │  │
│  └──────────────────────────────┘  │
└────────────────────────────────────┘
                 │
    ┌────────────┴────────────┐
    │                         │
    ▼                         ▼
┌─────────┐            ┌──────────────┐
│ Loading │            │   Content    │
│ Screen  │            │   Sections   │
└─────────┘            └──────────────┘
```

### Zustand Store (existing)
```
useMacbookStore
├── color: string
├── scale: number
├── texture: string
├── setColor()
├── setScale()
└── setTexture()
```

### Component-Level State
```
Configurator
├── config: object (model, chip, memory, storage, color)
└── calculateTotal(): number

Reviews
└── activeReview: number

FAQ
└── openIndex: number | null

Newsletter
├── email: string
└── subscribed: boolean

SmoothScrollNav
└── activeSection: string
```

---

## 🎯 Props Flow

### Parent → Child Props
```
LoadingScreen
└── onLoadingComplete: function

ConfigOption (reusable)
├── label: string
├── options: array
├── configKey: string
└── value: string
```

---

## 🔌 External Dependencies

### GSAP Animation Pipeline
```
Component Mount
    │
    ▼
useEffect()
    │
    ▼
gsap.context()
    │
    ├── from() - Entry animations
    ├── to() - Exit animations
    └── ScrollTrigger
            │
            ├── trigger: element
            ├── start: position
            └── end: position
```

### Intersection Observer
```
SmoothScrollNav
    │
    ▼
IntersectionObserver
    │
    ├── observes: all sections
    ├── threshold: 0
    └── rootMargin: -50%
            │
            ▼
        Updates activeSection state
```

---

## 📦 Component Sizes

| Component | Lines | Complexity | Dependencies |
|-----------|-------|------------|--------------|
| App.jsx | 50 | Low | All components |
| Comparison | 195 | Medium | GSAP, ScrollTrigger |
| Configurator | 250 | High | React hooks |
| Accessories | 135 | Low | GSAP |
| Reviews | 180 | Medium | React hooks |
| FAQ | 155 | Medium | GSAP |
| Newsletter | 105 | Low | React hooks |
| LoadingScreen | 85 | Low | GSAP |
| ScrollProgress | 30 | Low | React hooks |
| SmoothScrollNav | 80 | Medium | Observer API |

---

## 🎨 Styling Architecture

```
Tailwind CSS (Global)
    │
    ├── Utility Classes
    │   ├── Layout (flex, grid)
    │   ├── Spacing (p-*, m-*)
    │   ├── Colors (bg-*, text-*)
    │   └── Effects (hover:, transition-)
    │
    └── Component Styles
        ├── Inline classes
        └── Dynamic classes (clsx)
```

---

## 🔄 Animation Timeline

```
Page Load
    │
    ▼
LoadingScreen (0-2s)
    │
    ▼
Content Fade In (2-3s)
    │
    ▼
Scroll-Based Animations
    │
    ├── Hero (visible immediately)
    ├── ProductViewer (on scroll)
    ├── Showcase (on scroll)
    ├── Performance (on scroll)
    ├── Features (on scroll)
    ├── Comparison (on scroll)
    ├── Configurator (on scroll)
    ├── Accessories (on scroll)
    ├── Reviews (on scroll)
    ├── FAQ (on scroll)
    ├── Highlights (on scroll)
    └── Newsletter (on scroll)
```

---

## 🚀 Render Order

1. **Initial Mount**
   - App.jsx
   - LoadingScreen (conditional)

2. **After Loading**
   - ScrollProgress (fixed)
   - SmoothScrollNav (fixed)
   - Main content (scroll-based)

3. **Lazy Rendering**
   - Components animate in when scrolled into view
   - GSAP triggers based on scroll position

---

## 📱 Responsive Behavior

```
Mobile (< 640px)
├── Single column layouts
├── Stacked cards
└── Hidden side navigation

Tablet (640-1024px)
├── 2-column grids
├── Partial animations
└── Visible side navigation

Desktop (> 1024px)
├── Full layouts
├── All animations
└── Enhanced interactions
```

---

This architecture supports:
✅ Scalability - Easy to add new sections  
✅ Maintainability - Clear component separation  
✅ Performance - Optimized rendering  
✅ User Experience - Smooth interactions  

---
