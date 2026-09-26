# HomiQ 

Frontend-only scaffold for HomiQ, a smart real-estate platform, matching the
provided designs: home, property listings, property detail, 360° virtual
tour, login, and signup.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** for styling
- **lucide-react** for icons

This is frontend only — no backend calls. Property data lives in
`data/properties.ts` as mock data, ready to be swapped for real API calls to
a Django REST Framework backend later (see project structure below).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

HomiQ
└── Frontend
    ├── app
    ├── components
    ├── data
    ├── public
    ├── package.json
    ├── package-lock.json
    ├── next.config.js
    ├── tsconfig.json
    └── ...
```

## Connecting to a real backend later

This project intentionally has no data-fetching layer wired in yet. When the
Django REST Framework + PostgreSQL backend is ready:

1. Replace the static import from `data/properties.ts` with `fetch()` calls
   to your API (e.g. `NEXT_PUBLIC_API_URL`).
2. Keep the `Property` type in `data/properties.ts` as your contract, or
   generate it from the DRF serializer output.
3. Convert list/detail pages to Server Components fetching per-request data,
   or use `getStaticProps`-style revalidation if listings don't change often.

## Notes

- Images use Unsplash URLs as placeholders — replace with real property
  photos or S3/Cloudinary URLs.
- The AI Recommendation and Services pages are lightweight placeholders to
  keep navigation working; flesh these out as needed.
