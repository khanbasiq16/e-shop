import { Request, Response } from "express";
import { AppError } from "./index";

export const errormiddlewarehandler = (
  err: Error,
  req: Request,
  res: Response
) => {
  if (err instanceof AppError) {
    console.log(`Error ${req.method} ${req.url} - ${err.message}`);

    return res.status(err.statusCode).json({
      status: "error",
      message: err.message,
      ...(err.details && { details: err.details }),
    });
  }

  console.error("Unhandled Error:", err);

  return res.status(500).json({
    status: "error",
    message: "Something went wrong!",
  });
};
