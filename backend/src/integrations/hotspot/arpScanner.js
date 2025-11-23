
import { adb } from "./adbCommands.js";

export async function getARPTable() {
  const raw = await adb("shell cat /proc/net/arp");
  return raw;
}
