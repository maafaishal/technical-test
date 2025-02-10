import express from "express";

import * as apiController from "../controller/api";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/fetch-user-data", authMiddleware, apiController.fetchUser);

router.patch("/update-user-data", authMiddleware, apiController.updateUser);

export { router as userRoutes };
