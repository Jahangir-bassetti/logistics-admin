import React, { useEffect, useState } from 'react';
import './Report.css';
import { MyModal } from '../../components/modal/deletemodal/DeleteModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { Button, Col, Container, Row, Spinner, Table, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Report: React.FC = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [reportData, setreportData] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [recordSize, setRecordSize] = useState(10);
  const totalPages = Math.ceil(reportData.length / recordSize);
  // const apiUrl = process.env.REACT_APP_LOCAL_API_URL!;
  const startIndex = currentPage * recordSize;
  const endIndex = startIndex + recordSize;
  const currentItems = reportData.slice(startIndex, endIndex);
  const [showModal, setShowModal] = useState<string | false>(false);

  useEffect(() => {
    setreportData(data);
    setisLoading(false);
  }, []);

  const data = [
    {
      "Year": "2023",
      "Nominal_GDP": "3.08",
      "Inventary_cost": "7858",
      "Transportation_cost": "8373",
      "Administrative_cost": "678347",
      "Total_logistics_cost": "748785678",
      "Logistics_GDP": "34.05"
    },
    {
      "Year": "2023",
      "Nominal_GDP": "3.08",
      "Inventary_cost": "7858",
      "Transportation_cost": "8373",
      "Administrative_cost": "678347",
      "Total_logistics_cost": "748785678",
      "Logistics_GDP": "34.05"
    },
    {
      "Year": "2023",
      "Nominal_GDP": "3.08",
      "Inventary_cost": "7858",
      "Transportation_cost": "8373",
      "Administrative_cost": "678347",
      "Total_logistics_cost": "748785678",
      "Logistics_GDP": "34.05"
    },
    {
      "Year": "2023",
      "Nominal_GDP": "3.08",
      "Inventary_cost": "7858",
      "Transportation_cost": "8373",
      "Administrative_cost": "678347",
      "Total_logistics_cost": "748785678",
      "Logistics_GDP": "34.05"
    },
    {
      "Year": "2023",
      "Nominal_GDP": "3.08",
      "Inventary_cost": "7858",
      "Transportation_cost": "8373",
      "Administrative_cost": "678347",
      "Total_logistics_cost": "748785678",
      "Logistics_GDP": "34.05"
    },
    {
      "Year": "2023",
      "Nominal_GDP": "3.08",
      "Inventary_cost": "7858",
      "Transportation_cost": "8373",
      "Administrative_cost": "678347",
      "Total_logistics_cost": "748785678",
      "Logistics_GDP": "34.05"
    },
    {
      "Year": "2023",
      "Nominal_GDP": "3.08",
      "Inventary_cost": "7858",
      "Transportation_cost": "8373",
      "Administrative_cost": "678347",
      "Total_logistics_cost": "748785678",
      "Logistics_GDP": "34.05"
    },
    {
      "Year": "2023",
      "Nominal_GDP": "3.08",
      "Inventary_cost": "7858",
      "Transportation_cost": "8373",
      "Administrative_cost": "678347",
      "Total_logistics_cost": "748785678",
      "Logistics_GDP": "34.05"
    },
    {
      "Year": "2023",
      "Nominal_GDP": "3.08",
      "Inventary_cost": "7858",
      "Transportation_cost": "8373",
      "Administrative_cost": "678347",
      "Total_logistics_cost": "748785678",
      "Logistics_GDP": "34.05"
    },
    {
      "Year": "2023",
      "Nominal_GDP": "3.08",
      "Inventary_cost": "7858",
      "Transportation_cost": "8373",
      "Administrative_cost": "678347",
      "Total_logistics_cost": "748785678",
      "Logistics_GDP": "34.05"
    },
    {
      "Year": "2023",
      "Nominal_GDP": "3.08",
      "Inventary_cost": "7858",
      "Transportation_cost": "8373",
      "Administrative_cost": "678347",
      "Total_logistics_cost": "748785678",
      "Logistics_GDP": "34.05"
    },
  ]

  const paginateArray = (pageNumber: number) => {
    if (pageNumber >= 0 && pageNumber < totalPages) {
      setCurrentPage(pageNumber);
    }
  }

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
              <h1 className="m-0 text-dark">Reports</h1>
            </Col>
            <Col sm="6">
              <ol className="breadcrumb float-sm-right justify-content-end">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item active">Bills</li>
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
                      Add Reports
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
                              Year 
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="DataTables_Table_0"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Page Title: activate to sort column ascending"
                            >
                              Nominal GDP ($T)
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="DataTables_Table_0"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Position: activate to sort column ascending"
                            >
                              Inventary Cost
                            </th>

                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="DataTables_Table_0"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Position: activate to sort column ascending"
                            >
                              Transportation Cost
                            </th>

                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="DataTables_Table_0"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Position: activate to sort column ascending"
                            >
                              Administrative Cost
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="DataTables_Table_0"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Position: activate to sort column ascending"
                            >
                              Total Logistics Cost
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="DataTables_Table_0"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Position: activate to sort column ascending"
                            >
                              Logistics % of GDP
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
                        {reportData.length > 0 ? (
                          <tbody className="bg-tbody">
                            {currentItems
                              .filter((item) => {
                                return search.toLowerCase() === " "
                                  ? item
                                  : (item.Year ? item.Year : "")
                                    .toLowerCase()
                                    .includes(search);
                              })
                              .map((item, index) => {
                                return (
                                  <tr role="row" className="odd" key={index}>
                                    {/* <td className="sorting_1">{index + 1}</td> */}
                                    <td>{item.Year ? item.Year : "------"}</td>
                                    <td>{item.Nominal_GDP? item.Nominal_GDP: "----"}</td>
                                    <td>
                                      {item.Inventary_cost
                                        ? item.Inventary_cost
                                        : "----"}
                                    </td>
                                    <td>
                                      {item.Transportation_cost? item.Transportation_cost: "----"}
                                    </td>
                                    <td>
                                      {item.Administrative_cost? item.Administrative_cost: "----"}
                                    </td>
                                    <td>{item.Total_logistics_cost ? item.Total_logistics_cost : "----"}</td>
                                    <td>{item.Logistics_GDP ? item.Logistics_GDP : "----"}</td>

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
                          {endIndex < reportData.length
                            ? endIndex
                            : reportData.length}{" "}
                          of {reportData.length} entries
                        </div>
                        {reportData.length > 0 ? (
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

export default Report;
