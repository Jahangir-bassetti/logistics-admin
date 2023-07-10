import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Customer {
  _id: string;
  sName: string;
}

interface OrderItem {
  _id: string;
  aQuantity: number;
}

interface Driver {
  _id: string;
  sName: string;
}

interface Warehouse {
  _id: string;
  sName: string;
}
interface ConsignmentDetails {
  sDescription: string;
  sDeliveryAddress: string;
  tCustomer: string;
  aCustomerNumber: number;
  sGeoLocation: string;
  tDriver: string;
  tItems: string;
  tWarehouse: string;
  aQuantity: number;
  aPrice: number;
  sBillingDetails: string;
  eStatus: string;
}

export const AddConsignment: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [details, setDetails] = useState<ConsignmentDetails>({
    sDescription: '',
    sDeliveryAddress: '',
    tCustomer: '',
    aCustomerNumber: 0,
    sGeoLocation: '',
    tDriver: '',
    tItems: '',
    tWarehouse: '',
    aQuantity: 0,
    aPrice: 0,
    sBillingDetails: '',
    eStatus: '',
  });
  const [customerNameList, setCustomerNameList] = useState<Customer[]>([]);
  const [totalItemList, setTotalItemList] = useState<OrderItem []>([]);
  const [assignedDriverList, setAssignedDriverList] = useState<Driver[]>([]);
  const [warehouseList, setWarehouseList] = useState<Warehouse[]>([]);
  const statusArray: any[] = ['ORDERED', 'INPROGRESS', 'PICKEDUP', 'DELIVERED'];
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_LOCAL_API_URL;

  useEffect(() => {
    loadInitData();
    // eslint-disable-next-line
  }, []);



  function loadInitData() {
    let loadCustomerName = fetch(apiUrl + "/admin/customer", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setCustomerNameList(res.data ? res.data : []);
      })
      .catch((err) => {
        console.log(err.message);
      });

   let loadTotalItemList = fetch(apiUrl + "/admin/warehouse/order-item",{
    method: 'GET',
    headers: {"content-type": "application/json"},
   })
   .then((res)=>{
    return res.json();
   })
   .then((res)=>{
    setTotalItemList(res.data ? res.data : []);
   })
   .catch((err)=>{
    console.log(err.message)
   });

   let loadAssignedDriverList = fetch(apiUrl + '/admin/driver',{
    method: 'GET',
    headers: {"content-type": "application/json"},
   })
   .then((res)=>{
    return res.json();
   })
   .then((res)=>{
    setAssignedDriverList(res.data ? res.data : []);
   })
   .catch((err)=>{
    console.log(err.message)
   });

   let loadWarehouseList = fetch(apiUrl + '/admin/warehouse',{
    method: 'GET',
    headers: {"content-type": "application/json"},
   })
   .then((res)=>{
    return res.json();
   })
   .then((res)=>{
    setWarehouseList(res.data ? res.data : []);
   })
   .catch((err)=>{
    console.log(err.message)
   });

    Promise.all([
      loadCustomerName,
      loadTotalItemList,
      loadAssignedDriverList,
      loadWarehouseList
    ])
      .catch((reason) => {
        console.error(reason);
      })
      .finally(() => setIsLoading(false));
      setIsLoading(false);
  }

  const inputhandler = async (e:any) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  function isDataNotFilled() {
    return !(
      details.sDescription &&
      details.sDeliveryAddress &&
      details.tCustomer &&
      details.aCustomerNumber &&
      details.sGeoLocation &&
      details.tDriver &&
      details.tItems &&
      details.tWarehouse &&
      details.aQuantity &&
      details.aPrice &&
      details.sBillingDetails &&
      details.eStatus
    );
  }

  const handlesubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const consignmentData = {
      data: {
        sDescription: details.sDescription,
        sDeliveryAddress: details.sDeliveryAddress,
        tCustomer: details.tCustomer,
        aCustomerNumber: details.aCustomerNumber,
        sGeoLocation: details.sGeoLocation,
        tDriver: details.tDriver,
        tItems: details.tItems,
        tWarehouse: details.tWarehouse,
        aQuantity:details.aQuantity,
        aPrice: details.aPrice,
        sBillingDetails: details.sBillingDetails,
        eStatus:details.eStatus,
      },
    };

    console.log(consignmentData);
   

    axios.post(apiUrl + "/admin/warehouse/consignment", consignmentData)
      .then((res) => {
        console.log(res);
        navigate("/consignments");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message,{
          position: "top-center",
          theme: "colored",
      });
      });
  };

  return (
    <>
      {isLoading ? (
        <div className="bg-loader">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : null}
      <div className="mx-2 ">
        <div className="user-content-header py-4">
        <ToastContainer/>
          <Row className="mb-2">
            <Col sm="6">
              <h1 className="m-0 text-dark">consignment</h1>
            </Col>

            <Col sm="6">
              <ol className="breadcrumb float-sm-right justify-content-end">
                <li className="breadcrumb-item">
                  <Link to="dashboard">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/consignments">consignment</Link>
                </li>
                <li className="breadcrumb-item active">consignment</li>
              </ol>
            </Col>
          </Row>
        </div>
        <Container fluid className="main-container bg-white pb-4">
          <Row className="title-row">
            <p>Add consignment</p>
          </Row>

          <Row className="form-group">
            <Col className="form-fields op">
              <p>Description</p>
              <input
                name="sDescription"
                required
                onChange={(e) => inputhandler(e)}
                placeholder="Enter Description"
                className="new-page-input"
                type="text"
              />
             
            </Col>
          </Row>
          <Row className="form-group">
            <Col className="form-fields op">
              <p>Delivery Address</p>

              <input
                name="sDeliveryAddress"
                required
                onChange={(e) => inputhandler(e)}
                placeholder="Enter Delivery Address"
                className="new-page-input"
                type="text"
              />
            
            </Col>
          </Row>
          <Row className="form-group">
            <Col className="form-fields op">
              <p>Customer Name</p>
              <select
                name="tCustomer"
                required
                value={details.tCustomer ? details.tCustomer : ""}
                onChange={(e) => inputhandler(e)}
                className="new-page-input"
              >
                <option value={""} disabled>
                  Select any option
                </option>
                {customerNameList.map((value, index) => (
                  <option key={index} value={value._id}>
                    {value.sName}
                  </option>
                ))}
              </select>
            </Col>
          </Row>
          <Row className="form-group">
            <Col className="form-fields op">
              <p>Customer Number</p>

              <input
                // onBlur={() => checkPassword()}
                name="aCustomerNumber"
                onChange={(e) => inputhandler(e)}
                placeholder="Enter Customer Number"
                className="new-page-input"
                type="number"
              />
              {/* <span className="danger-warning">{error.password}</span> */}
            </Col>
          </Row>
          <Row className="form-group">
            <Col className="form-fields op">
              <p>Location</p>

              <input
                name="sGeoLocation"
                required
                onChange={(e) => inputhandler(e)}
                placeholder="Enter Location"
                className="new-page-input"
                type="text"
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col className="form-fields op">
              <p>Assigned Driver Name</p>

              <select
                name="tDriver"
                required
                value={details.tDriver ? details.tDriver : ""}
                onChange={(e) => inputhandler(e)}
                className="new-page-input"
              >
                <option value={""} disabled>
                  Select any option
                </option>
                {assignedDriverList.map((value, index) => (
                  <option key={index} value={value._id}>
                    {value.sName}
                  </option>
                ))}
              </select>
            </Col>
          </Row>
          <Row className="form-group">
            <Col className="form-fields op">
              <p>Total Item</p>

              <select
                name="tItems"
                required
                value={details.tItems ? details.tItems : ""}
                onChange={(e) => inputhandler(e)}
                className="new-page-input"
              >
                <option value={""} disabled>
                  Select any option
                </option>
                {totalItemList.map((value, index) => (
                  <option key={index} value={value._id}>
                    {value.aQuantity}
                  </option>
                ))}
              </select>
            </Col>
          </Row>
          <Row className="form-group">
            <Col className="form-fields op">
              <p>Warehouse Name</p>

              <select
                name="tWarehouse"
                required
                value={details.tWarehouse ? details.tWarehouse : ""}
                onChange={(e) => inputhandler(e)}
                className="new-page-input"
              >
                <option value={""} disabled>
                  Select any option
                </option>
                {warehouseList.map((value, index) => (
                  <option key={index} value={value._id}>
                    {value.sName}
                  </option>
                ))}
              </select>
            </Col>
          </Row>
          <Row className="form-group">
            <Col className="form-fields op">
              <p>Quantity</p>

              <input
                name="aQuantity"
                required
                onChange={(e) => inputhandler(e)}
                placeholder="Enter Quantity"
                className="new-page-input"
                type="number"
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col className="form-fields op">
              <p>Total Price</p>

              <input
                name="aPrice"
                required
                onChange={(e) => inputhandler(e)}
                placeholder="Enter Total Price"
                className="new-page-input"
                type="number"
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col className="form-fields op">
              <p>Billing Details</p>

              <input
                name="sBillingDetails"
                required
                onChange={(e) => inputhandler(e)}
                placeholder="Enter Billing Details"
                className="new-page-input"
                type="text"
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col className="form-fields op">
              <p>Status</p>

              <select
                name="eStatus"
                required
                value={details.eStatus ? details.eStatus : ""}
                onChange={(e) => inputhandler(e)}
                className="new-page-input"
              >
                <option value={""} disabled>
                  Select any option
                </option>
                {statusArray.map((value, index) => (
                  <option key={index} value={value._id}>
                    {value}
                  </option>
                ))}
              </select>
            </Col>
          </Row>
        </Container>
        <div className="card-footer text-center mb-3">
          <button
            className="btn ripple btn-primary btnDataSave"
            name="btnDataSave"
            disabled={isDataNotFilled()}
            onClick={handlesubmit}
          >
            {" "}
            Add User{" "}
          </button>
        </div>
      </div>
    </>
  )
}

