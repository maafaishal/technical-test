import { z } from "zod";
import createError from "http-errors";

import * as userRepository from "../repository/userCollection";

import type { NextFunction, Request, Response } from "express";

const allQuerySchema = z.object({
  pageSize: z
    .string()
    .refine((val) => !isNaN(Number(val)), {
      message: "Must be a number",
    })
    .optional(),
  lastDocId: z.string().optional(),
});

const userSchema = z.object({
  totalAverageWeightRatings: z.number().optional(),
  numberOfRents: z.number().optional(),
  recentlyActive: z.number().optional(),
});

// This is the POC for part 4
export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const parseResult = allQuerySchema.safeParse(req.query);

    if (!parseResult.success) {
      return next(
        createError(
          400,
          parseResult.error.errors.map((e) => e.message).join(", ")
        )
      );
    }

    const _pageSize = parseResult.data.pageSize
      ? Number(parseResult.data.pageSize)
      : 10;
    const _lastDocId = parseResult.data.lastDocId || "";

    const usersData = await userRepository.getAll({
      pageSize: _pageSize,
      lastDocId: _lastDocId,
    });

    res.json(usersData);
  } catch (error) {
    console.error("[Error] users/getAllUsers: ", error);
    next(
      createError(500, "An unexpected error occurred while fetching the user")
    );
  }
};

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
      return next(
        createError(
          400,
          parseResult.error.errors.map((e) => e.message).join(", ")
        )
      );
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
