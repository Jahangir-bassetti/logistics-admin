import React, { useState, useEffect } from 'react';
import './Inventory.css';
import { Button, Col, Container, Row, Table, Spinner } from 'react-bootstrap';
import { InventoryItem } from '../../interface/InventaryInterface';

export const Inventory: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [inventoryData, setInventoryData] = useState<InventoryItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [recordSize, setRecordSize] = useState<number>(10);
  const totalPages = Math.ceil(inventoryData.length / recordSize);
  const startIndex = currentPage * recordSize;
  const endIndex = startIndex + recordSize;
  const currentItems = inventoryData.slice(startIndex, endIndex);

  useEffect(() => {
    setInventoryData(data);
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const paginateArray = (pageNumber:any) =>{
    if (pageNumber >= 0 && pageNumber < totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const  data = [
    {
      "Item_No_": "FG-0001",
      "Lot_No_": "01072022",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-06-30",
      "Quantity": 1824,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "01112022-08",
      "Location_Code": "QUALITY W",
      "Expiration_Date": "2023-10-31",
      "Quantity": 12,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "01112022-09",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-10-31",
      "Quantity": 1237.4,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "01112022-09",
      "Location_Code": "NUP1",
      "Expiration_Date": "2023-10-31",
      "Quantity": 10.6,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "01112022-QCA",
      "Location_Code": "IN-TRANSIT",
      "Expiration_Date": "2023-10-31",
      "Quantity": 12,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "02032023",
      "Location_Code": "QUALITY W",
      "Expiration_Date": "2024-03-01",
      "Quantity": 24,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "02032023 09",
      "Location_Code": "STG1",
      "Expiration_Date": "2024-03-01",
      "Quantity": 1032,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "02032023 10",
      "Location_Code": "STG1",
      "Expiration_Date": "2024-03-01",
      "Quantity": 492,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "02122021",
      "Location_Code": "IN-TRANSIT",
      "Expiration_Date": "2022-12-02",
      "Quantity": 36,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "02122021 DAMAGE",
      "Location_Code": "SKR1",
      "Expiration_Date": "2022-12-02",
      "Quantity": 2,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "02122021 DAMAGE",
      "Location_Code": "WGJ1",
      "Expiration_Date": "2022-12-02",
      "Quantity": 12,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "03012023 QCA",
      "Location_Code": "QUALITY W",
      "Expiration_Date": "2024-01-02",
      "Quantity": 13,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "03032023",
      "Location_Code": "QUALITY W",
      "Expiration_Date": "2024-03-02",
      "Quantity": 12,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "04012023 QCA",
      "Location_Code": "QUALITY W",
      "Expiration_Date": "2024-01-03",
      "Quantity": 13,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "04032023",
      "Location_Code": "QUALITY W",
      "Expiration_Date": "2024-03-03",
      "Quantity": 22,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "04032023 01",
      "Location_Code": "FG SABR",
      "Expiration_Date": "2024-03-03",
      "Quantity": 48,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "04032023 01",
      "Location_Code": "SKR1",
      "Expiration_Date": "2024-03-03",
      "Quantity": 2280,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "04032023 01",
      "Location_Code": "WMH1",
      "Expiration_Date": "2024-03-03",
      "Quantity": 4104,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "04032023 01",
      "Location_Code": "WMH2",
      "Expiration_Date": "2024-03-03",
      "Quantity": 8460,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "04072020",
      "Location_Code": "PROD W",
      "Expiration_Date": "2021-07-04",
      "Quantity": 12,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "04072022- 07",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-07-03",
      "Quantity": 12,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "04072022- 07",
      "Location_Code": "WMH1-DMG",
      "Expiration_Date": "2023-07-03",
      "Quantity": 216,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "04072022- 09",
      "Location_Code": "SKR1-DMG",
      "Expiration_Date": "2023-07-03",
      "Quantity": 1,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "04072022- 10",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-07-03",
      "Quantity": 72,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "05072022-08",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-07-04",
      "Quantity": 12,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "05072022-08",
      "Location_Code": "WMH1-DMG",
      "Expiration_Date": "2023-07-04",
      "Quantity": 192,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "05072022-10",
      "Location_Code": "WMH1-DMG",
      "Expiration_Date": "2023-07-04",
      "Quantity": 216,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "05082022",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-08-04",
      "Quantity": 828,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "05082022-03",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-08-04",
      "Quantity": 528,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "05082022-08",
      "Location_Code": "NHR7-HOLD",
      "Expiration_Date": "2023-08-04",
      "Quantity": 47,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "05102020",
      "Location_Code": "PROD W",
      "Expiration_Date": "2021-10-05",
      "Quantity": 24,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "05102022-13L2",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-10-04",
      "Quantity": 12,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "05102022-QCA",
      "Location_Code": "IN-TRANSIT",
      "Expiration_Date": "2023-10-04",
      "Quantity": 24,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "06092022-10",
      "Location_Code": "EWB2",
      "Expiration_Date": "2023-09-05",
      "Quantity": 36,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "06092022-11",
      "Location_Code": "NHR7-HOLD",
      "Expiration_Date": "2023-09-05",
      "Quantity": 516,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "06092022-12",
      "Location_Code": "NHR7-HOLD",
      "Expiration_Date": "2023-09-05",
      "Quantity": 2004,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "06092022-13",
      "Location_Code": "NHR7-HOLD",
      "Expiration_Date": "2023-09-05",
      "Quantity": 2004,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "06092022-14",
      "Location_Code": "NHR7-HOLD",
      "Expiration_Date": "2023-09-05",
      "Quantity": 2004,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "06092022-15",
      "Location_Code": "NHR7-HOLD",
      "Expiration_Date": "2023-09-05",
      "Quantity": 2004,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "06092022-16",
      "Location_Code": "NHR7-HOLD",
      "Expiration_Date": "2023-09-05",
      "Quantity": 2004,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "06092022-17",
      "Location_Code": "NHR7-HOLD",
      "Expiration_Date": "2023-09-05",
      "Quantity": 2004,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "06092022-18",
      "Location_Code": "NHR7-HOLD",
      "Expiration_Date": "2023-09-05",
      "Quantity": 2004,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "06092022-19",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-09-05",
      "Quantity": 708,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "06092022-19",
      "Location_Code": "NHR7-HOLD",
      "Expiration_Date": "2023-09-05",
      "Quantity": 1008,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "06092022-20",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-09-05",
      "Quantity": 1992,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "06092022-21",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-09-05",
      "Quantity": 2004,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "06092022-22",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-09-05",
      "Quantity": 1992,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "06092022-23",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-09-05",
      "Quantity": 2004,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "06092022-24",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-09-05",
      "Quantity": 2004,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "06092022-25",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-09-05",
      "Quantity": 2004,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "06092022-26",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-09-05",
      "Quantity": 1740,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "06112022",
      "Location_Code": "QUALITY W",
      "Expiration_Date": "2023-11-05",
      "Quantity": 12,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "06112022-13",
      "Location_Code": "WIP ROSHAN",
      "Expiration_Date": "2023-11-05",
      "Quantity": 12,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "06112022-QCA",
      "Location_Code": "IN-TRANSIT",
      "Expiration_Date": "2023-11-05",
      "Quantity": 12,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "07022023",
      "Location_Code": "QUALITY W",
      "Expiration_Date": "2024-02-06",
      "Quantity": 6,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "07042022-QCA",
      "Location_Code": "NHR3-DMG",
      "Expiration_Date": "2023-04-06",
      "Quantity": 12,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "07092020",
      "Location_Code": "PROD W",
      "Expiration_Date": "2021-09-07",
      "Quantity": 24,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "07112022",
      "Location_Code": "QUALITY W",
      "Expiration_Date": "2023-11-06",
      "Quantity": 12,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "07122021",
      "Location_Code": "IN-TRANSIT",
      "Expiration_Date": "2022-12-07",
      "Quantity": 36,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "08022022 DAMAGE",
      "Location_Code": "SKR1",
      "Expiration_Date": "2023-02-08",
      "Quantity": 4,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "09072022",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-07-08",
      "Quantity": 7152,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "09072022",
      "Location_Code": "NHR7-HOLD",
      "Expiration_Date": "2023-07-08",
      "Quantity": 144,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "09072022-04",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-07-08",
      "Quantity": 948,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "09072022-05",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-07-08",
      "Quantity": 2004,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "09072022-06",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-07-08",
      "Quantity": 2004,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "09072022-07",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-07-08",
      "Quantity": 1632,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "09072022-08",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-07-08",
      "Quantity": 192,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "09072022-13",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-07-08",
      "Quantity": 370,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "09072022-14",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-07-08",
      "Quantity": 1479,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "09072022-15",
      "Location_Code": "WMH1-DMG",
      "Expiration_Date": "2023-07-08",
      "Quantity": 201,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "09082022-06",
      "Location_Code": "NHR3-DMG",
      "Expiration_Date": "2023-08-08",
      "Quantity": 8,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "09082022-06",
      "Location_Code": "NHR7-HOLD",
      "Expiration_Date": "2023-08-08",
      "Quantity": 3,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "09082022-15",
      "Location_Code": "NHR7-HOLD",
      "Expiration_Date": "2023-08-08",
      "Quantity": 492,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "09102020",
      "Location_Code": "PROD W",
      "Expiration_Date": "2021-10-09",
      "Quantity": 24,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "09112022",
      "Location_Code": "QUALITY W",
      "Expiration_Date": "2023-11-08",
      "Quantity": 12,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "09112022-08",
      "Location_Code": "WIP ROSHAN",
      "Expiration_Date": "2023-11-08",
      "Quantity": 12,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "09112022-QCA",
      "Location_Code": "IN-TRANSIT",
      "Expiration_Date": "2023-11-08",
      "Quantity": 12,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "10062022-07",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-06-09",
      "Quantity": 12,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "11012022 DAMAGE",
      "Location_Code": "SKR1",
      "Expiration_Date": "2023-01-11",
      "Quantity": 1,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "11032023",
      "Location_Code": "QUALITY W",
      "Expiration_Date": "2024-03-10",
      "Quantity": 22,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "11032023-04",
      "Location_Code": "STG1",
      "Expiration_Date": "2024-03-10",
      "Quantity": 984,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "11032023-05",
      "Location_Code": "STG1",
      "Expiration_Date": "2024-03-10",
      "Quantity": 216,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "11032023-05",
      "Location_Code": "WGJ2",
      "Expiration_Date": "2024-03-10",
      "Quantity": 312,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "11032023-06",
      "Location_Code": "WGJ2",
      "Expiration_Date": "2024-03-10",
      "Quantity": 288,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "11032023-06",
      "Location_Code": "WMH3",
      "Expiration_Date": "2024-03-10",
      "Quantity": 348,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "11032023-07",
      "Location_Code": "WMH3",
      "Expiration_Date": "2024-03-10",
      "Quantity": 1884,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "11102020",
      "Location_Code": "PROD W",
      "Expiration_Date": "2021-10-11",
      "Quantity": 24,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "11102021 DAMAGE",
      "Location_Code": "NHR3-DMG",
      "Expiration_Date": "2022-10-11",
      "Quantity": 12,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12022023",
      "Location_Code": "QUALITY W",
      "Expiration_Date": "2024-02-12",
      "Quantity": 20,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12022023-02",
      "Location_Code": "SKR1-DMG",
      "Expiration_Date": "2024-02-11",
      "Quantity": 3,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12022023-02",
      "Location_Code": "WGJ2",
      "Expiration_Date": "2024-02-11",
      "Quantity": 276,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12042023",
      "Location_Code": "IN-TRANSIT",
      "Expiration_Date": "2024-04-11",
      "Quantity": 26,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12042023-01",
      "Location_Code": "NHR4",
      "Expiration_Date": "2024-04-11",
      "Quantity": 2004,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12042023-02",
      "Location_Code": "NHR4",
      "Expiration_Date": "2024-04-11",
      "Quantity": 1836,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12042023-02",
      "Location_Code": "NHR7",
      "Expiration_Date": "2024-04-11",
      "Quantity": 168,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12042023-03",
      "Location_Code": "IN-TRANSIT",
      "Expiration_Date": "2024-04-11",
      "Quantity": 1200,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12042023-03",
      "Location_Code": "NHR7",
      "Expiration_Date": "2024-04-11",
      "Quantity": 804,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12042023-04",
      "Location_Code": "NHR7",
      "Expiration_Date": "2024-04-11",
      "Quantity": 2004,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12042023-05",
      "Location_Code": "NHR7",
      "Expiration_Date": "2024-04-11",
      "Quantity": 2004,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12042023-06",
      "Location_Code": "NHR7",
      "Expiration_Date": "2024-04-11",
      "Quantity": 2004,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12042023-07",
      "Location_Code": "NHR7",
      "Expiration_Date": "2024-04-11",
      "Quantity": 2004,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12042023-08",
      "Location_Code": "NHR7",
      "Expiration_Date": "2024-04-11",
      "Quantity": 2004,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12042023-09",
      "Location_Code": "NHR7",
      "Expiration_Date": "2024-04-11",
      "Quantity": 2004,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12042023-10",
      "Location_Code": "NHR7",
      "Expiration_Date": "2024-04-11",
      "Quantity": 2004,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12042023-11",
      "Location_Code": "NHR7",
      "Expiration_Date": "2024-04-11",
      "Quantity": 2004,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12042023-12",
      "Location_Code": "NHR7",
      "Expiration_Date": "2024-04-11",
      "Quantity": 2004,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12042023-13",
      "Location_Code": "NHR7",
      "Expiration_Date": "2024-04-11",
      "Quantity": 1920,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12092022-06",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-09-11",
      "Quantity": 24,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12092022-07",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-09-11",
      "Quantity": 1992,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12092022-08",
      "Location_Code": "NHR4-DMG",
      "Expiration_Date": "2023-09-11",
      "Quantity": 1932,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12092022-08",
      "Location_Code": "QUALITY W",
      "Expiration_Date": "2023-09-11",
      "Quantity": 24,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12092022-10",
      "Location_Code": "EWB2",
      "Expiration_Date": "2023-09-11",
      "Quantity": 36,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12092022-10",
      "Location_Code": "NHR7-HOLD",
      "Expiration_Date": "2023-09-11",
      "Quantity": 1128,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12092022-11",
      "Location_Code": "NHR7-HOLD",
      "Expiration_Date": "2023-09-11",
      "Quantity": 2004,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12092022-12",
      "Location_Code": "NHR7-HOLD",
      "Expiration_Date": "2023-09-11",
      "Quantity": 36,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  {
      "Item_No_": "FG-0001",
      "Lot_No_": "12092022-13",
      "Location_Code": "NHR7-HOLD",
      "Expiration_Date": "2023-09-12",
      "Quantity": 1608,
      "Description": "NDW- Vegetable Topping Whipo Star",
      "Location_FilterOnly": null,
      "ItemNo_FilterOnly": null
  },
  ];


  return (
    <>
      <Container fluid >
        <div className="user-content-header py-4">

          <Row className="mb-2">
            <Col sm="6">
              <h1 className="m-0 text-dark">Inventory</h1>
            </Col>
            <Col sm="6">
              <ol className="breadcrumb float-sm-right justify-content-end">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item active">Inventory</li>
              </ol>
            </Col>
          </Row>
        </div>
        <div className="content">
          <Row>
            <Col lg="12">
              <div className="card" bg-color="white">
                <div className="card-header bg-white">
                  <h3 className="card-title">Inventory</h3>
                </div>

                <div className="card-body">
                  <div
                    id="DataTables_Table_0_wrapper"
                    className="dataTables_wrapper no-footer"
                  >
                    <div className="card-head">
                      <div
                        className="dataTables_length"
                        id="DataTables_Table_0_length"
                      >
                        <label>
                          Show{""}
                          <select
                            name="DataTables_Table_0_length"
                            aria-controls="DataTables_Table_0"
                            className="table-input"
                            onChange={(e) => {
                              setRecordSize(+e.target.value);
                              paginateArray(0);
                            }}
                          >
                            <option value="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="100">100</option>
                          </select>{" "}
                          entries
                        </label>
                      </div>
                      <div
                        id="DataTables_Table_0_filter"
                        className="dataTables_filter"
                      >
                        <label>
                          Search:
                          <input
                            type="search"
                            className="table-input"
                            placeholder="search Lot No..."
                            aria-controls="DataTables_Table_0"
                            onChange={(e) => setSearch(e.target.value)}
                          />
                        </label>
                      </div>
                    </div>

                    <div style={{ overflow: "auto" }}>
                      <Table
                        bordered
                        id="DataTables_Table_0"
                        className=" datatable table-striped-blue dataTable no-footer mt-3"
                        role="grid"
                        aria-describedby="DataTables_Table_0_info"
                      >
                        <thead className="bg-thead">
                          <tr role="row">
                            <th
                              className="not-exported sorting_asc"
                              tabIndex={0}
                              aria-controls="DataTables_Table_0"
                              rowSpan={1}
                              colSpan={1}
                              aria-sort="ascending"
                              aria-label=": activate to sort column descending"
                            >
                              Item No
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="DataTables_Table_0"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Page Title: activate to sort column ascending"
                            >
                            Lot No
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="DataTables_Table_0"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Position: activate to sort column ascending"
                            >
                              Location Code
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="DataTables_Table_0"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Position: activate to sort column ascending"
                            >
                             Expiration Date
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="DataTables_Table_0"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Position: activate to sort column ascending"
                            >
                            Quantity
                            </th>
                            <th
                              className="sorting "
                              tabIndex={0}
                              aria-controls="DataTables_Table_0"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Position: activate to sort column ascending"
                            >
                             Description
                            </th>  
                          </tr>
                        </thead>
                        { inventoryData.length>0 ? (
                        <tbody className="bg-tbody">
                           { currentItems 
                            .filter((item) => {                             
                              return  search.toLowerCase() === " "
                                ? item
                                : (item.Lot_No_ ? item.Lot_No_ : "")
                                    .toLowerCase()
                                    .includes(search);
                            }) 
                           .map((item, index) => {
                              return (
                                <tr role="row" className="odd" key={index}>
                                  {/* <td className="sorting_1">{index + 1}</td> */}
                                  <td>{item.Item_No_ ? item.Item_No_ : "------"}</td>
                                  <td>{item.Lot_No_ ? item.Lot_No_ : "----"}</td>
                                  <td>
                                    {item.Location_Code
                                      ? item.Location_Code
                                      : "----"}
                                  </td>
                                  <td>{item.Expiration_Date ? item.Expiration_Date : "----"}</td>
                                  <td>
                                    {item.Quantity ? item.Quantity : "----"}
                                  </td>
                                  <td>
                                    {item.Description
                                      ? item.Description
                                      : "----"}
                                  </td>  
                               
                                </tr>
                              );
                            })}
                        </tbody>):isLoading?null:(
                            <tbody className="bg-tbody">
                            <tr  style={{height: '10rem'}} className="notfound"><th colSpan={6}>No Records found</th></tr>
                           </tbody>
                        )}
                      </Table>

                      {isLoading ? (
                        <div
                          className="d-flex justify-content-center align-items-center"
                          style={{ height: "20vh" }}
                        >
                          <Spinner animation="border" variant="primary" />
                        </div>
                       ) : null} 
                      <div className="d-flex justify-content-between align-items-center">
                        <div
                          className="dataTables_info"
                          id="DataTables_Table_0_info "
                          role="status"
                          aria-live="polite"
                        >
                          Showing {startIndex + 1} to{" "}
                          {endIndex < inventoryData.length
                            ? endIndex
                            : inventoryData.length}{" "}
                          of {inventoryData.length} entries
                        </div>
                        <div
                          className="dataTables_paginate paging_simple_numbers"
                          id="DataTables_Table_0_paginate"
                        >
                          <Button
                            className="paginate_button previous me-2"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx={0}
                            tabIndex={-1}
                            id="DataTables_Table_0_previous"
                            onClick={() => {
                              paginateArray(currentPage - 1);
                            }}
                            disabled={currentPage === 0}
                          >
                            Previous
                          </Button>
                          <span>
                            <Button
                              className="paginate_button-current"
                              aria-controls="DataTables_Table_0"
                              data-dt-idx={1}
                              tabIndex={0}
                            >
                              {currentPage + 1}
                            </Button>
                          </span>
                          <Button
                            className="paginate_button next ms-2"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx="2"
                            tabIndex={-1}
                            id="DataTables_Table_0_next"
                            onClick={() => {
                              paginateArray(currentPage + 1);
                            }}
                            disabled={currentPage === totalPages - 1}
                          >
                            Next
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
