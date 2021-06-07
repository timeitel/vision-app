import "module-alias/register";
import express from "express";
import { router } from "./controllers/index";

const app = express();

app.use(express.json());
app.use("/", router);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Receipts Cloud Run service started on port: ", port);
});
