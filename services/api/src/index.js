import express from "express";
import pino from "pino";

const app = express();
const logger = pino();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok", service: "api" });
});

app.get("/", (req, res) => {
  res.json({
    name: "Optimobility API",
    message: "Fleet intelligence backend scaffold",
  });
});

app.listen(port, () => {
  logger.info({ port }, "API listening");
});
