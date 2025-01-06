export type SwanFileStatusInfo =
  | { status: "Uploading"; progress: number }
  | { status: "Uploaded" }
  | { status: "Pending" }
  | { status: "Validated" }
  | {
      status: "Refused";
      reason: string;
      reasonCode?: string;
    };

export type SwanFile = {
  id: string;
  statusInfo: SwanFileStatusInfo;
  name: string;
  url?: string;
};
