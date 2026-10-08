# Abhishek Pandey Portfolio

Full-stack developer portfolio built with React, Vite, Express, and MongoDB.
The repository contains:

- `portfolio-frontend`: React/Vite website
- `portfolio_backend`: Express/Mongoose API for the contact form

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Framer Motion, Axios
- **Backend:** Node.js, Express, Mongoose, MongoDB, CORS, Dotenv
- **Deployment:** Vercel (frontend), Render (backend), MongoDB Atlas

## Prerequisites

Install:

- Node.js 18 or newer
- npm
- A MongoDB database, such as MongoDB Atlas

Check the installation:

```powershell
node --version
npm --version
```

## Project Structure

```text
portfolio/
├── package.json                 # Root development commands
├── vercel.json                  # Vercel cache headers
│
├── portfolio-frontend/
│   ├── public/                  # Resume and SEO assets
│   ├── src/
│   │   ├── assets/              # Profile and project images
│   │   ├── components/          # Portfolio sections
│   │   ├── data/                # Portfolio content
│   │   ├── hooks/               # Reusable React hooks
│   │   ├── services/            # GitHub and contact API clients
│   │   ├── utils/               # Shared animation variants
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env.example
│   ├── package.json
│   └── vite.config.js
│
└── portfolio_backend/
    ├── config/db.js             # MongoDB connection
    ├── models/contact.js        # Contact schema
    ├── routes/contactRoutes.js  # Contact endpoint
    ├── package.json
    └── server.js
```

## Setup: Step by Step

### 1. Clone the repository

```powershell
git clone https://github.com/pandey-9267/portfolio.git
cd portfolio
```

### 2. Install all dependencies

Run this from the repository root:

```powershell
npm install
npm run install:all
```

This installs the root command runner and the dependencies for both
applications.

### 3. Configure the backend

Create this file:

```text
portfolio_backend\.env
```

Add:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>/<database>
```

`MONGO_URI` is required. Do not commit `.env` or database credentials.

### 4. Configure the local frontend API

Copy the example file:

```powershell
Copy-Item portfolio-frontend\.env.example portfolio-frontend\.env.local
```

The example uses the local backend:

```env
VITE_API_URL=http://localhost:5000/api/contact
```

If `portfolio-frontend\.env.local` is not created, the frontend uses the
deployed Render API by default.

## Run Frontend and Backend Together

From the repository root, run:

```powershell
npm run dev
```

This starts both applications:

```text
Frontend: http://localhost:5173
Backend:  http://localhost:5000
```

Keep this terminal open while developing. Press `Ctrl+C` to stop both servers.

Open the frontend in your browser:

```text
http://localhost:5173
```

The backend health check is available at:

```text
http://localhost:5000/
```

## Run Them Separately

Use separate terminals when you need independent logs or only one application.

### Terminal 1: backend

```powershell
cd portfolio_backend
npm run dev
```

### Terminal 2: frontend

```powershell
cd portfolio-frontend
npm run dev
```

## Available Commands

Run root commands from `portfolio/`:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start frontend and backend together |
| `npm run dev:frontend` | Start only the frontend |
| `npm run dev:backend` | Start only the backend |
| `npm run install:all` | Install both application dependencies |

Run frontend commands from `portfolio-frontend/`:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create the production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

Run backend commands from `portfolio_backend/`:

| Command | Purpose |
| --- | --- |
| `npm start` | Start the Express server |
| `npm run dev` | Start the server with Nodemon |

## API

### Health check

```http
GET /
```

Returns:

```text
Portfolio Backend Running 🚀
```

### Submit a contact message

```http
POST /api/contact
Content-Type: application/json
```

Request body:

```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "message": "Your message"
}
```

The backend stores the message in MongoDB with `createdAt` and `updatedAt`
timestamps.

## Updating Portfolio Content

Most content is stored in `portfolio-frontend/src/data/`:

- `heroContent.js`: hero text and buttons
- `navItems.js`: navigation links
- `projects.js`: project cards and links
- `techStack.js`: skills and technologies
- `codingProfiles.js`: GitHub, LinkedIn, and LeetCode links

Other commonly updated files:

- `components/Experience.jsx`: internship information
- `services/github.js`: GitHub username
- `public/`: resume, favicon, sitemap, and robots file

## Deployment

### Frontend: Vercel

Use `portfolio-frontend` as the Vercel project root:

- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

No Vercel change is required for the root `npm run dev` command. That command
is only for local development.

### Backend: Render

Use `portfolio_backend` as the Render service root:

- Build command: `npm install`
- Start command: `npm start`
- Required environment variable: `MONGO_URI`

The production frontend uses:

```text
https://portfolio-3kt4.onrender.com/api/contact
```

## Live URLs

- Frontend: https://abhi-portfolioo.vercel.app/
- Backend: https://portfolio-3kt4.onrender.com/

## Contact

- Email: abhishekpandey9267@gmail.com
- GitHub: https://github.com/pandey-9267
- LinkedIn: https://www.linkedin.com/in/abhishek-pandey-03a4b4304/
- LeetCode: https://leetcode.com/u/pandey-9267/
