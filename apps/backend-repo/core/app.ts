import type { HttpError } from "http-errors";
import createError from "http-errors";
import type { Request, Response, NextFunction } from "express";
import express from "express";
import cookieParser from "cookie-parser";
import serverLogger from "morgan";
import logger from "jet-logger";

import "dotenv/config";

import { indexRouter } from "@/routes/index";
import usersRouter from "@/routes/users";

const PORT = process.env.PORT || 9000;

const app = express();

app.use(serverLogger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// error handler
app.use((err: HttpError, req: Request, res: Response) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

app.listen(PORT, () => logger.info("Express server started on port: " + PORT));

export default app;
