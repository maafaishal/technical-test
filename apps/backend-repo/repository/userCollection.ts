import { db } from "../config/firebaseConfig";

import type { User } from "../entities/user";

export const getAll = async ({
  pageSize,
  lastDocId,
}: {
  pageSize: number;
  lastDocId: string;
}) => {
  const collection = db.collection("users");

  const countSnapshot = await collection.count().get();
  const total = countSnapshot.data().count;

  let query = collection
    .orderBy("totalAverageWeightRatings", "desc")
    .orderBy("numberOfRents", "desc")
    .orderBy("recentlyActive", "desc")
    .limit(pageSize);

  if (lastDocId) {
    const lastDocRef = await collection.doc(lastDocId).get();

    if (lastDocRef.exists) {
      query = query.startAfter(lastDocRef);
    }
  }

  const snapshot = await query.get();
  const users: User[] = [];

  snapshot.forEach((doc) => {
    users.push({
      id: doc.id,
      ...(doc.data() as Omit<User, "id">),
    });
  });

  const newLastDocId =
    snapshot.docs.length > 0 ? snapshot.docs.at(-1)?.id : null;

  return {
    users,
    total,
    lastDocId: newLastDocId,
  };
};

export const getById = async (id: User["id"]) => {
  const doc = await db.collection("users").doc(id).get();
  console.log("🚀 ~ getById ~ id:", id);
  console.log("🚀 ~ getById ~ doc:", doc);

  if (!doc.exists) {
    return undefined;
  }

  return { id, ...(doc.data() as Omit<User, "id">) };
};

export const update = async (
  id: User["id"],
  data: Partial<Omit<User, "id">>
) => {
  const docRef = db.collection("users").doc(id);
  await docRef.update(data);
};
