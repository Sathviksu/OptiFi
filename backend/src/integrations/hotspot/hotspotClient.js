import { getARPTable } from "./arpScanner.js";
import { parseARP } from "./hotspotParser.js";

export async function getHotspotClients() {
  const raw = await getARPTable();
  return parseHotspotARP(raw);
}
