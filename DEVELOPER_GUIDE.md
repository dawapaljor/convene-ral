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

**Form Fields:**
- Name (required)
- Email (required)
- Organization (required)
- Message (required)

### Page Components

- **TermsOfService.tsx** - Terms and conditions
- **PrivacyPolicy.tsx** - Privacy policy
- **About.tsx** - About page

---

## Backend API Setup

### Option 1: Node.js/Express Backend

This is the **recommended security-first approach**.

#### Step 1: Create Backend Server

Create a new directory for your backend:

```bash
mkdir convene-backend
cd convene-backend
npm init -y
npm install express cors dotenv nodemailer express-validator express-rate-limit helmet
npm install -D typescript @types/express @types/node ts-node
```

#### Step 2: Create `.env` file

```env
# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@convene.com
RECIPIENT_EMAIL=support@convene.com

# Server Configuration
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=5
```

#### Step 3: Create `server.ts`

```typescript
import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { body, validationResult } from 'express-validator';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  methods: ['POST'],
  credentials: true
}));
app.use(express.json());

// Rate Limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '900000'),
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '5'),
  message: 'Too many contact requests, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

// Email Configuration
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Validation Rules
const contactValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters'),
  body('email')
    .trim()
    .isEmail()
    .withMessage('Please provide a valid email'),
  body('organization')
    .trim()
    .isLength({ min: 2, max: 200 })
    .withMessage('Organization must be between 2 and 200 characters'),
  body('message')
    .trim()
    .isLength({ min: 10, max: 5000 })
    .withMessage('Message must be between 10 and 5000 characters'),
];

// Contact Endpoint
app.post('/api/contact', limiter, contactValidation, async (req: Request, res: Response) => {
  try {
    // Validate request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ 
        success: false, 
        errors: errors.array() 
      });
    }

    const { name, email, organization, message } = req.body;

    // Sanitize inputs
    const sanitizedData = {
      name: name.replace(/[<>]/g, ''),
      email: email.toLowerCase(),
      organization: organization.replace(/[<>]/g, ''),
      message: message.replace(/[<>]/g, ''),
    };

    // Email Template
    const htmlContent = `
      <h2>New Contact Request</h2>
      <p><strong>Name:</strong> ${sanitizedData.name}</p>
      <p><strong>Email:</strong> ${sanitizedData.email}</p>
      <p><strong>Organization:</strong> ${sanitizedData.organization}</p>
      <p><strong>Message:</strong></p>
      <p>${sanitizedData.message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><small>Sent from Convene Contact Form</small></p>
    `;

    // Send Email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: sanitizedData.email,
      subject: `New Contact Request from ${sanitizedData.name}`,
      html: htmlContent,
      text: `Name: ${sanitizedData.name}\nEmail: ${sanitizedData.email}\nOrganization: ${sanitizedData.organization}\n\nMessage:\n${sanitizedData.message}`,
    });

    // Send Confirmation Email to User
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: sanitizedData.email,
      subject: 'We received your message - Convene',
      html: `
        <h2>Thank you for contacting Convene</h2>
        <p>Hi ${sanitizedData.name},</p>
        <p>We received your message and will get back to you within 24 hours.</p>
        <p>Best regards,<br>Convene Support Team</p>
      `,
    });

    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

// Health Check Endpoint
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
});
```

#### Step 4: Update `package.json`

```json
{
  "scripts": {
    "dev": "ts-node src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
  }
}
```

---

## Contact Form Integration

### Frontend: Update ContactModal.tsx

```tsx
import React, { useEffect, useState } from 'react';
import { X, Loader } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      organization: formData.get('organization'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSuccess(true);
      setTimeout(() => {
        onClose();
        setSuccess(false);
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div
        className="bg-white w-full max-w-md rounded-2xl shadow-2xl relative animate-in zoom-in-95 duration-300 max-h-[calc(100dvh-2rem)] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Contact Us</h2>
          <p className="text-slate-500 mb-6 text-sm">
            Have a question or need assistance? Our support team is here to help.
          </p>

          {success && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-700 text-sm font-semibold">
                Message sent successfully! We'll get back to you soon.
              </p>
            </div>
          )}

          {error && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-700 text-sm font-semibold">{error}</p>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={loading}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all placeholder:text-slate-400 disabled:bg-slate-50"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={loading}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all placeholder:text-slate-400 disabled:bg-slate-50"
                placeholder="youremail@website.com"
              />
            </div>

            <div>
              <label htmlFor="organization" className="block text-sm font-semibold text-slate-700 mb-1">
                Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
                disabled={loading}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all placeholder:text-slate-400 disabled:bg-slate-50"
                placeholder="Organization"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                disabled={loading}
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all placeholder:text-slate-400 resize-none disabled:bg-slate-50"
                placeholder="How can we help you?"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 hover:-translate-y-0.5 mt-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  );
};
```

---

## Environment Variables

### Frontend (.env.local)

```env
# API Configuration
VITE_API_URL=http://localhost:3001
VITE_APP_NAME=Convene
VITE_APP_VERSION=1.0.0
```

### Backend (.env)

```env
# Email Configuration
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@convene.com
RECIPIENT_EMAIL=support@convene.com

# Server Configuration
PORT=3001
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=5

# Logging
LOG_LEVEL=info
```

---

## Development Workflow

### Running Both Frontend & Backend

**Terminal 1 - Frontend:**
```bash
cd convene-RAL-new
pnpm run dev
# App runs on http://localhost:5173
```

**Terminal 2 - Backend:**
```bash
cd convene-backend
npm run dev
# Server runs on http://localhost:3001
```

### Hot Module Replacement (HMR)

Both Vite (frontend) and ts-node with nodemon (backend) support HMR during development.

### Build Process

**Frontend Build:**
```bash
pnpm run build
# Output: dist/
```

**Backend Build:**
```bash
npm run build
# Output: dist/
```

---

## Security Best Practices

### ✅ Implemented

1. **CSRF Protection** - Origin validation via CORS
2. **Input Validation** - Express Validator with sanitization
3. **Rate Limiting** - Prevent spam/abuse
4. **Helmet.js** - Sets security HTTP headers
5. **Environment Variables** - Credentials not in code
6. **HTTPS** - Required in production
7. **XSS Prevention** - React escapes content by default
8. **SQL Injection** - N/A for this demo, but use prepared statements if using DB

### 🔒 Additional Recommendations

1. **Add WAF** (Web Application Firewall)
2. **Implement Logging** - Track all contact submissions
3. **Use HTTPS Only** - Enforce in production
4. **Implement CSRF Tokens** - For additional protection
5. **Monitor Rate Limits** - Detect attack patterns
6. **Backup Strategy** - Backup email records
7. **GDPR Compliance** - Add data deletion policies

---

## Deployment

### Frontend (Vercel)

```bash
# Connect to Vercel
pnpm install -g vercel
vercel
```

### Backend (Railway or Render)

```bash
# Railway Setup
npm install -g railway
railway init
railway link
railway up

# Set environment variables in dashboard
```

### Environment Variables (Production)

Update `VITE_API_URL` in frontend to your production backend URL.

---

## Troubleshooting

### Email Not Sending

**Issue:** 500 error on contact form

**Solutions:**
- Check EMAIL_USER and EMAIL_PASSWORD in .env
- For Gmail: Use [App Passwords](https://support.google.com/accounts/answer/185833)
- Enable "Less Secure Apps" if not using 2FA

### CORS Error

**Issue:** `Access to XMLHttpRequest blocked by CORS policy`

**Solution:**
- Update `CORS_ORIGIN` in backend .env to match frontend URL
- In development: `http://localhost:5173`
- In production: `https://convene.rightsactionlab.org`

### Rate Limiting Issues

**Issue:** `Too many requests` error immediately

**Solution:**
- Increase `RATE_LIMIT_MAX_REQUESTS` for testing
- Check if requests are from different IPs (shared networks)

### TypeScript Errors

```bash
# Regenerate types
pnpm run build

# Clear cache
rm -rf node_modules/.vite
pnpm install
```

---

## Resources

- [Convene GitHub](https://github.com/)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Express Documentation](https://expressjs.com/)
- [Nodemailer Documentation](https://nodemailer.com/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## Support

For questions or issues, contact the development team at support@convene.com
