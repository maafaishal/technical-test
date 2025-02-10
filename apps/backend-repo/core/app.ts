import createError from "http-errors";
import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";

import type { HttpError } from "http-errors";
import type { Request, Response, NextFunction } from "express";

import "dotenv/config";

import { userRoutes } from "../routes/userRoutes";

const PORT = process.env.PORT || 9000;

const app = express();

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
app.use((err: HttpError, req: Request, res: Response) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Set the response status code, defaulting to 500 if not specified.
  res.status(err.status || 500);

  // Respond with a JSON error message.
  res.json({
    error: {
      status: err.status,
      message: err.message,
    },
  });
});

app.listen(PORT, () => console.info("Express server started on port: " + PORT));

export default app;
