import { initializeApp, cert } from "firebase-admin/app";
import admin from "firebase-admin";

// Dynamically import the service account key JSON file
const serviceAccount = await import("file:///C:/Users/julius/Downloads/zurihomes-1-firebase-adminsdk-aooro-b0d790c620.json", {
  assert: { type: "json" },
});

const app = initializeApp({
  credential: cert(serviceAccount.default), 
});

const db = admin.firestore(); 
const auth = admin.auth(); 

export { db, auth };
export default admin; 
