import admin from 'firebase-admin';

// Initialize Firebase Admin using env-provided credentials
// Expect FIREBASE_SERVICE_ACCOUNT_JSON to contain the JSON string for the service account
let initialized = false;
try {
  const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (serviceAccountJson && !initialized) {
    const serviceAccount = JSON.parse(serviceAccountJson);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
    initialized = true;
  }
} catch (error) {
  console.error('Failed to initialize Firebase Admin from env:', error);
}

export default admin;
