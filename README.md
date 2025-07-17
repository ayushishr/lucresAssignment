# Job Dashboard UI

A pixel-perfect Job Dashboard web application built with **React** and **Tailwind CSS**, designed to match a Figma design for a modern job management platform.

## Features
- Responsive dashboard layout
- Sidebar with company info and stats
- Header with search, icons, and create job button
- Banner/quote section
- Navigation tabs (Dashboard, Jobs, etc.)
- Job filters and job cards
- Right sidebar with reveals left and scheduled interviews
- Clean, modern UI matching Figma

## Getting Started

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or as shown in your terminal).

## Folder Structure
```
project/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   └── components/
│       ├── Dashboard.jsx
│       └── CandidateDetails.jsx
├── public/
│   └── ... (images, etc.)
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Customization
- **Edit UI:** Modify components in `src/components/`.
- **Change images:** Replace files in `src/image/`.
- **Update job/candidate data:** Edit the arrays at the top of `Dashboard.jsx` or `CandidateDetails.jsx`.
- **Styling:** Uses Tailwind CSS for rapid UI changes.

## Credits
- UI inspired by Figma design
- Icons from [Lucide React](https://lucide.dev/)
- Images: Placeholder avatars and logos in `src/image/`

---

Feel free to fork, customize, and use for your own job dashboard or admin panel projects!
