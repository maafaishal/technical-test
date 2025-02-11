import * as admin from "firebase-admin";
import "dotenv/config";

if (process.env.NODE_ENV === "development") {
  process.env.FIRESTORE_EMULATOR_HOST = "localhost:8080";
}

const app = admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  projectId: "ebuddy-tech-test-cfb0a",
});

export const db = admin.firestore(app);
export const auth = admin.auth(app);
