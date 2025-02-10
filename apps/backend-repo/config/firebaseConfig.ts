import * as admin from "firebase-admin";

const app = admin.initializeApp({
  projectId: "ebuddy-tech-test-cfb0a",
});

export const db = admin.firestore(app);

export const auth = admin.auth(app);
