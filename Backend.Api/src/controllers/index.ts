import express from "express";
import { ScanController } from "./scan/ScanController";
import { getScanServices } from "@/services/ServiceInjection";

export const router = express();

router.get("/", ScanController(getScanServices()));
