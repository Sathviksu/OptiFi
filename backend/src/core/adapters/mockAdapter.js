export const mockAdapter = {
  async getDevices() {
    return [
      {
        ip: "192.168.43.10",
        mac: "aa:bb:cc",
        status: "active",
        latency: 34,
        isDummy: true,
      },
      {
        ip: "192.168.43.20",
        mac: "dd:ee:ff",
        status: "idle",
        latency: 200,
        isDummy: true,
      },
    ];
  },
};
