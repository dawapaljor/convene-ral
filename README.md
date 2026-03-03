


# Convene: Secure Browser-Based Messaging

Convene is a privacy-first, browser-based messaging platform for secure, ephemeral conversations. It is designed for human rights defenders, journalists, and anyone needing safe, anonymous communication.

## Features

- **No Sign-up Required:** No phone numbers, logins, or personal identifiers. Just a link.
- **Browser Based:** Works on mobile and desktop browsers. No downloads needed.
- **Signal-Grade Security:** End-to-end encrypted, ephemeral rooms.
- **Censorship Resistant:** Designed for use in highly censored regions.
- **Anonymous Participation:** No accounts, no trace left behind.
- **Impactful:** Used by activists, journalists, and trainers worldwide.

## Architecture & Project Structure

- **App.tsx:** Main app entry, renders core sections.
- **components/:** UI components (Navbar, Hero, Features, Testimonials, Footer, ChatInterface, Logo).
- **constants.ts:** Demo data, navigation links, features, testimonials.
- **types.ts:** TypeScript interfaces and enums for messages, features, testimonials.
- **index.html:** HTML template, Tailwind CSS config, import maps.
- **vite.config.ts:** Vite configuration, environment variable setup.
- **package.json:** Dependencies and scripts.
- **tsconfig.json:** TypeScript configuration.
- **metadata.json:** App metadata.

## Main Types

- **MessageType:** Enum for message types (text, image, system).
- **Message:** Interface for chat messages (id, sender, content, timestamp, type).

## Usage

### Run Locally

**Prerequisites:** Node.js

1. Install dependencies: `npm install`
2. Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key
3. Run the app: `npm run dev`

App runs on [http://localhost:3000](http://localhost:3000) by default.

### Environment Variables

- `GEMINI_API_KEY`: Required for Gemini API integration. Set in `.env.local`.

## Testimonials

> "I am currently in a Convene room with over 850 guests... it’s a great tool for us to not only share news articles inside [redacted] but also do outreach beyond Telegram/WeChat." — Human Rights Trainer  
> "We need secure places for our work. Could this platform be an answer? I believe that yes it is." — Activist, Middle East Region  
> "This tool is helpful for journalists. It gives access to important information that can be shared outside Tibet. It’s good to have a secure platform like this." — Journalist, International Press

## About

Convene is an open-source product of HRL, a non-profit 501(c)3 charitable organization. It serves as a lifeline for human rights defenders, enabling secure documentation and reporting of rights violations.

Development by **Northern Prock**. User & Community Engagement by **Clort**.

---


