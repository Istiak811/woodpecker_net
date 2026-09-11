export type ConnectionStatus =
  | "connected"
  | "disconnected"
  | "suspended";

export interface ConnectionInfo {
  status: ConnectionStatus;
  packageName: string;
  speed: string;
  connectionType: string;
  connectionDate: string;
}

export interface TechnicalInfo {
  routerModel: string;
  routerMac: string;
  ipAddress: string;
  onuSerial: string;
  connectionMode: string;
}

export interface ConnectionData {
  connection: ConnectionInfo;
  technical: TechnicalInfo;
}