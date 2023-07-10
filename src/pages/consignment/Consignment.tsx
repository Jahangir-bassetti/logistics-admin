import React, { useEffect, useState } from "react";
import "./Consignment.css";
import { MyModal } from "../../components/modal/deletemodal/DeleteModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Container, Row, Spinner, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Consignment: React.FC = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [consignmentData, setConsignmentData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [recordSize, setRecordSize] = useState(10);
  const totalPages = Math.ceil(consignmentData.length / recordSize);
  const apiUrl = process.env.REACT_APP_LOCAL_API_URL!;
  const startIndex = currentPage * recordSize;
  const endIndex = startIndex + recordSize;
  const currentItems = consignmentData.slice(startIndex, endIndex);
  const [showModal, setShowModal] = useState<string | false>(false);


  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function loadData() {
    fetch(apiUrl + "/admin/warehouse/consignment")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setConsignmentData(resp ? resp.data : []);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setisLoading(false);
      });
  }

  const paginateArray = (pageNumber: number) => {
    if (pageNumber >= 0 && pageNumber < totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const deleteStatus = (id: string) => {
    axios
      .delete(apiUrl + `/admin/warehouse/consignment/${id}`)
      .then((response) => {
        loadData();
        // return response.json();
      })
      .catch((error) => {
        console.log(error.message);
      });
    toast.success("Item Deleted Successfully !", {
      position: "top-center",
      theme: "colored",
    });
  };

  return (
    <>
      {showModal && (
        <MyModal
          id={showModal}
          setShowModal={setShowModal}
          action={deleteStatus}
        />
      )}
      <Container fluid style={{ opacity: showModal ? "0.4" : "1" }}>
        <div className="user-content-header py-4">
          <ToastContainer />
        <Row className="mb-2">
          <Col sm="6">
            <h1 className="m-0 text-dark">Consignments</h1>
          </Col>
          <Col sm="6">
            <ol className="breadcrumb float-sm-right justify-content-end">
              <li className="breadcrumb-item">
                <a href="/dashboard">Home</a>
              </li>
              <li className="breadcrumb-item active">Consignments</li>
            </ol>
          </Col>
        </Row>
      </div>

      <div className="content">
        <Row>
          <Col lg="12">
            <div className="card" bg-color="white">
              <div className="card-header bg-white">
                <h3 className="card-title">Consignments</h3>
                <Link to="/consignments/create">
                <Button
                  variant="info"
                  className="user float-right add_role text-white"
                >
                  Add Consignments
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
                            #ID
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Page Title: activate to sort column ascending"
                          >
                            Description
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Position: activate to sort column ascending"
                          >
                            Delevery Address
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Position: activate to sort column ascending"
                          >
                            Name
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Position: activate to sort column ascending"
                          >
                            Contact No
                          </th>

                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Position: activate to sort column ascending"
                          >
                            Location
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Position: activate to sort column ascending"
                          >
                            Assigned Drivers
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Position: activate to sort column ascending"
                          >
                            Total Item
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Position: activate to sort column ascending"
                          >
                            Total Price
                          </th>
                          <th
                            className="sorting"
                            tabIndex={0}
                            aria-controls="DataTables_Table_0"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Position: activate to sort column ascending"
                          >
                            Billing Details
                          </th>
                          <th
                            className="not-exported sorting_disabled"
                            rowSpan={1}
                            colSpan={1}
                            aria-label="Action"
                          >
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-tbody">
                        {currentItems
                          .filter((item) => {
                            return search.toLowerCase() === " "
                              ? item
                              : (item.sDeliveryAddress
                                  ? item.sDeliveryAddress
                                  : ""
                                )
                                  .toLowerCase()
                                  .includes(search);
                          })
                          .map((item, index) => {
                            console.log(item.tCustomer);
                            return (
                              <tr role="row" className="odd" key={index}>
                                <td className="sorting_1">{index + 1}</td>
                                <td>
                                  {item.sDescription
                                    ? item.sDescription
                                    : "----"}
                                </td>
                                <td>
                                  {item.sDeliveryAddress
                                    ? item.sDeliveryAddress
                                    : "----"}
                                </td>
                                <td>
                                  {item.tCustomer && item.tCustomer.sName
                                    ? item.tCustomer.sName
                                    : "----"}
                                </td>
                                <td>
                                  {item.aCustomerNumber
                                    ? item.aCustomerNumber
                                    : "----"}
                                </td>
                                <td>
                                  {item.sGeoLocation
                                    ? item.sGeoLocation
                                    : "----"}
                                </td>
                                <td>
                                  {item.tDriver && item.tDriver.sName
                                    ? item.tDriver.sName
                                    : "----"}
                                </td>
                                <td>
                                  {item.aQuantity ? item.aQuantity : "----"}
                                </td>
                                <td>{item.aPrice ? item.aPrice : "----"}</td>
                                <td>
                                  {item.sBillingDetails
                                    ? item.sBillingDetails
                                    : "----"}
                                </td>
                                <td>
                                  <Link to="/a">
                                  <Button
                                    variant="success"
                                    size="sm"
                                    className=" activeData"                                    
                                  >
                                    <FontAwesomeIcon
                                      icon={faEdit}
                                      color="white"
                                    />{" "}
                                    <span>Edit</span>
                                  </Button>
                                  </Link>
                                  <Button
                                    variant="danger"
                                    size="sm"
                                    className=" activeData ms-1"
                                    onClick={() => deleteStatus(item._id)}
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
                      </tbody>
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
                        {endIndex < consignmentData.length
                          ? endIndex
                          : consignmentData.length}{" "}
                        of {consignmentData.length} entries
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
};
