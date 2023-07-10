export interface EmployeeDetails {
    sName: string;
    sEmail: string;
    aPhoneNo: string;
    sPassword: string;
    eGender: string;
    dDob: string;
    sPresentAddress: string;
    tUserRole: string;
    tUserGroup: string;
    tManageAccess: string;
    tBranch: string;
    tDeptName: string;
    tDesignation: string;
  }
  
  export interface ErrorDetails {
    email: string;
    password: string;
    required: string;
  }
  
  export interface UserGroup {
    _id: string;
    sName: string;
  }
  
  export interface UserRole {
    _id: string;
    sName: string;
  }
  
  export interface ManageAccess {
    _id: string;
    sName: string;
  }
  
  export interface Branch {
    _id: string;
    sName: string;
  }
  
  export interface Department {
    _id: string;
    sName: string;
  }
  
  export interface Designation {
    _id: string;
    sName: string;
  }