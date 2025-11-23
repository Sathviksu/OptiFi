import express from "express";
import cors from "cors";
import router from "./api/devices.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Backend is working!" });
});
app.use("/api/devices", router);

export default app;
