import { db } from "../config/firebaseConfig";

import type { User } from "../entities/user";

export const getById = async (id: User["id"]) => {
  const docRef = db.collection("users").doc(id);
  const doc = await docRef.get();

  if (!doc.exists) {
    return undefined;
  }

  return doc.data();
};

export const update = async (
  id: User["id"],
  data: Partial<Omit<User, "id">>
) => {
  const docRef = db.collection("users").doc(id);
  await docRef.update(data);
};
