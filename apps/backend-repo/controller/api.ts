import { z } from "zod";
import createError from "http-errors";

import * as userRepository from "../repository/userCollection";

import type { NextFunction, Request, Response } from "express";

const userSchema = z.object({
  totalAverageWeightRatings: z.number().optional(),
  numberOfRents: z.number().optional(),
  recentlyActive: z.number().optional(),
});

export const fetchUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;

    const userData = await userRepository.getById(userId);

    if (!userData) {
      return next(createError(404, "Data not found"));
    }

    res.json(userData);
  } catch (error) {
    console.error("[Error] users/fetchUser: ", error);
    next(
      createError(500, "An unexpected error occurred while fetching the user")
    );
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;

    const parseResult = userSchema.safeParse(req.body);

    if (!parseResult.success) {
      return res.status(400).json({
        error: parseResult.error.errors.map((e) => e.message).join(", "),
      });
    }

    const userData = await userRepository.getById(userId);

    if (!userData) {
      return next(createError(404, "Data not found"));
    }

    await userRepository.update(userId, parseResult.data);

    return res.json(parseResult.data);
  } catch (error) {
    console.error("[Error] users/updateUser: ", error);
    next(
      createError(
        500,
        "An unexpected error occurred while updating the user data"
      )
    );
  }
};
