import React, { useState,FormEvent } from "react";
import "./AddVehicle.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export const AddVehicle = (): JSX.Element => {
  const [sName, setSName] = useState<string>("");
  const [sModel, setSModel] = useState<string>("");
  const [sRegNo, setSRegNo] = useState<string>("");
  const [sType, setSType] = useState<string>("");
  const [sCompany, setSCompany] = useState<string>("");
  const [sDescription, setSDescription] = useState<string>("");
  const [aCapacity, setACapacity] = useState<string>("");
  const apiUrl = process.env.REACT_APP_LOCAL_API_URL as string;
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const vehicleData = {
      data: {
        sType,
        sRegNo,
        sName,
        sModel,
        sCompany,
        sDescription,
        aCapacity,
      },
    };

    fetch(apiUrl + "/admin/driver/vehicle", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(vehicleData),
    })
      .then((res) => {
        console.log(res);
        alert("Saved successfully");
        navigate("/vehicle");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="mx-2 ">
      <div className="user-content-header py-4">
        <Row className="mb-2">
          <Col sm="6">
            <h1 className="m-0 text-dark">Vehicles</h1>
          </Col>
          
          <Col sm="6">
            <ol className="breadcrumb float-sm-right justify-content-end">
            <li className="breadcrumb-item">
                <Link to="/dashboard">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/vehicle">Vehicles</Link>
              </li>
              <li className="breadcrumb-item active">Vehicles</li>
            </ol>
          </Col>
        </Row>
      </div>
      <Container fluid className="main-container bg-white">
        <Row className="title-row">
          <p>Add Vehicles</p>
        </Row>
        <Row className="form-group">
          <Col className="form-fields ">
            <p>Vehicle Name</p>
            <input
              value={sName} onChange={(e) =>setSName(e.target.value)}
              placeholder="Enter Owner Name"
              className="new-page-input"
              type="name"
            
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Col className="form-fields">
            <p>Vehicle Model</p>
            <input
             value={sModel} onChange={(e) =>setSModel(e.target.value)}
              placeholder="Enter Vehicle Name"
              className="new-page-input"
              type="name"
             
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Col className="form-fields">
            <p>Vehicle Registration Number</p>
            <input
             value={sRegNo} onChange={(e) =>setSRegNo(e.target.value)}
              placeholder="Enter Vehicle Number"
              className="new-page-input"
              type="name"
             
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Col className="form-fields">
            <p>Vehicle Type</p>
            <input
             value={sType} onChange={(e) =>setSType(e.target.value)}
              placeholder="Enter Owner Contact No."
              className="new-page-input"
              type="name"
             
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Col className="form-fields">
            <p>Company Name</p>
            <input
              value={sCompany} onChange={(e) =>setSCompany(e.target.value)}

              placeholder="Enter Owner Capacity"
              className="new-page-input"
              type="name"
             
            />
          </Col>
        </Row>

        <Row className="form-group">
          <Col className="form-fields mb-2">
            <p> Capacity(unit)</p>
            <input
             value={aCapacity} onChange={(e) =>setACapacity(e.target.value)} 
              placeholder="Enter Owner Capacity"
              className="new-page-input"
              type="number"
            />
          </Col>
        </Row>
        <Row className="form-group">
          <Col className="form-fields mb-2">
            <p>Details</p>

       <textarea
            value={sDescription} onChange={(e) =>setSDescription(e.target.value)} 
            className="page_meta_desc new-page-textarea"
            name="page_meta_desc"
            cols={50}
            rows={10}
           
          ></textarea>
          </Col>
        </Row>
      </Container>
      <div className="card-footer text-center mb-3">
                  
                  <button className="btn ripple btn-primary btnDataSave" name="btnDataSave" onClick={handleSubmit}> Add  Vehicles </button>
                </div>
    </div>
  );
};
