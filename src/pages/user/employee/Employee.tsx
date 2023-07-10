import React, { useEffect, useState } from "react";
import "./Employee.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Col, Container, Row, Spinner, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { MyModal } from "../../../components/modal/deletemodal/DeleteModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmployeeData from "../../../interface/EmployeeInterface";

export const Employee: React.FC = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setisLoading] = useState(true);
  const [empData, setempData] = useState<EmployeeData[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [recordSize, setRecordSize] = useState(10);
  const totalPages = Math.ceil(empData.length / recordSize);
  const apiUrl = process.env.REACT_APP_LOCAL_API_URL!;
  const navigate = useNavigate();
  const startIndex = currentPage * recordSize;
  const endIndex = startIndex + recordSize;
  const currentItems = empData.slice(startIndex, endIndex);
  const [showModal, setShowModal] = useState<string | false>(false);

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, []);

  function loadData() {
    fetch(apiUrl + "/admin/organization/employee")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setempData(resp?.data ? resp.data : []);
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

  const getEmpType = (arr: any[]) => {
    return arr.map((roleInfo) => roleInfo.sName).join(" ,");
  };

  const updateStatus = async (id: string, bIsActive: boolean) => {
    await axios
      .patch(apiUrl + `/admin/organization/employee/${id}`, {
        data: { bIsActive: !bIsActive },
      })
      .then((res) => {
        loadData();
      });
  };

  const deleteEmployee = async (id: string) => {
    await axios
      .patch(apiUrl + `/admin/organization/employee/${id}`, {
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

  const editEmployee = (id: string) => {
    navigate(`/editemployee/${id}`);
  };

  return (
    <>
    {showModal && (
        <MyModal
          id={showModal}
          setShowModal={setShowModal}
          action={deleteEmployee}
        />
      )}
      <Container fluid style={{ opacity: showModal ? "0.4" : "1" }}>
        <div className="user-content-header py-4">
          <ToastContainer />
            <Row className='mb-2'>
                <Col sm='6'>
                    <h1 className='m-0 text-dark'>Employee</h1>
                </Col>
                <Col sm='6'>
                    <ol className='breadcrumb float-sm-right justify-content-end'>
                        <li className='breadcrumb-item'>
                            <a href='/dashboard'>Home</a>
                        </li>
                        <li className='breadcrumb-item active'>Employee</li>
                    </ol>
                </Col>
            </Row>
        </div>

        <div className='content'>
            <Row>
                <Col lg='12'>
                    <div className='card' bg-color='white'>
                        <div className='card-header bg-white'>
                            <h3 className='card-title'>Employee</h3>
                            <Link to="/user/employee/create">
                                <Button variant="info" className="user float-right add_role text-white">
                                Add Employee
                                </Button>
                            </Link>

                        </div>

                        <div className='card-body'>
                            <div id='DataTables_Table_0_wrapper' className='dataTables_wrapper no-footer'>
                                <div className='card-head'>
                                    <div className='dataTables_length' id='DataTables_Table_0_length'>
                                        <label>
                                            Show{' '}
                                            <select
                                                name='DataTables_Table_0_length'
                                                aria-controls='DataTables_Table_0'
                                                className='table-input'
                                                onChange={(e) => {
                                                    setRecordSize(+e.target.value);
                                                    paginateArray(0);
                                                }}
                                            >
                                                <option value='10'>10</option>
                                                <option value='15'>15</option>
                                                <option value='20'>20</option>
                                                <option value='100'>100</option>
                                            </select>{' '}
                                            entries
                                        </label>
                                    </div>
                                    <div id='DataTables_Table_0_filter' className='dataTables_filter'>
                                        <label>
                                            Search:
                                            <input
                                                type='search'
                                                className='table-input'
                                                placeholder='search name...'
                                                aria-controls='DataTables_Table_0'
                                                onChange={(e) => setSearch(e.target.value)}
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div style={{ overflow: 'auto' }}>
                                    <Table
                                        bordered
                                        id='DataTables_Table_0'
                                        className=' datatable table-striped-blue dataTable no-footer mt-3'
                                        role='grid'
                                        aria-describedby='DataTables_Table_0_info'
                                    >
                                        <thead className='bg-thead'>
                                            <tr role='row'>
                                                <th
                                                    className='not-exported sorting_asc'
                                                    tabIndex={0}
                                                    aria-controls='DataTables_Table_0'
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    aria-sort='ascending'
                                                    aria-label=': activate to sort column descending'
                                                >
                                                    #ID
                                                </th>
                                                <th
                                                    className='sorting'
                                                    tabIndex={0}
                                                    aria-controls='DataTables_Table_0'
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    aria-label='Page Title: activate to sort column ascending'
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    className='sorting'
                                                    tabIndex={0}
                                                    aria-controls='DataTables_Table_0'
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    aria-label='Position: activate to sort column ascending'
                                                >
                                                    Employee Roles
                                                </th>
                                                <th
                                                    className='sorting'
                                                    tabIndex={0}
                                                    aria-controls='DataTables_Table_0'
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    aria-label='Position: activate to sort column ascending'
                                                >
                                                    Email
                                                </th>
                                                <th
                                                    className='sorting'
                                                    tabIndex={0}
                                                    aria-controls='DataTables_Table_0'
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    aria-label='Position: activate to sort column ascending'
                                                >
                                                    Contact No
                                                </th>
                                                <th
                                                    className='sorting'
                                                    tabIndex={0}
                                                    aria-controls='DataTables_Table_0'
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    aria-label='Position: activate to sort column ascending'
                                                >
                                                    Address
                                                </th>
                                                <th
                                                    className='not-exported sorting_disabled'
                                                    rowSpan={1}
                                                    colSpan={1}
                                                    aria-label='Action'
                                                >
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className='bg-tbody'>
                                            {currentItems
                                                .filter((item) => {
                                                    return search.toLowerCase() === ' '
                                                        ? item
                                                        : (item.sName?item.sName:'').toLowerCase().includes(search);
                                                })
                                                .map((item, index) => {
                                                    return (
                                                        <tr role='row' className='odd' key={index}>
                                                            <td className='sorting_1'>{index + 1}</td>
                                                            <td>{item.sName?item.sName:'----'}</td>
                                                            <td>{item.tUserRole?getEmpType(item.tUserRole):'----'}</td>
                                                            <td>{item.sEmail?item.sEmail:'----'}</td>
                                                            <td>{item.aPhoneNo?item.aPhoneNo:'----'}</td>
                                                            <td>{item.sPresentAddress?item.sPresentAddress:'----'}</td>
                                                            <td>
                                                          
                                                            <Button
                                                                    variant={item.bIsActive  ? 'primary':'secondary'}
                                                                    size='sm'
                                                                    className='activeData'                                                                     
                                                                    onClick={()=>updateStatus(item._id,item.bIsActive)} 
                                                                >
                                                                    {item.bIsActive ?<FontAwesomeIcon icon={faCircleCheck}  color='white' className='icon'/> : 
                                                                   <FontAwesomeIcon icon={faCircleXmark} color='white' className='icon' /> }
                  
                                                                    {item.bIsActive ? <span>Active</span> : <span>Inactive</span>}
                                                         </Button>
                                                         <Link to="/adduser">
                                                                <Button
                                                                    variant="success"
                                                                    size="sm"
                                                                    className="activeData"
                                                                    onClick={() => editEmployee(item._id)}
                                                                >
                                                                    <FontAwesomeIcon icon={faEdit} color="white" /> <span>Edit</span>
                                                                </Button>
                                                        </Link>

                                                                <Button
                                                                    variant='danger'
                                                                    size='sm'
                                                                    className=' activeData ms-1'
                                                                    onClick={()=>deleteEmployee(item._id)} 
                                                                >
                                                                    <FontAwesomeIcon icon={faTrash} color='white' />{' '}
                                                                    <span>Delete</span>
                                                                </Button>
                                                            </td>
                                                        </tr>
                                                    );
                                                })}
                                        </tbody>
                                    </Table>
                                    {isLoading?<div className="d-flex justify-content-center align-items-center" style={{height:'20vh'}}>
                                        <Spinner animation="border" variant="primary" />
                                    </div>:null}
                                    <div className='d-flex justify-content-between align-items-center'>
                                        <div
                                            className='dataTables_info'
                                            id='DataTables_Table_0_info '
                                            role='status'
                                            aria-live='polite'
                                        >
                                            Showing {startIndex + 1} to{' '}
                                            {endIndex < empData.length ? endIndex : empData.length} of{' '}
                                            {empData.length} entries
                                        </div>
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
