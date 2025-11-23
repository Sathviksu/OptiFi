export function parseARP(raw) {
  if (!raw.trim()) return [];

  const lines = raw.split("\n").slice(1); // remove header
  const devices = [];

  for (const line of lines) {
    const parts = line.trim().split(/\s+/);
    if (parts.length < 4) continue;

    const ip = parts[0];
    const flags = parts[2];
    const mac = parts[3];

    if (!ip.startsWith("192.168.43.") || flags !== "0x2") continue;

    devices.push({ ip, mac, status: "connected" });
  }

  return devices;
}
