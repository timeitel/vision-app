import { ExpressRouteFunc } from "@/types";
import { Request, Response } from "express";

type Dependencies = {};

export function ScanController({}: Dependencies): ExpressRouteFunc {
  return async function (req: Request, res: Response) {
    try {
    } catch (err: any) {}
  };
}
