import { auth } from "../config/firebaseConfig";

import type { Request, Response, NextFunction } from "express";

const NODE_ENV = process.env.NODE_ENV || "development";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization || "";

    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        error: {
          status: 401,
          message: "Unauthorized - No token provided",
        },
      });
    }

    const token = authHeader.split("Bearer ")[1];

    if (NODE_ENV === "development" && token === "dummy-token") {
      return next();
    }

    await auth.verifyIdToken(token);

    return next();
  } catch (error) {
    console.error("[Error] AuthMiddleware:", error);
    return res.status(401).json({
      error: {
        status: 401,
        message: "Unauthorized - Invalid token",
      },
    });
  }
};
