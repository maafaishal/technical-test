import * as admin from "firebase-admin";

import serviceAccount from "../serviceAccountKey.json";

// Ensure the serviceAccount is typed correctly
const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export const db = admin.firestore(app);

export const auth = admin.auth(app);
