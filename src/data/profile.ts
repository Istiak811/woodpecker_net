import type { UserProfile } from "@/types/profile";

export const profileData: UserProfile = {
  personal: {
    fullName: "Istiak Hossen Shihab",
    email: "istiak@example.com",
    phone: "+880 XX00-000000",
    dateOfBirth: "XXXXX XX, XXXX",
  },

  connection: {
    customerId: "WN-100245",
    packageName: "Premium 20 Mbps",
    speed: "20 Mbps",
    connectionType: "Fiber",
    connectionDate: "January 15, 2025",
    status: "active",
  },

  technical: {
    routerModel: "TP-Link Archer C6",
    routerMac: "A4:2B:8C:91:22:10",
    ipAddress: "192.168.1.100",
    onuSerial: "ZTEG123456789",
    connectionMode: "PPPoE",
  },

  address: {
    address: "House 25, Road 7",
    area: "Mirpur",
    city: "Dhaka",
    postalCode: "1216",
  },

  documents: {
    profilePicture: "",
    nidDocument: "",
  },
};