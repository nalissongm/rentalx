import express, { NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";

import "express-async-errors";
import "reflect-metadata";
import "./shared/container";

import { AppError } from "./errors/AppError";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

import "./database";

const app = express();

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

// eslint-disable-next-line no-unused-vars
app.use((err: Error, _: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError)
    return res.status(err.statusCode).json({
      message: err.message,
    });

  return res.status(500).json({
    status: "error",
    message: `Internal server error -> ${err.message}`,
  });
});

app.listen(3333, () => console.log("Server is running!"));
