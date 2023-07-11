import React, { useState, useEffect, ReactNode } from "react";
import "./Driver.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Container, Row, Spinner, Table } from "react-bootstrap";
import axios from "axios";
import io from "socket.io-client";
import { Socket } from 'socket.io-client';
import { MyModal } from "../../../components/modal/deletemodal/DeleteModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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

export const Driver: React.FC = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState<UserData[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [recordSize, setRecordSize] = useState(10);
  const [socket, setSocket] = useState<Socket | null>(null);
  const apiUrl = process.env.REACT_APP_LOCAL_API_URL;

  const totalPages = Math.ceil(userData.length / recordSize);

  const startIndex = currentPage * recordSize;
  const endIndex = startIndex + recordSize;
  const currentItems = userData.slice(startIndex, endIndex);
  const [showModal, setShowModal] = useState<string | false>(false);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line

    const newSocket = io("http://192.168.86.175:7000");
    setSocket(newSocket);

    // Clean up the socket connection on component unmount
    return () => {
      newSocket.disconnect();
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (socket) {
      // Listen for 'chat message' events from the server
      socket.on("driver:approved", (message: string) => {
        loadData();
      });
    }
    // eslint-disable-next-line
  }, [socket]);

  function loadData() {
    fetch(apiUrl + "/admin/driver")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setUserData(resp?.data ? resp.data : []);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const updateStatus = async (id:string, bIsActive: boolean) => {
    await axios
      .patch(apiUrl + `/admin/driver/${id}`, {
        data: { bIsActive: !bIsActive },
      })
      .then((res) => {
        loadData();
      });
  };

  const deleteUser = async (id: string) => {
    await axios
      .patch(apiUrl + `/admin/driver/${id}`, {
        data: { bIsDeleted: true },
      })
      .then((res) => {
        loadData();
        toast.success("Item Deleted Successfully !", {
          position: "top-center",
          theme: "colored",
        });
      });
  };

  const approvedStatus = async (element: any, bIsApproved:boolean) => {
    await axios
      .patch(apiUrl + `/admin/driver/${element._id}`, {
        data: { bIsApproved: !bIsApproved },
      })
      .then((res) => {
        socket?.emit("driver:approved", {
          bIsApproved: !bIsApproved,
          aPhoneNo: element.aPhoneNo,
        });
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
          action={deleteUser}
        />
      )}
      <Container fluid style={{ opacity: showModal ? "0.4" : "1" }}>
        <div className="user-content-header py-4">
          <ToastContainer />
        <Row className="mb-2">
          <Col sm="6">
            <h1 className="m-0 text-dark">Drivers</h1>
          </Col>
          <Col sm="6">
            <ol className="breadcrumb float-sm-right justify-content-end">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active">Drivers</li>
            </ol>
          </Col>
        </Row>
      </div>

      <div className="content">
        <Row>
          <Col lg="12">
            <div className="card" bg-color="white">
              <div className="card-header bg-white">
                <h3 className="card-title">Drivers</h3>
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
                          placeholder="Search by Address..."
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
                            Address
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
                      {userData.length>0 ? (
                      <tbody className="bg-tbody">
                        {currentItems
                          .filter((item) => {
                            return search.toLowerCase() === " "
                              ? item
                              : (item.sPresentAddress
                                  ? item.sPresentAddress
                                  : ""
                                )
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
                                  {item.sPresentAddress
                                    ? item.sPresentAddress
                                    : "----"}
                                  {item.Address}
                                </td>
                                
                                <td>
                                <Button
                                                                        variant={item.bIsApproved  ? 'success':'secondary'}
                                                                        size='sm'
                                                                        className='activeData ms-1'                                                                     
                                                                        onClick={()=>approvedStatus(item,item.bIsApproved)} 
                                                                    >
                                                                        {item.bIsApproved ?<FontAwesomeIcon icon={faCircleCheck}  color='white' className='icon'/> : 
                                                                       <FontAwesomeIcon icon={faCircleXmark} color='white' className='icon' /> }
                      
                                                                        {item.bIsApproved ? <span>Approved</span> : <span>Not Approved</span>}
                                </Button>
                                <Button
                                                                        variant={item.bIsActive  ? 'primary':'secondary'}
                                                                        size='sm'
                                                                        className='activeData ms-1'                                                                     
                                                                        onClick={()=>updateStatus(item._id,item.bIsActive)} 
                                                                    >
                                                                        {item.bIsActive ?<FontAwesomeIcon icon={faCircleCheck}  color='white' className='icon'/> : 
                                                                       <FontAwesomeIcon icon={faCircleXmark} color='white' className='icon' /> }
                      
                                                                        {item.bIsActive ? <span>Active</span> : <span>Inactive</span>}
                                  </Button>
                                  <Button
                                    variant="success"
                                    size="sm"
                                    className=" activeData ms-1"
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
                                    onClick={()=>deleteUser(item._id)} 
                                    className=" activeData ms-1"
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
                      </tbody>) :isLoading?null: (
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
                        {endIndex < userData.length
                          ? endIndex
                          : userData.length}{" "}
                        of {userData.length} entries
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
