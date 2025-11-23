import { getHotspotClients } from "../../integrations/hotspot/hotspotClient.js";

export const hotspotAdapter = {
  async getDevices() {
    return await getHotspotClients();
  }
};
