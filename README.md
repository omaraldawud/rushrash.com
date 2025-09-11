# RushRash Chatbot 🤖

A **React + Vercel + OpenAI** chatbot built for [RushRash.com](https://rushrash.com).
This chatbot demonstrates how to combine a **React frontend**, **Vercel serverless API routes**, and **OpenAI GPT models** into a polished AI assistant.

---

## 🚀 Features

* ✅ Chat widget (React + Vite) with toggle/minimize
* ✅ Preloaded knowledge from `combined.json`:

  * Company info
  * Services & offers
  * Brands & product details
  * FAQs
* ✅ Smart AI assistant (GPT-3.5 or GPT-4o-mini)
* ✅ CORS-ready API (works locally and on Vercel)
* ✅ Semantic-release versioning

[![Release](https://github.com/omaraldawud/rushrash-chatbot/actions/workflows/release.yml/badge.svg)](https://github.com/omaraldawud/rushrash-chatbot/actions/workflows/release.yml)
[![semantic-release](https://img.shields.io/badge/semantic--release-automated-brightgreen)](https://semantic-release.gitbook.io/semantic-release/)
---

## 🏗 Architecture

* **Frontend**: React (Vite), Bootstrap, Chatbot widget
* **Backend**: Vercel serverless function (`/api/chat.js`)
* **AI**: OpenAI Chat Completions API
* **Data Layer**: `api_data/combined.json`

📌 See `/docs/architecture.png` for full diagram.

---

## 📦 Tech Stack

* [React](https://react.dev/) + [Vite](https://vitejs.dev/)
* [Bootstrap](https://getbootstrap.com/) + Bootstrap Icons
* [Axios](https://axios-http.com/) (API calls)
* [OpenAI API](https://platform.openai.com/docs/) (GPT models)
* [Vercel](https://vercel.com/) (serverless hosting)
* [semantic-release](https://semantic-release.gitbook.io/) (versioning)

---

## 🔧 Setup & Development

### 1. Clone repo

```bash
git clone https://github.com/omaraldawud/rushrash-chatbot.git
cd rushrash-chatbot
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set environment variables

Create `.env` in project root:

```
OPENAI_API_KEY=your_key_here
```

### 4. Run locally

Using Vercel CLI:

```bash
vercel dev --yes
```

* App: `http://localhost:3000`
* API: `http://localhost:3000/api/chat`

---

## 🚀 Deployment

Deployed automatically with **Vercel**:

* Push to `main` → triggers CI/CD
* Environment variables managed in Vercel dashboard

---

## 🧾 Release Notes

This project uses **semantic-release** to automate versioning & changelogs.

### Commit conventions:

* `feat:` → minor version bump
* `fix:` → patch version bump
* `BREAKING CHANGE:` → major version bump

### v1.0.0

* 🎉 Initial release
* Chatbot UI + service buttons
* Vercel serverless `/api/chat`
* `combined.json` dataset
* GPT integration

---

## 📐 Architecture Diagram

(Example — place in `/docs/architecture.png`)

```
                 ┌───────────────────────────┐
                 │       React (Vite)        │
                 │  - Chatbot.jsx UI         │
                 │  - Service buttons        │
                 │  - API fetch (/api/chat)  │
                 └──────────────┬────────────┘
                                │
                                ▼
                 ┌───────────────────────────┐
                 │ Vercel Serverless API     │
                 │   /api/chat.js            │
                 │ - Handles POST & OPTIONS  │
                 │ - Injects combined.json   │
                 │ - Calls OpenAI Chat API   │
                 └──────────────┬────────────┘
                                │
                                ▼
                 ┌───────────────────────────┐
                 │    OpenAI GPT Models      │
                 │  (gpt-3.5, gpt-4o-mini)   │
                 │  - Generates responses    │
                 │  - Rate limits apply      │
                 └──────────────┬────────────┘
                                │
                                ▼
                 ┌───────────────────────────┐
                 │    Data Layer (Static)    │
                 │ combined.json             │
                 │ - company info            │
                 │ - services + offers       │
                 │ - brands + FAQs           │
                 └───────────────────────────┘
```

---

## 👨‍💻 Author

Built by **Omar Aldawud**
AI-powered SaaS Engineer | [HostItWise.com](https://hostitwise.com)
