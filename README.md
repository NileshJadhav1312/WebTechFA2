# 🐾 PetCare Hub — Modern Pet Wellness & Breed Management Platform

### **Advanced Web Technologies (AWT) — Formative Assessment Submission**

- **Student Name:** Nilesh Khandu Jadhav  
- **Roll Number:** 125M1H038  
- **Course / Degree:** Master of Computer Applications (MCA) — Semester 3  
- **Institution:** Department of MCA, Pimpri Chinchwad College of Engineering (PCCOE), Pune  
- **Faculty Guide:** Prof. Dr. Avinash Chormale  
- **Academic Year:** 2025–2026  

---

## 🔗 Project Links

- **GitHub Repository:** [https://github.com/NileshJadhav1312/WebTechFA2](https://github.com/NileshJadhav1312/WebTechFA2)
- **Live Deployed Application:** [https://petcarehubbynilesh.vercel.app/](https://petcarehubbynilesh.vercel.app/)

---

## 📖 Project Overview

**PetCare Hub** is a single-page web application (SPA) built with **React 19**, **Vite 7**, and **React Router DOM v7**. It is designed to assist pet owners, prospective adopters, and veterinary enthusiasts in discovering, tracking, and caring for diverse animals.

The application contains **58 detailed pet profiles across 5 distinct categories** (Dogs, Cats, Birds, Rabbits, and Fish). Each pet includes comprehensive care guides, nutritional breakdowns by life stage, preventive vaccination timelines, grooming requirements, and high-definition photo galleries with an interactive Lightbox viewer.

### Key Capabilities:
1. **Dynamic Breed Directory:** Multi-filter catalog across 58 verified animals with search, species chips, care-level tags, and instant table/grid toggle.
2. **Personalized Care & Plan Calculator:** 3-step sequential filter (Category → Filtered Breed → Age in Days) generating life stage classifications, exact milestone dates, and nutritional feeding schedules.
3. **Interactive Photo Gallery & Lightbox:** Curated multi-photo galleries with keyboard navigation (Esc, Left/Right arrows) and full-screen view.
4. **Full CRUD Reminders & Pet Management:** Add, edit, and delete custom pets and care tasks with instant `localStorage` persistence and confirmation dialogs.
5. **Real-time Client Validation:** Custom validation engine for text limits, URL patterns, and sanitization with touched-state error feedback.
6. **Robust Error Handling & Automated Testing:** Protected by a React `ErrorBoundary`, custom toast notification pub-sub system, and **25 passing automated unit/integration tests** using **Vitest** and **React Testing Library**.

---

## 💻 Tech Stack

| Technology | Purpose & Usage |
| :--- | :--- |
| **React 19** | Component-driven UI architecture, concurrent features, modern Hooks |
| **Vite 7** | Next-generation build tool with instant Hot Module Replacement (HMR) |
| **React Router DOM v7** | Client-side SPA routing, parameterized routes (`/pets/:id`), 404 fallback |
| **Lucide React** | Feather-light SVG iconography for accessible, consistent visual cues |
| **Vitest & JSDOM** | High-performance unit and integration testing engine |
| **React Testing Library** | Component behavior and DOM assertion test suite |
| **Vanilla CSS3** | Custom design system with glassmorphism, responsive grids, and micro-animations |
| **LocalStorage API** | Browser-side persistent storage for CRUD data across sessions |

---

## 📁 Short Folder Structure

```
fa1/
├── public/                       # Static public assets
│   ├── _redirects                # Netlify SPA redirect rules
│   └── favicon.ico               # Application favicon
├── src/
│   ├── components/               # Modular & reusable UI components
│   │   ├── ConfirmModal.jsx      # Accessible delete/action confirmation modal
│   │   ├── ErrorBoundary.jsx     # Class component error boundary with reload fallback
│   │   ├── Footer.jsx            # Responsive semantic footer
│   │   ├── GroomingTips.jsx      # Breed-specific grooming schedule and tips
│   │   ├── LoadingSpinner.jsx    # Animated loading spinner with accessible status
│   │   ├── Navbar.jsx            # Desktop nav & mobile drawer navigation
│   │   ├── Pagination.jsx        # Configurable numeric page switcher
│   │   ├── PetCard.jsx           # Pet showcase card with badge indicators
│   │   ├── PetGrid.jsx           # Responsive grid/table view switch
│   │   ├── QuickCareTips.jsx     # High-priority care guidelines
│   │   ├── ToastNotification.jsx # Animated notification toast alert system
│   │   └── VaccinationSchedule.jsx # Preventive immunization schedule table
│   ├── context/
│   │   └── PetContext.jsx        # Global Context Provider for pets, reminders, & toasts
│   ├── data/                     # Data store with 58 curated animal profiles
│   │   ├── petData.js            # Core dataset & category master exports
│   │   ├── petCarePlans.js       # Dynamic age calculator & milestone projection engine
│   │   ├── additionalDogs.js     # 10 comprehensive canine breed profiles
│   │   ├── additionalCats.js     # 10 feline breed profiles
│   │   ├── additionalBirds.js    # 10 avian species profiles
│   │   ├── additionalRabbits.js  # 10 rabbit breed profiles
│   │   └── additionalFish.js     # 10 aquatic species profiles
│   ├── hooks/                    # Reusable custom React hooks
│   │   ├── useDebounce.js        # Debounce timer hook for search optimization
│   │   └── usePagination.js      # Pagination calculation and slicing hook
│   ├── pages/                    # Route-level page views
│   │   ├── HomePage.jsx          # Hero section, statistics, features, and quick links
│   │   ├── PetCatalogPage.jsx    # 58-pet directory with multi-filter and sort controls
│   │   ├── PetDetailPage.jsx     # Deep dive guide with tabs, care plans, and editing
│   │   ├── AddEditPetPage.jsx    # Controlled registration form with live card preview
│   │   ├── RemindersPage.jsx     # Care & Plan calculator and reminder tracker
│   │   ├── ApiExplorerPage.jsx   # Curated breed gallery and keyboard-controlled Lightbox
│   │   └── NotFoundPage.jsx      # Semantic 404 page with recovery navigation
│   ├── services/                 # Service layer and external client adapters
│   │   ├── apiClient.js          # Resilient fetch client with timeout and retries
│   │   └── dogApiService.js      # REST API handler for external endpoints
│   ├── test/                     # 25 Automated unit and integration test specs
│   │   ├── components.test.jsx   # DOM assertions for Navbar, PetCard, Spinner
│   │   ├── filterUtils.test.js   # Multi-filter search, sorting, and category logic
│   │   ├── usePagination.test.js # Pagination state transition tests
│   │   └── validation.test.js    # Form validator, character limits, URL regex tests
│   ├── utils/                    # Helper utility functions
│   │   ├── filterUtils.js        # Search query matching and sorting algorithms
│   │   └── validation.js         # Schema validations for pet profiles and reminders
│   ├── App.jsx                   # Root layout, router setup, and toast provider
│   ├── index.css                 # Comprehensive CSS3 design system (5,000+ lines)
│   └── main.jsx                  # Application entry point mounting into HTML root
├── vercel.json                   # Vercel deployment rewrite rules for SPA routing
├── vite.config.js                # Vite build and Vitest configuration
└── package.json                  # Dependencies, test scripts, and build commands
```

---

## 🧠 Core Concepts & Web Technologies Used

### 1. React 19 Architecture & Component Hierarchy
- **Functional Components & Reusability:** Modular separation between container pages and UI components.
- **Controlled Components:** Every form input in `AddEditPetPage.jsx` and `RemindersPage.jsx` syncs with component state for real-time validation and preview.

### 2. State Management with React Context API
- **`PetContext.jsx`**: Centralized single source of truth managing:
  - Catalog state (58 default pets + user-created pets).
  - Reminders state (pending/completed tasks, priority flags).
  - Toast notifications queue (auto-dismissing after 3 seconds).
- **LocalStorage Synchronization:** Custom synchronization logic persists state across page reloads without external databases.

### 3. Advanced React Hooks
- **`useState`**: Local component state (active tab, search query, lightbox modal index).
- **`useEffect`**: Side effects, document title synchronization, and global keyboard event listeners (`Escape`, `ArrowLeft`, `ArrowRight` for the lightbox).
- **`useMemo`**: Expensive computations memoized to avoid lag during instant multi-filter search across 58 profiles.
- **`useCallback`**: Handler memoization passed as props to avoid unnecessary child re-renders.
- **Custom Hooks:**
  - `useDebounce`: Delays search execution by 250ms to prevent render stuttering.
  - `usePagination`: Encapsulates pagination math (total pages, current slice, bounds checks).

### 4. Client-Side Routing (`react-router-dom` v7)
- Dynamic route parameters (`/pets/:id` and `/edit-pet/:id`).
- Programmatic navigation via `useNavigate()`.
- Active link styling using `NavLink`.
- Catch-all fallback (`*`) directing invalid URLs to `NotFoundPage.jsx`.

### 5. Dynamic Age-Based Care Calculation Engine
- **`petCarePlans.js`**: Calculates life stage based on age in days:
  - *Neonate / Puppy / Kitten* (`< 60` days)
  - *Young Juvenile* (`60 - 180` days)
  - *Adolescent* (`180 - 365` days)
  - *Mature Adult* (`365 - 2555` days)
  - *Golden Senior* (`> 2555` days)
- Dynamically schedules preventive vaccines, dietary portions, and developmental milestones relative to calculated birth dates.

### 6. User Experience & Accessibility (UX / A11y)
- ARIA roles, labels, and `tablist` / `tabpanel` semantics.
- High-contrast color tokens and keyboard-navigable dialogs.
- Graceful fallbacks for missing images.

### 7. Automated Testing (Vitest + JSDOM)
- Automated test coverage across 4 test suites with **25 passed tests**:
  - `validation.test.js`: Validates input constraints, URL schemes, and empty checks.
  - `filterUtils.test.js`: Verifies multi-word search, species filtering, and sorting.
  - `usePagination.test.js`: Verifies page slicing and bounds.
  - `components.test.jsx`: Confirms DOM rendering for Navbar links, cards, and spinners.

---

## 🚀 How to Run Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (Version 18.x, 20.x, or 22.x recommended)
- `npm` (bundled with Node.js)

### Step-by-Step Setup:
```bash
# 1. Clone repository
git clone https://github.com/your-username/petcare-hub.git

# 2. Navigate to project root
cd petcare-hub

# 3. Install dependencies
npm install

# 4. Launch local development server
npm run dev
```
Open **`http://localhost:5173`** in your browser.

### Run Automated Tests:
```bash
npm test
```
All 25 test suites will run and report status in the terminal.

### Build for Production:
```bash
npm run build
```
Creates an optimized production bundle in the `dist/` folder in ~2 seconds.

---

## 🌐 Deployment Guide

### Option 1: Deploy on Vercel (Recommended)
1. Push your project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - PetCare Hub"
   git branch -M main
   git remote add origin https://github.com/your-username/petcare-hub.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Keep the default settings:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.
   > *Note:* The included `vercel.json` already contains SPA route rewrites to prevent 404 errors on deep routes like `/pets/dog-golden-retriever` or `/reminders`.

---

### Option 2: Deploy on Netlify
1. Go to [netlify.com](https://www.netlify.com/) and select **"Add new site"** → **"Import an existing project"**.
2. Connect your GitHub repository.
3. Configure build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy Site**.
   > *Note:* The included `public/_redirects` file (`/* /index.html 200`) ensures client-side routing works on refresh.

---

## 📋 Evaluation Checklist for Submission

| Assessment Criterion | Implementation | Status |
| :--- | :--- | :---: |
| **Component Architecture** | Modular components with clean separation of concerns | ✅ Complete |
| **State Management** | Context API (`PetContext`) + LocalStorage persistence | ✅ Complete |
| **React Hooks Usage** | `useState`, `useEffect`, `useMemo`, `useCallback`, `useRef`, custom hooks | ✅ Complete |
| **Form Handling & Validation**| Controlled inputs with real-time error states & live card preview | ✅ Complete |
| **Client-Side Routing** | `react-router-dom` v7 with dynamic parameters and 404 fallback | ✅ Complete |
| **Responsive Design** | Custom CSS3 design system fluid across mobile, tablet, desktop | ✅ Complete |
| **Automated Testing** | 25 unit and integration tests passing (`npm test`) | ✅ Complete |
| **Error Handling** | React `ErrorBoundary` and toast notification system | ✅ Complete |
| **Deployment Readiness** | Configured `vercel.json` and `public/_redirects` for 1-click deployment | ✅ Complete |

---

## 📜 Academic Declaration

I hereby declare that this project titled **"PetCare Hub — Modern Pet Wellness & Breed Management Platform"** is an original submission developed by me for the **Formative Assessment (FA-2)** in the subject **Advanced Web Technologies (AWT)** during Semester 3 of the MCA program at **Pimpri Chinchwad College of Engineering (PCCOE)**.

**Submitted By:**  
*Nilesh Khandu Jadhav*  
Roll No: `125M1H038`  
Department of MCA, PCCOE, Pune
