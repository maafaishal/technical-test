import express from "express";

import * as apiController from "../controller/api";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", authMiddleware, apiController.getAllUsers);

router.get("/fetch-user-data/:userId", authMiddleware, apiController.fetchUser);

router.patch(
  "/update-user-data/:userId",
  authMiddleware,
  apiController.updateUser
);

export { router as userRoutes };
