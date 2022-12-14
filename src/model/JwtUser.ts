import { PartyRole } from "./Party";

export type JWTUser = {
  uid: string;
  fiscal_number: string;
  name: string;
  family_name: string;
  email: string;
  organization: {
    id: string;
    roles: Array<{
      partyRole: PartyRole;
      role: string;
    }>
  }
};
