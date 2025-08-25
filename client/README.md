# Client (React + Vite)

## Setup

1. Install deps
   - `npm install`
2. Create `.env` with:
   - `VITE_API_URL=https://your-backend-domain`
   - `VITE_FIREBASE_API_KEY=...`
   - `VITE_FIREBASE_AUTH_DOMAIN=...`
   - `VITE_FIREBASE_PROJECT_ID=...`
   - `VITE_FIREBASE_STORAGE_BUCKET=...`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID=...`
   - `VITE_FIREBASE_APP_ID=...`
   - `VITE_FIREBASE_MEASUREMENT_ID=...`

## Development

- `npm run dev`

## Build

- `npm run build`
- `npm run preview`

## Deployment (Vercel)

1. Push `client/` to GitHub
2. Import to Vercel and set the env variables above
3. Deploy; the app will be available at the provided URL
