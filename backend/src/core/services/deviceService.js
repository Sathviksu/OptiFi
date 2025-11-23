import ping from "ping";
import { getNetworkAdapter } from "../adapters/networkAdapter.js";

async function enrichDevice(device) {
  // Skip ping for dummy devices
  if (device.isDummy) {
    return {
      ...device,
      latency: device.latency || null,
      status: device.status || "active",
    };
  }

  try {
    const res = await ping.promise.probe(device.ip, { timeout: 2 });
    const latency = res.alive ? parseInt(res.time) : null;

    return {
      ...device,
      latency,
      status: latency == null ? "idle" : latency > 300 ? "slow" : "active",
    };
  } catch (err) {
    return {
      ...device,
      latency: null,
      status: "idle",
    };
  }
}

export async function fetchDevices() {
  const adapter = getNetworkAdapter();
  const devices = await adapter.getDevices();

  // Ensure dummy devices are enriched safely
  const enriched = await Promise.all(devices.map(enrichDevice));
  return enriched;
}
