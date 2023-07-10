import { ReactNode } from "react";

interface UserData {
    Address: ReactNode;
    Email: ReactNode;
    ContactNo: ReactNode;
    _id: string;
    sName?: string;
    sEmail?: string;
    aPhoneNo?: number;
    sPresentAddress?: string;
    bIsActive: boolean;
    bIsApproved: boolean;
  }

export default UserData;