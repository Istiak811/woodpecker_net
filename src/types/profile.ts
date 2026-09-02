export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
}

export interface ConnectionInfo {
  customerId: string;
  packageName: string;
  speed: string;
  connectionType: string;
  connectionDate: string;
  status: "active" | "inactive" | "suspended";
}

export interface TechnicalInfo {
  routerModel: string;
  routerMac: string;
  ipAddress: string;
  onuSerial: string;
  connectionMode: string;
}

export interface AddressInfo {
  address: string;
  area: string;
  city: string;
  postalCode: string;
}

export interface DocumentInfo {
  profilePicture?: string;
  nidDocument?: string;
}

export interface UserProfile {
  personal: PersonalInfo;
  connection: ConnectionInfo;
  technical: TechnicalInfo;
  address: AddressInfo;
  documents: DocumentInfo;
}