import type { ConnectionData } from "@/types/connection";

export const connectionData: ConnectionData = {
  connection: {
    status: "connected",
    packageName: "Premium 20 Mbps",
    speed: "20 Mbps",
    connectionType: "Fiber Optic",
    connectionDate: "January 15, 2026",
  },

  technical: {
    routerModel: "TP-Link Archer C6",
    routerMac: "A4:2B:8C:91:7F:32",
    ipAddress: "192.168.1.100",
    onuSerial: "HWTC123456789",
    connectionMode: "PPPoE",
  },
};