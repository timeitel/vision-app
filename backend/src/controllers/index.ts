import express from "express";
import { ScanController } from "./scans/ScanController";
import { getScanServices } from "@/services/ServiceInjection";

export const router = express();

router.get("/get-entry", ScanController(getScanServices()));
