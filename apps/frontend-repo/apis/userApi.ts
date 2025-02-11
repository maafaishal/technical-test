import type { User } from "@ebuddy/shared";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:9000";

const getHeader = (token: string) => ({
  Authorization: `Bearer ${token}`,
  "Content-Type": "application/json",
});

export const fetchUserData = async (userId: User["id"], token: string) => {
  const response = await fetch(`${API_URL}/users/fetch-user-data/${userId}`, {
    headers: getHeader(token),
  });

  const responseJson = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: responseJson.error.message,
    };
  }

  return {
    success: true,
    data: responseJson,
  };
};

export const updateUserData = async (
  userId: User["id"],
  newData: User,
  token: string
) => {
  const response = await fetch(`${API_URL}/users/update-user-data/${userId}`, {
    method: "PATCH",
    headers: getHeader(token),
    body: JSON.stringify(newData),
  });

  const responseJson = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: responseJson.error.message,
    };
  }

  return {
    success: true,
    data: responseJson,
  };
};
