# Convene - Developer Guide

Complete documentation for developers setting up and contributing to Convene.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Tech Stack](#tech-stack)
3. [Installation & Setup](#installation--setup)
4. [Project Structure](#project-structure)
5. [Components Documentation](#components-documentation)
6. [Backend API Setup](#backend-api-setup)
7. [Contact Form Integration](#contact-form-integration)
8. [Environment Variables](#environment-variables)
9. [Development Workflow](#development-workflow)
10. [Security Best Practices](#security-best-practices)
11. [Deployment](#deployment)
12. [Troubleshooting](#troubleshooting)

---

## Project Overview

**Convene** is a privacy-first, browser-based messaging platform designed for secure, ephemeral conversations. It's built for human rights defenders, journalists, and anyone needing safe, anonymous communication.

**Key Characteristics:**
- No sign-up required
- Browser-based (no downloads)
- Signal-grade end-to-end encryption
- Ephemeral messaging (disappearing messages)
- Censorship resistant
- Anonymous participation

---

## Tech Stack

### Frontend
- **Framework:** React 18+ with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **State Management:** React Hooks
- **Package Manager:** pnpm

### Backend (Recommended)
- **Runtime:** Node.js 18+
- **Framework:** Express.js
- **Email Service:** SendGrid, Mailgun, or Nodemailer
- **Validation:** Express Validator
- **Rate Limiting:** Express Rate Limit
- **Environment:** dotenv

### Optional Services
- **Email:** SendGrid, Mailgun, Resend
- **Hosting:** Vercel, Netlify, Railway
- **Database:** PostgreSQL, MongoDB (for future features)

---

## Installation & Setup

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)
- Git

### Frontend Setup

```bash
# Clone repository
git clone https://github.com/your-org/convene.git
cd convene

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

### Backend Setup (Node.js/Express)

See [Backend API Setup](#backend-api-setup) section below.

---

## Project Structure

```
convene-RAL-new/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Pricing.tsx
│   │   ├── PricingSection.tsx
│   │   ├── ContactModal.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Footer.tsx
│   │   ├── ChatInterface.tsx
│   │   └── Logo.tsx
│   ├── pages/
│   │   ├── TermsOfService.tsx
│   │   ├── PrivacyPolicy.tsx
│   │   └── About.tsx
│   ├── App.tsx              # Main app component
│   ├── main.tsx            # Entry point
│   ├── index.css           # Tailwind CSS
│   ├── constants.ts        # Demo data & constants
│   ├── types.ts            # TypeScript types
│   └── lib/
│       └── utils.ts        # Utility functions
├── public/                 # Static assets
├── index.html             # HTML template
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript config
├── tailwind.config.js     # Tailwind configuration
├── package.json           # Dependencies
├── metadata.json          # App metadata
└── README.md              # Project README
```

---

## Components Documentation

### Core Components

#### `App.tsx`
Main application component that manages routing and page state.

```tsx
type Page = 'home' | 'about' | 'pricing' | 'signup' | 'terms';

interface AppState {
  currentPage: Page;
  contactModalOpen: boolean;
}
```

#### `PricingSection.tsx`
Displays pricing plans with monthly/yearly toggle.

**Props:**
```tsx
interface PricingSectionProps {
  onNavigate: (page: Page, plan?: string) => void;
  onContactUs: () => void;
}
```

**Features:**
- Monthly/yearly pricing toggle
- Dynamic savings calculation
- Responsive grid layout
- Three tier plans (Starter, Community, Enterprise)

#### `ContactModal.tsx`
Contact form modal for user inquiries.

**Props:**
```tsx
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}
```

---

## Form Submissions & Email Integration (Netlify Forms)

Convene uses **Netlify Forms** for handling contact inquiries, demo requests, and sign-ups. Because the website is hosted on Netlify, form submissions are processed natively without needing a custom backend server.

### How it Works
1. **HTML Registration**: Netlify's build-time crawler parses static HTML files in the output directory. Since this is a React/Vite single-page app (SPA), we declare static, hidden versions of our forms directly inside `index.html`.
2. **Asynchronous (AJAX) Submission**: When a user submits a form (e.g. inside `ContactModal.tsx`, `DemoModal.tsx`, or `SignUp.tsx`), React intercepts the submission event and posts the form data to `/` as `application/x-www-form-urlencoded` with the header parameters, including the `form-name` field. This prevents full-page reloads and allows displaying inline loading spinner, success, and error UIs.

### Form Definitions
- **`demo-request`**: Handled in `components/DemoModal.tsx`. Registers demo inquiries.
- **`contact`**: Handled in `components/ContactModal.tsx`. Registers general support queries.
- **`sign-up`**: Handled in `pages/SignUp.tsx`. Registers new organization plan sign-ups.

---

## Netlify Dashboard Email Setup

To ensure form submissions are emailed to `convene@rightsactionlab.org`, configure Netlify's Form notifications:

1. Log in to your **Netlify Dashboard** and select your site.
2. Navigate to **Site configuration** > **Forms** > **Form notifications**.
3. Click **Add notification** > **Email notification**.
4. Configure the parameters:
   - **Event to listen to**: New form submission
   - **Email to notify**: `convene@rightsactionlab.org`
   - **Form to listen to**: Select your form (e.g., `contact`, `demo-request`, or `sign-up`). Create one rule per form or choose *Any form*.
5. Save the notification.

---

## Environment Variables

### Frontend (.env.local)

```env
VITE_APP_NAME=Convene
VITE_APP_VERSION=1.0.0
```

---

## Development Workflow

Since form processing is managed entirely by Netlify in production, there is no need to run a local backend server.

### Running Frontend Locally
1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Start the Vite development server:
   ```bash
   pnpm run dev
   ```
   The local client will be available at `http://localhost:5173`.

### Build Verification
Before deploying, verify that the production assets compile cleanly with no TypeScript/TSX lint issues:
```bash
pnpm run build
```
This generates the static site bundle in the `dist/` folder.

---

## Security Best Practices

By offloading form handling to Netlify, several key security benefits are realized out-of-the-box:
1. **No Backend Exploits**: We do not maintain any Node/Express endpoints, eliminating rate-limiting, CORS configuration issues, and custom server vulnerabilities.
2. **Built-in Spam Protection**: Netlify Forms includes automated spam filters. If needed, a honeypot field can be added.
3. **Environment Isolation**: Credentials, access keys, or API tokens are handled securely on Netlify's cloud infrastructure rather than being exposed or coded on the client.

---

## Deployment

### Frontend (Netlify)

```bash
# Connect to Netlify
pnpm install -g netlify-cli
netlify login
netlify deploy
```

---

## Troubleshooting

### Form Not Receiving Emails
- Verify that your `index.html` contains a hidden `<form data-netlify="true">` element matching your component logic.
- Check the **Forms** tab in your Netlify site dashboard to see if submissions are being captured correctly.
- Ensure the email notification rule is active in the Netlify Dashboard.

### Build Failures
- Run `tsc --noEmit` to check for type errors.
- Ensure all environment variables are correctly mapped in the Netlify UI under **Site configuration > Environment variables**.

---

## Resources

- [Convene GitHub](https://github.com/)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Netlify Forms Documentation](https://docs.netlify.com/forms/setup/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## Support

For questions or issues, contact the development team at support@convene.com
