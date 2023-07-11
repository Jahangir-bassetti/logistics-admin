import React, { useEffect, useState } from 'react'
import './Trip.css';
import { MyModal } from "../../components/modal/deletemodal/DeleteModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Container, Row, Spinner, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
// import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const Trip: React.FC = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [tripData, settripData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [recordSize, setRecordSize] = useState(10);
  const totalPages = Math.ceil(tripData.length / recordSize);
  // const apiUrl = process.env.REACT_APP_LOCAL_API_URL!;
  const startIndex = currentPage * recordSize;
  const endIndex = startIndex + recordSize;
  const currentItems = tripData.slice(startIndex, endIndex);
  const [showModal, setShowModal] = useState<string | false>(false);

  useEffect(() => {
    settripData(data);
    setisLoading(false);
    // eslint-disable-next-line
  }, []);


  const data = [
    {
      "Reg_No": "FGH890",
      "Direction": "West",
      "Temperature": "29°C",
      "Office_Location": "890 Pine Lane, Hamletown",
      "Speed": "65 km/h",
      "Map": "bassetti india"
    },

    {
      "Reg_No": "CDE567",
      "Direction": "East",
      "Temperature": "22°C",
      "Office_Location": "567 Elm Street, Countryside",
      "Speed": "35 km/h",
      "Map": "Aliah University Boys Hostel"
    },

    {
      "Reg_No": "ZAB234",
      "Direction": "South",
      "Temperature": "24°C",
      "Office_Location": "234 Oak Road, Villageland",
      "Speed": "75 km/h",
      "Map": "https://example.com/map"
    },

    {
      "Reg_No": "WXY901",
      "Direction": "North",
      "Temperature": "27°C",
      "Office_Location": "901 Ash Avenue, Townsville",
      "Speed": "55 km/h",
      "Map": "https://example.com/map"
    },

    {
      "Reg_No": "TUV678",
      "Direction": "West",
      "Temperature": "21°C",
      "Office_Location": "678 Maple Court, Urbanville",
      "Speed": "40 km/h",
      "Map": "https://example.com/map"
    },

    {
      "Reg_No": "QRS345",
      "Direction": "East",
      "Temperature": "26°C",
      "Office_Location": "345 Birch Lane, Suburbia",
      "Speed": "70 km/h",
      "Map": "https://example.com/map"
    },

    {
      "Reg_No": "QRS345",
      "Direction": "East",
      "Temperature": "26°C",
      "Office_Location": "345 Birch Lane, Suburbia",
      "Speed": "70 km/h",
      "Map": "https://example.com/map"
    },

    {
      "Reg_No": "NOP012",
      "Direction": "South",
      "Temperature": "23°C",
      "Office_Location": "012 Walnut Street, Metropolis",
      "Speed": "50 km/h",
      "Map": "https://example.com/map"
    },

    {
      "Reg_No": "KLM789",
      "Direction": "North",
      "Temperature": "28°C",
      "Office_Location": "789 Cedar Avenue, Cityville",
      "Speed": "60 km/h",
      "Map": "https://example.com/map"
    },

    {
      "Reg_No": "KLM789",
      "Direction": "North",
      "Temperature": "28°C",
      "Office_Location": "789 Cedar Avenue, Cityville",
      "Speed": "60 km/h",
      "Map": "https://example.com/map"
    },

    {
      "Reg_No": "HIJ456",
      "Direction": "West",
      "Temperature": "20°C",
      "Office_Location": "456 Pine Lane, Hamletown",
      "Speed": "55 km/h",
      "Map": "https://example.com/map"
    },

    {
      "Reg_No": "EFG123",
      "Direction": "East",
      "Temperature": "25°C",
      "Office_Location": "123 Elm Road, Countryside",
      "Speed": "45 km/h",
      "Map": "https://example.com/map"
    },

    {
      "Reg_No": "BCD890",
      "Direction": "South",
      "Temperature": "29°C",
      "Office_Location": "890 Oak Street, Villageland",
      "Speed": "65 km/h",
      "Map": "https://example.com/map"
    },

    {
      "Reg_No": "YZA567",
      "Direction": "North",
      "Temperature": "22°C",
      "Office_Location": "567 Ash Lane, Townsville",
      "Speed": "35 km/h",
      "Map": "https://example.com/map"
    },

    {
      "Reg_No": "VWX234",
      "Direction": "West",
      "Temperature": "24°C",
      "Office_Location": "234 Maple Avenue, Urbanville",
      "Speed": "75 km/h",
      "Map": "https://example.com/map"
    },

    {
      "Reg_No": "STU901",
      "Direction": "East",
      "Temperature": "27°C",
      "Office_Location": "901 Birch Street, Suburbia",
      "Speed": "65 km/h",
      "Map": "https://example.com/map"
    },

    {
      "Reg_No": "PQR678",
      "Direction": "South",
      "Temperature": "21°C",
      "Office_Location": "678 Walnut Court, Metropolis",
      "Speed": "45 km/h",
      "Map": "https://example.com/map"
    },

    {
      "Reg_No": "MNO345",
      "Direction": "North",
      "Temperature": "26°C",
      "Office_Location": "345 Cedar Lane, Hamletown",
      "Speed": "55 km/h",
      "Map": "https://example.com/map"
    },

    {
      "Reg_No": "JKL012",
      "Direction": "West",
      "Temperature": "23°C",
      "Office_Location": "012 Pine Road, Countryside",
      "Speed": "50 km/h",
      "Map": "https://example.com/map"
    },

    {
      "Reg_No": "GHI789",
      "Direction": "East",
      "Temperature": "28°C",
      "Office_Location": "789 Oak Avenue, Villageland",
      "Speed": "70 km/h",
      "Map": "https://example.com/map"
    },

    {
      "Reg_No": "DEF456",
      "Direction": "South",
      "Temperature": "20°C",
      "Office_Location": "456 Elm Street, Townsville",
      "Speed": "40 km/h",
      "Map": "https://example.com/map"
    },

    {
      "Reg_No": "ABC123",
      "Direction": "North",
      "Temperature": "25°C",
      "Office_Location": "123 Main Street, Cityville",
      "Speed": "60 km/h",
      "Map": "https://example.com/map"
    },
    {
      "Reg_No": "MNO345",
      "Direction": "North",
      "Temperature": "26°C",
      "Office_Location": "345 Cedar Lane, Hamletown",
      "Speed": "55 km/h",
      "Map": "https://example.com/map"
    },
  ];

  const paginateArray = (pageNumber: number) => {
    if (pageNumber >= 0 && pageNumber < totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // const deleteStatus = (id: string) => {
  //   axios
  //     // .delete(apiUrl + `/admin/warehouse/consignment/${id}`)
  //     .then((response) => {
  //       // setInventoryData();
  //       // return response.json();
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  //   toast.success("Item Deleted Successfully !", {
  //     position: "top-center",
  //     theme: "colored",
  //   });
  // };


  return (
    <>
      {showModal && (
        <MyModal
          id={showModal}
          setShowModal={setShowModal} action={function (id: string): void {
            throw new Error('Function not implemented.');
          }}          // action={deleteStatus}
        />
      )}
      <Container fluid style={{ opacity: showModal ? "0.4" : "1" }}>
        <div className="user-content-header py-4">
          <ToastContainer />
          <Row className="mb-2">
            <Col sm="6">
              <h1 className="m-0 text-dark">Trips</h1>
            </Col>
            <Col sm="6">
              <ol className="breadcrumb float-sm-right justify-content-end">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item active">Trips</li>
              </ol>
            </Col>
          </Row>
        </div>

        <div className="content">
          <Row>
            <Col lg="12">
              <div className="card" bg-color="white">
                <div className="card-header bg-white">
                  <h3 className="card-title">Trips</h3>
                  <Link to="/trips/create">
                    <Button
                      variant="info"
                      className="user float-right add_role text-white"
                    >
                      Add Trips
                    </Button>
                  </Link>
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
                          Show{" "}
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
                            placeholder="search Address..."
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
                              Reg No
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="DataTables_Table_0"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Page Title: activate to sort column ascending"
                            >
                              Direction
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="DataTables_Table_0"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Position: activate to sort column ascending"
                            >
                              Temperature
                            </th>

                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="DataTables_Table_0"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Position: activate to sort column ascending"
                            >
                              Office Location
                            </th>

                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="DataTables_Table_0"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Position: activate to sort column ascending"
                            >
                              Speed
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="DataTables_Table_0"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Position: activate to sort column ascending"
                            >
                              Map
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="DataTables_Table_0"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Position: activate to sort column ascending"
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        {tripData.length > 0 ? (
                          <tbody className="bg-tbody">
                            {currentItems
                              .filter((item) => {
                                return search.toLowerCase() === " "
                                  ? item
                                  : (item.Reg_No ? item.Reg_No : "")
                                    .toLowerCase()
                                    .includes(search);
                              })
                              .map((item, index) => {
                                return (
                                  <tr role="row" className="odd" key={index}>
                                    {/* <td className="sorting_1">{index + 1}</td> */}
                                    <td>{item.Reg_No ? item.Reg_No : "------"}</td>
                                    <td>{item.Direction ? item.Direction : "----"}</td>
                                    <td>
                                      {item.Temperature
                                        ? item.Temperature
                                        : "----"}
                                    </td>
                                    <td>{item.Office_Location ? item.Office_Location : "----"}</td>
                                    <td>
                                      {item.Speed ? item.Speed : "----"}
                                    </td>
                                    <td>
                                      {item.Map ? (
                                        <div className="d-flex align-items-center">
                                          <span>{item.Map}</span>
                                          <a
                                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                              item.Map
                                            )}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ms-3"
                                          >
                                            <FontAwesomeIcon icon={faMapMarkerAlt} color="blue" />
                                          </a>
                                        </div>
                                      ) : (
                                        "----"
                                      )}
                                    </td>

                                    <td>
                                      <Button
                                        variant="success"
                                        size="sm"
                                        className=" activeData"
                                      // onClick={() => editEmployee(item._id)}
                                      >
                                        <FontAwesomeIcon
                                          icon={faEdit}
                                          color="white"
                                        />{" "}
                                        <span>Edit</span>
                                      </Button>
                                      <Button
                                        variant="danger"
                                        size="sm"
                                        className=" activeData ms-1"
                                        onClick={() => setShowModal(item._id)}
                                      // onClick={() =>setShowModal(true)}
                                      // onClick={()=>deleteEmployee(item._id)}
                                      >
                                        <FontAwesomeIcon
                                          icon={faTrash}
                                          color="white"
                                        />{" "}
                                        <span>Delete</span>
                                      </Button>
                                    </td>
                                  </tr>
                                );
                              })}
                          </tbody>) : isLoading ? null : (
                            <tbody className="bg-tbody">
                              <tr style={{ height: '10rem' }} className="notfound"><th colSpan={7}>No Records found</th></tr>
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
                          {endIndex < tripData.length
                            ? endIndex
                            : tripData.length}{" "}
                          of {tripData.length} entries
                        </div>
                        {tripData.length > 0 ? (
                          <div
                            className='dataTables_paginate paging_simple_numbers'
                            id='DataTables_Table_0_paginate'
                          >
                            <Button
                              className='paginate_button previous me-2'
                              aria-controls='DataTables_Table_0'
                              data-dt-idx={0}
                              tabIndex={-1}
                              id='DataTables_Table_0_previous'
                              onClick={() => {
                                paginateArray(currentPage - 1);
                              }}
                              disabled={currentPage === 0}
                            >
                              Previous
                            </Button>
                            <span>
                              <Button
                                className='paginate_button-current'
                                aria-controls='DataTables_Table_0'
                                data-dt-idx={1}
                                tabIndex={0}
                              >
                                {currentPage + 1}
                              </Button>
                            </span>
                            <Button
                              className='paginate_button next ms-2'
                              aria-controls='DataTables_Table_0'
                              data-dt-idx={2}
                              tabIndex={-1}
                              id='DataTables_Table_0_next'
                              onClick={() => {
                                paginateArray(currentPage + 1);
                              }}
                              disabled={currentPage === totalPages - 1}
                            >
                              Next
                            </Button>
                          </div>) : (
                          <div
                            className='dataTables_paginate paging_simple_numbers'
                            id='DataTables_Table_0_paginate'
                          >
                            <Button
                              className='paginate_button previous me-2'
                              aria-controls='DataTables_Table_0'
                              data-dt-idx={0}
                              tabIndex={-1}
                              id='DataTables_Table_0_previous'
                              disabled
                            >
                              Previous
                            </Button>
                            <span>
                              <Button
                                className='paginate_button-current'
                                aria-controls='DataTables_Table_0'
                                data-dt-idx={1}
                                tabIndex={0}
                              >
                                {currentPage + 1}
                              </Button>
                            </span>

                            <Button
                              className='paginate_button next ms-2'
                              aria-controls='DataTables_Table_0'
                              data-dt-idx={2}
                              tabIndex={-1}
                              id='DataTables_Table_0_next'
                              disabled
                            >
                              Next
                            </Button>
                          </div>
                        )}
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
  )
}
