import React, { useState, useEffect } from "react";
import "./Customer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Container, Row, Spinner, Table } from "react-bootstrap";
import axios from "axios";
import io from "socket.io-client";
import { Socket } from 'socket.io-client';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MyModal } from "../../../components/modal/deletemodal/DeleteModal";

export const Customer: React.FC = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [CustomerData, setCustomerData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [recordSize, setRecordSize] = useState(10);
  const [socket, setSocket] = useState<Socket | null>(null);
  const totalPages = Math.ceil(CustomerData.length / recordSize);
  const apiUrl = process.env.REACT_APP_LOCAL_API_URL;

  const startIndex = currentPage * recordSize;
  const endIndex = startIndex + recordSize;
  const currentItems = CustomerData.slice(startIndex, endIndex);
  const [showModal, setShowModal] = useState<string | false>(false);

  useEffect(() => {
    loadData();
    const newSocket = io("http://192.168.86.175:7000");
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
     // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("customer:approved", (message: string) => {
        loadData();
      });
    }
     // eslint-disable-next-line
  }, [socket]);

  function loadData() {
    fetch(apiUrl + "/admin/customer")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setCustomerData(resp ? resp.data : []);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setisLoading(false);
      });
  }

  const updateStatus = async (id: string, bIsActive: boolean) => {
    await axios.patch(apiUrl + `/admin/customer/${id}`, {
      data: { bIsActive: !bIsActive },
    });
    loadData();
  };

  const approvedStatus = async (element: any, bIsApproved: boolean) => {
    await axios.patch(apiUrl + `/admin/customer/${element._id}`, {
      data: { bIsApproved: !bIsApproved },
    });
    socket?.emit("customer:approved", {
      bIsApproved: !bIsApproved,
      aPhoneNo: element.aPhoneNo,
    });
  };

  const deleteCustomer = async (id: string) => {
    await axios.patch(apiUrl + `/admin/customer/${id}`, {
      data: { bIsDeleted: true },
    });
    loadData();
    toast.success("Item Deleted Successfully !", {
      position: "top-center",
      theme: "colored",
    });
  };

  const paginateArray = (pageNumber: number) => {
    if (pageNumber >= 0 && pageNumber < totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      {showModal && (
        <MyModal
          id={showModal}
          setShowModal={setShowModal}
          action={deleteCustomer}
        />
      )}
      <Container fluid style={{ opacity: showModal ? "0.4" : 1 }}>
        <div className="user-content-header py-4">
          <ToastContainer />
          <Row className="mb-2">
            <Col sm="6">
              <h1 className="m-0 text-dark">Customers</h1>
            </Col>
            <Col sm="6">
              <ol className="breadcrumb float-sm-right justify-content-end">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item active">Customers</li>
              </ol>
            </Col>
          </Row>
        </div>

        <div className="content">
          <Row>
            <Col lg="12">
              <div className="card" bg-color="white">
                <div className="card-header bg-white">
                  <h3 className="card-title">Customers</h3>
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
                            placeholder="search name..."
                            aria-controls="DataTables_Table_0"
                            onChange={(e) => setSearch(e.target.value)}
                          />
                        </label>
                      </div>
                    </div>

                    <div className="of-auto">
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
                              Email
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
                              Billing Address
                            </th>

                            <th
                              className="not-exported sorting_disabled"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Action"
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        { CustomerData.length>0 ? (
                        <tbody className="bg-tbody">
                          {currentItems
                            .filter((item) => {
                              return search.toLowerCase() === " "
                                ? item
                                : (item.sName ? item.sName : "")
                                    .toLowerCase()
                                    .includes(search);
                            })
                            .map((item, index) => {
                              return (
                                <tr role="row" className="odd" key={index}>
                                  <td className="sorting_1">{index + 1}</td>
                                  <td>{item.sName ? item.sName : "----"}</td>
                                  <td>
                                    {item.sEmail ? item.sEmail : "----"}
                                    {item.Email}
                                  </td>
                                  <td>
                                    {item.aPhoneNo ? item.aPhoneNo : "----"}
                                    {item.ContactNo}
                                  </td>
                                    <td>
                                        {item.tAddress.length > 0 && item.tAddress[0].sKey === 0
                                            ? item.tAddress[0].sValue
                                            : "----"}
                                    </td>
                                  <td>
                                    <Button
                                      variant={
                                        item.bIsApproved
                                          ? "success"
                                          : "secondary"
                                      }
                                      size="sm"
                                      className="activeData ms-1"
                                      onClick={() =>
                                        approvedStatus(item, item.bIsApproved)
                                      }
                                    >
                                      {item.bIsApproved ? (
                                        <FontAwesomeIcon
                                          icon={faCircleCheck}
                                          color="white"
                                          className="icon"
                                        />
                                      ) : (
                                        <FontAwesomeIcon
                                          icon={faCircleXmark}
                                          color="white"
                                          className="icon"
                                        />
                                      )}

                                      {item.bIsApproved ? (
                                        <span>Approved</span>
                                      ) : (
                                        <span>Not Approved</span>
                                      )}
                                    </Button>
                                    <Button
                                      variant={
                                        item.bIsActive ? "primary" : "secondary"
                                      }
                                      size="sm"
                                      className="activeData ms-1"
                                      onClick={() =>
                                        updateStatus(item._id, item.bIsActive)
                                      }
                                    >
                                      {item.bIsActive ? (
                                        <FontAwesomeIcon
                                          icon={faCircleCheck}
                                          color="white"
                                          className="icon"
                                        />
                                      ) : (
                                        <FontAwesomeIcon
                                          icon={faCircleXmark}
                                          color="white"
                                          className="icon"
                                        />
                                      )}

                                      {item.bIsActive ? (
                                        <span>Active</span>
                                      ) : (
                                        <span>Inactive</span>
                                      )}
                                    </Button>
                                    <Button
                                      variant="success"
                                      size="sm"
                                      className=" editData ms-1"
                                    >
                                      <FontAwesomeIcon
                                        icon={faEdit}
                                        color="white"
                                      />{" "}
                                      Edit
                                    </Button>
                                    <Button
                                      variant="danger"
                                      size="sm"
                                      className=" deleteUser ms-1"
                                      onClick={() => setShowModal(item._id)}
                                    >
                                      <FontAwesomeIcon
                                        icon={faTrash}
                                        color="white"
                                      />{" "}
                                      Delete
                                    </Button>
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
                          {endIndex < CustomerData.length
                            ? endIndex
                            : CustomerData.length}{" "}
                          of {CustomerData.length} entries
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