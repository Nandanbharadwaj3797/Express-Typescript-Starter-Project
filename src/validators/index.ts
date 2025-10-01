import { Request, Response, NextFunction } from "express";
import { ZodType, ZodError } from "zod";

/**
 * Generic validator for body, query, or params
 */
export const validate =
  (schema: ZodType<unknown>, source: "body" | "query" | "params" = "body") =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req[source]);
      console.log(` Request ${source} is valid`);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: `Invalid request ${source}`,
          success: false,
          errors: error.issues.map(e => ({
            path: e.path.join("."),
            message: e.message
          })),
        });
      }
      next(error);
    }
  };
