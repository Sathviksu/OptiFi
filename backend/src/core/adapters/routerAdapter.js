// routerAdapter.js
// This adapter is a placeholder for future Router API integration (TP-Link, JioFiber, etc)

export const routerAdapter = {

  async getDevices() {
    // Return empty for now
    return [];
  },

  async getStats() {
    // Stats not implemented yet
    return {
      deviceCount: 0,
      avgLatency: null
    };
  },

  async blockDevice(mac) {
    // Will be implemented when router APIs are added
    return { success: false, message: "Router mode not implemented" };
  }

};
