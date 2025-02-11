import createError from "http-errors";
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

import type { HttpError } from "http-errors";
import type { Request, Response, NextFunction } from "express";

import { userRoutes } from "../routes/userRoutes";

import "dotenv/config";

const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/users", userRoutes);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(
    createError(404, "Not Found - The requested resource could not be found.")
  );
});

// Error handling middleware
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, _: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);

  res.json({
    error: {
      status: err.status,
      message: err.message,
    },
  });
});

app.listen(PORT, () => console.info("Express server started on port: " + PORT));

export default app;
