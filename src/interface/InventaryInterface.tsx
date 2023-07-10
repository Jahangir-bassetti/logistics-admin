export interface InventoryItem {
    Item_No_: string;
    Lot_No_: string;
    Location_Code: string;
    Expiration_Date: string;
    Quantity: number;
    Description: string;
    Location_FilterOnly: null | string;
    ItemNo_FilterOnly: null | string;
  }