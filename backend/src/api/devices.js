import express from "express";
import { fetchDevices } from "../core/services/deviceService.js";
const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const devices = await fetchDevices();
    res.json({ devices });
  } catch (err) {
    res.status(500).json({ error: "Failed to load devices" });
  }
});
export default router;
