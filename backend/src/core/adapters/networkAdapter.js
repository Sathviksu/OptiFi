// import { hotspotAdapter } from "./hotspotAdapter.js";
// import { routerAdapter } from "./routerAdapter.js";
// import { NETWORK_MODE } from "../../config/networkMode.js";

// export function getNetworkAdapter() {
//   return NETWORK_MODE === "router" ? routerAdapter : hotspotAdapter; // default is hotspot
// }

import { mockAdapter } from "./mockAdapter.js";
export function getNetworkAdapter() {
  return mockAdapter; // force dummy devices
}
