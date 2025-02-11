import * as admin from "firebase-admin";
import "dotenv/config";

const app = admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  projectId: "ebuddy-tech-test-cfb0a",
});

export const db = admin.firestore(app);
export const auth = admin.auth(app);
