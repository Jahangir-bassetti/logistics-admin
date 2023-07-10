import React from 'react';
import './PageList.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export const PageList: React.FC = () => {
  return (
    <Container fluid>
      <div className="content-header py-4">
        <Row className="mb-2">
          <Col sm="6">
            <h1 className="m-0 text-dark">Pages</h1>
          </Col>
          <Col sm="6">
            <ol className="breadcrumb float-sm-right justify-content-end">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active">Pages</li>
            </ol>
          </Col>
        </Row>
      </div>

      <div className="content">
        <Row>
          <Col lg="12">
            <div className="card" bg-color="white">
              <div className="card-header bg-white">
                <h3 className="card-title">Pages</h3>
                <Button variant="info" className="float-right add_role text-white">
                  <Link to="/account-settings/add-page" style={{ color: 'white' }}>Add Page</Link>
                </Button>
              </div>

              <div className="card-body">
                <div id="DataTables_Table_0_wrapper" className="dataTables_wrapper no-footer">
                  <div className="card-head">
                    <div className="dataTables_length" id="DataTables_Table_0_length">
                      <label>
                        Show{" "}
                        <select
                          name="DataTables_Table_0_length"
                          aria-controls="DataTables_Table_0"
                          className="table-input"
                        >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>{" "}
                        entries
                      </label>
                    </div>
                    <div id="DataTables_Table_0_filter" className="dataTables_filter">
                      <label>
                        Search:
                        <input
                          type="search"
                          className="table-input"
                          placeholder=""
                          aria-controls="DataTables_Table_0"
                        />
                      </label>
                    </div>
                  </div>

                  <Table
                    bordered
                    id="DataTables_Table_0"
                    className="datatable table-striped-blue dataTable no-footer mt-3"
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
                        ></th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="DataTables_Table_0"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Page Title: activate to sort column ascending"
                        >
                          Page Title
                        </th>
                        <th
                          className="sorting"
                          tabIndex={0}
                          aria-controls="DataTables_Table_0"
                          rowSpan={1}
                          colSpan={1}
                          aria-label="Position: activate to sort column ascending"
                        >
                          Position
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
                    <tbody className="bg-tbody">
                      <tr role="row" className="odd">
                        <td className="sorting_1">1</td>
                        <td>TEST1</td>
                        <td>Top</td>
                        <td>
                          <Button variant="success" size="sm" className="editData">
                            <FontAwesomeIcon icon={faEdit} color="white" /> Edit
                          </Button>
                          <Button variant="danger" size="sm" className="deleteUser ms-1">
                            <FontAwesomeIcon icon={faTrash} color="white" /> Delete
                          </Button>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td className="sorting_1">2</td>
                        <td>Terms And Condition TEST1</td>
                        <td>Top</td>
                        <td>
                          <Button variant="success" size="sm" className="editData">
                            <FontAwesomeIcon icon={faEdit} color="white" /> Edit
                          </Button>
                          <Button variant="danger" size="sm" className="deleteUser ms-1">
                            <FontAwesomeIcon icon={faTrash} color="white" /> Delete
                          </Button>
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td className="sorting_1">3</td>
                        <td>Privacy Policy TEST1</td>
                        <td>Top</td>
                        <td>
                          <Button variant="success" size="sm" className="editData">
                            <FontAwesomeIcon icon={faEdit} color="white" /> Edit
                          </Button>
                          <Button variant="danger" size="sm" className="deleteUser ms-1">
                            <FontAwesomeIcon icon={faTrash} color="white" /> Delete
                          </Button>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td className="sorting_1">4</td>
                        <td>Home</td>
                        <td>Top</td>
                        <td>
                          <Button variant="success" size="sm" className="editData">
                            <FontAwesomeIcon icon={faEdit} color="white" /> Edit
                          </Button>
                          <Button variant="danger" size="sm" className="deleteUser ms-1">
                            <FontAwesomeIcon icon={faTrash} color="white" /> Delete
                          </Button>
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td className="sorting_1">5</td>
                        <td>About Us TEST</td>
                        <td>Top</td>
                        <td>
                          <Button variant="success" size="sm" className="editData">
                            <FontAwesomeIcon icon={faEdit} color="white" /> Edit
                          </Button>
                          <Button variant="danger" size="sm" className="deleteUser ms-1">
                            <FontAwesomeIcon icon={faTrash} color="white" /> Delete
                          </Button>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td className="sorting_1">6</td>
                        <td>Contact Us</td>
                        <td>Top</td>
                        <td>
                          <Button variant="success" size="sm" className="editData">
                            <FontAwesomeIcon icon={faEdit} color="white" /> Edit
                          </Button>
                          <Button variant="danger" size="sm" className="deleteUser ms-1">
                            <FontAwesomeIcon icon={faTrash} color="white" /> Delete
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <div className="d-flex justify-content-between align-items-center">
                    <div
                      className="dataTables_info"
                      id="DataTables_Table_0_info "
                      role="status"
                      aria-live="polite"
                    >
                      Showing 1 to 6 of 6 entries
                    </div>
                    <div
                      className="dataTables_paginate paging_simple_numbers"
                      id="DataTables_Table_0_paginate"
                    >
                      <Button
                        className="paginate_button previous disabled"
                        aria-controls="DataTables_Table_0"
                        data-dt-idx="0"
                        tabIndex={-1}
                        id="DataTables_Table_0_previous"
                      >
                        Previous
                      </Button>
                      <span>
                        <Button
                          className="paginate_button-current "
                          aria-controls="DataTables_Table_0"
                          data-dt-idx="1"
                          tabIndex={0}
                        >
                          1
                        </Button>
                      </span>
                      <Button
                        className="paginate_button next disabled"
                        aria-controls="DataTables_Table_0"
                        data-dt-idx="2"
                        tabIndex={-1}
                        id="DataTables_Table_0_next"
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
