# ecommerce-app

## Setup

- Prerequisites: Node 18+, npm
- Install deps:
  - `cd server && npm install`
  - `cd ../client && npm install`

## Environment Variables

Create environment files from examples (do not commit secrets):

- Server: create `.env` in `server/` with:
  - `PORT=5000`
  - `MONGO_URI=your_mongodb_atlas_connection_string`
  - `JWT_SECRET=your_jwt_secret`
  - `CLIENT_ORIGIN=https://your-frontend-domain` (or `*` during initial testing)
  - `FIREBASE_SERVICE_ACCOUNT_JSON={...}` (optional if using Firebase Admin)

- Client: create `.env` in `client/` with:
  - `VITE_API_URL=https://your-backend-domain`
  - `VITE_FIREBASE_API_KEY=...`
  - `VITE_FIREBASE_AUTH_DOMAIN=...`
  - `VITE_FIREBASE_PROJECT_ID=...`
  - `VITE_FIREBASE_STORAGE_BUCKET=...`
  - `VITE_FIREBASE_MESSAGING_SENDER_ID=...`
  - `VITE_FIREBASE_APP_ID=...`
  - `VITE_FIREBASE_MEASUREMENT_ID=...`

## Local Development

In two terminals:

1. Backend
   - `cd server`
   - `npm run dev`
2. Frontend
   - `cd client`
   - `npm run dev`

## Deployment

### Backend (Render example)
1. Push `server/` to GitHub.
2. Create MongoDB Atlas cluster and get `MONGO_URI`.
3. On Render: New Web Service → connect repo
4. Build command: `npm install`
5. Start command: `npm start`
6. Set env vars: `MONGO_URI`, `JWT_SECRET`, `CLIENT_ORIGIN`, `NODE_ENV=production`

### Frontend (Vercel example)
1. Push `client/` to GitHub.
2. On Vercel: import project
3. Set env vars: `VITE_API_URL` (pointing to Render backend URL) and Firebase keys
4. Deploy

## Notes

- Do not commit secrets. Use env vars on hosting dashboards.
- CORS is configured in `server/index.js` via `CLIENT_ORIGIN`.