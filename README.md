# Abhishek Pandey — Developer Portfolio

![React](https://img.shields.io/badge/Frontend-React%20%2B%20Vite-61DAFB?logo=react&logoColor=20232A)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb&logoColor=white)

A responsive full-stack developer portfolio built to present Abhishek Pandey's
projects, technical skills, internship experience, coding profiles, and contact
information.

The project is split into two independently runnable applications:

- `portfolio-frontend`: React and Vite single-page portfolio
- `portfolio_backend`: Express API that stores contact-form submissions in MongoDB

## Live Applications

- **Portfolio:** [abhi-portfolioo.vercel.app](https://abhi-portfolioo.vercel.app/)
- **Backend health check:** [portfolio-3kt4.onrender.com](https://portfolio-3kt4.onrender.com/)

## What the Portfolio Includes

- Responsive single-page layout with anchored navigation
- Animated loading screen and Framer Motion section transitions
- Hero section with resume and contact calls to action
- About section with profile information and live GitHub repository statistics
- Categorized technology stack
- Internship experience timeline
- Data-driven project showcase with live demo and source-code links
- GitHub, LinkedIn, and LeetCode profile cards
- Contact form backed by an Express API and MongoDB
- Resume download from the frontend public assets
- SEO metadata, canonical URL, Open Graph tags, Twitter card metadata, and
  Schema.org Person structured data
- `robots.txt`, `sitemap.xml`, favicon, and social preview assets

## Technology Stack

### Frontend

- React 19
- Vite
- JavaScript (ES6+)
- Tailwind CSS 4
- Framer Motion
- Axios
- React Icons
- Lucide React

### Backend

- Node.js
- Express 5
- Mongoose
- MongoDB Atlas
- CORS
- Dotenv

### Deployment

- Vercel for the frontend
- Render for the backend
- MongoDB Atlas for persistent contact data

## Repository Structure

```text
portfolio/
├── README.md
├── vercel.json
│
├── portfolio-frontend/
│   ├── public/
│   │   ├── Abhishek_Pandey_Resume.pdf
│   │   ├── favicon.png
│   │   ├── preview.png
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── src/
│   │   ├── assets/              # Profile and project images
│   │   ├── components/         # Portfolio sections and shared UI
│   │   ├── data/               # Navigation and portfolio content
│   │   ├── hooks/              # Scroll, outside-click, and GitHub stats hooks
│   │   ├── services/           # GitHub and contact API clients
│   │   ├── utils/              # Shared Framer Motion variants
│   │   ├── App.jsx             # Loading state and page composition
│   │   ├── App.css             # Marquee animation styles
│   │   ├── index.css           # Tailwind theme and global styles
│   │   ├── Loader.jsx          # Terminal-style loading component
│   │   └── main.jsx            # React application entry point
│   ├── eslint.config.js
│   ├── index.html              # SEO metadata and structured data
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── portfolio_backend/
│   ├── config/
│   │   └── db.js               # MongoDB connection
│   ├── models/
│   │   └── contact.js          # Contact Mongoose schema
│   ├── routes/
│   │   └── contactRoutes.js    # Contact API route
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── server.js               # Express application entry point
```

## Prerequisites

Install the following before running the project:

- Node.js 18 or newer
- npm
- A MongoDB Atlas database or another MongoDB deployment

Check your local versions:

```bash
node --version
npm --version
```

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/pandey-9267/portfolio.git
cd portfolio
```

### 2. Install frontend dependencies

```bash
cd portfolio-frontend
npm install
```

### 3. Install backend dependencies

Open a second terminal from the repository root:

```bash
cd portfolio_backend
npm install
```

## Environment Configuration

Create `portfolio_backend/.env` locally. The file is ignored by Git and must
never contain credentials committed to the repository.

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>/<database>
```

`MONGO_URI` is required. The backend exits during startup when it is missing or
when the database connection cannot be established.

## Running Locally

Run the frontend and backend in separate terminals.

### Terminal 1 — backend

```bash
cd portfolio_backend
npm run dev
```

The backend starts on `http://localhost:5000` by default. Its health endpoint
is:

```text
GET http://localhost:5000/
```

### Terminal 2 — frontend

```bash
cd portfolio-frontend
npm run dev
```

Vite prints the local frontend URL in the terminal, normally
`http://localhost:5173`.

> **Contact API note:** the frontend contact client currently points to the
> deployed Render API in
> `portfolio-frontend/src/services/contactService.js`. If you want local
> contact submissions to use the local backend, change the API URL to
> `http://localhost:5000/api/contact` during local development.

## Available Scripts

### Frontend scripts

Run these commands from `portfolio-frontend`:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

### Backend scripts

Run these commands from `portfolio_backend`:

| Command | Purpose |
| --- | --- |
| `npm start` | Start the Express server with Node.js |
| `npm run dev` | Start the server with Nodemon |

## API Reference

### Health check

```http
GET /
```

Example response:

```text
Portfolio Backend Running 🚀
```

### Save a contact message

```http
POST /api/contact
Content-Type: application/json
```

Request body:

```json
{
  "name": "Your Name",
  "email": "you@example.com",
  "message": "I would like to discuss a project."
}
```

Successful response:

```json
{
  "success": true,
  "message": "Message saved successfully",
  "data": {}
}
```

The contact document contains `name`, `email`, and `message` fields, plus
Mongoose-managed `createdAt` and `updatedAt` timestamps.

## Frontend Content Updates

Most portfolio content is intentionally data-driven. Update these files rather
than editing component markup when possible:

- `src/data/heroContent.js`: hero text and call-to-action links
- `src/data/navItems.js`: navigation items
- `src/data/projects.js`: project cards, descriptions, images, and links
- `src/data/techStack.js`: technology categories and skill icons
- `src/data/codingProfiles.js`: external profile cards
- `src/components/Experience.jsx`: internship details and responsibilities
- `src/index.css`: theme variables and global visual tokens
- `src/services/github.js`: GitHub username and statistics mapping

Project images belong in `portfolio-frontend/src/assets/`. Files intended to
be served directly, such as the resume and SEO assets, belong in
`portfolio-frontend/public/`.

## Deployment

### Frontend on Vercel

Configure the Vercel project with `portfolio-frontend` as the project root.
The repository-level `vercel.json` supplies the shared cache-header
configuration. Use the following build settings:

- **Install command:** `npm install`
- **Build command:** `npm run build`
- **Output directory:** `dist`

### Backend on Render

Create a web service using `portfolio_backend` as the root directory:

- **Build command:** `npm install`
- **Start command:** `npm start`
- **Environment variable:** `MONGO_URI`
- **Optional environment variable:** `PORT`

Make sure the MongoDB deployment allows connections from the backend hosting
environment and that the frontend contact client points to the deployed API.

## Quality and Maintenance

- Run `npm run lint` before submitting frontend changes.
- Run `npm run build` to verify the production bundle.
- Keep `package-lock.json` files synchronized with their respective
  `package.json` files.
- Keep secrets in environment variables and out of source control.
- Update the project data files when project links, profile links, or
  technologies change.
- Update SEO URLs in `portfolio-frontend/index.html`, `robots.txt`, and
  `sitemap.xml` together if the deployed domain changes.

There are currently no automated test files in the repository. Manual
verification should include navigation, responsive layouts, external links,
resume download, GitHub statistics loading, and contact-form submission.

## Contact

**Abhishek Pandey**

- Email: [abhishekpandey9267@gmail.com](mailto:abhishekpandey9267@gmail.com)
- LinkedIn: [abhishek-pandey-03a4b4304](https://www.linkedin.com/in/abhishek-pandey-03a4b4304/)
- GitHub: [pandey-9267](https://github.com/pandey-9267)
- LeetCode: [pandey-9267](https://leetcode.com/u/pandey-9267/)

## Author

Abhishek Pandey is a B.Tech Computer Science Engineering student and Full
Stack/MERN Developer interested in building scalable web applications,
strengthening Java and Data Structures & Algorithms skills, and learning
modern software technologies.

## Support

If this project is useful, consider giving the repository a star. Feedback,
professional opportunities, and collaboration ideas are welcome through the
contact details above.
