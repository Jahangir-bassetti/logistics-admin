import React, { useEffect, useState } from 'react';
import './Vehicle.css';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { MyModal } from '../../components/modal/deletemodal/DeleteModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

interface VehicleData {
  sPresentAddress: any;
  _id: string;
  sRegNo: string;
  sName: string;
  sModel: string;
  sCompany: string;
  aCapacity: string;
}

export const Vehicle: React.FC = () => {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [vehicleData, setVehicleData] = useState<VehicleData[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [recordSize, setRecordSize] = useState(10);
  const apiUrl = process.env.REACT_APP_LOCAL_API_URL;
  const totalPages = Math.ceil(vehicleData.length / recordSize);
  const [showModal, setShowModal] = useState<string | false>(false);

  function loadData() {
    fetch(apiUrl + '/admin/driver/vehicle')
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setVehicleData(resp?.data ? resp.data : []);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, []);

  const vehicleArray = (pageNumber: number) => {
    if (pageNumber >= 0 && pageNumber < totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const startIndex = currentPage * recordSize;
  const endIndex = startIndex + recordSize;
  const currentItems = vehicleData.slice(startIndex, endIndex);

  const deleteVehicle = async (id: string) => {
    await axios
      .patch(apiUrl + `/admin/organization/vehicle/${id}`, {
        data: { bIsDeleted: true },
      })
      .then((res) => {
        loadData();
        toast.success('Item Deleted Successfully !', {
          position: 'top-center',
          theme: 'colored',
        });
      });
  };

  return (
    <>
      {showModal && (
        <MyModal
          id={showModal}
          setShowModal={setShowModal}
          action={deleteVehicle}
        />
      )}
      <Container fluid style={{ opacity: showModal ? '0.4' : '1' }}>
        <div className="user-content-header py-4">
          <ToastContainer />
          <Row className="mb-2">
            <Col sm="6">
              <h1 className="m-0 text-dark">Vehicles</h1>
            </Col>
            <Col sm="6">
              <ol className="breadcrumb float-sm-right justify-content-end">
                <li className="breadcrumb-item">
                  <Link to="/dashboard">Home</Link>
                </li>
                <li className="breadcrumb-item active">Vehicles</li>
              </ol>
            </Col>
          </Row>
        </div>

    <div className="content">
      <Row >
        <Col lg="12">
          <div className="card" bg-color="white">
            <div className="card-header bg-white">
              <h3 className="card-title">Vehicles</h3>
              <Link to='/vehicle/create'>
              <Button  variant="info"
                className="user float-right add_role text-white"
               
              >
                Add Vehicles
                  
                
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
                      onChange={(e)=>{
                        setRecordSize(+e.target.value);vehicleArray(0)
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
                      onChange={(e)=>setSearch(e.target.value)}
                    />
                  </label>
                </div>
                </div>

             
                <div style={{overflow:'auto'}}>
                <Table
                bordered  
                  id="DataTables_Table_0"
                  className=" datatable table-striped-blue dataTable no-footer mt-3"
                  role="grid"
                  aria-describedby="DataTables_Table_0_info"
                >
                  <thead  className="bg-thead">
                    <tr role="row">
                      <th
                        className="not-exported sorting_asc"
                        tabIndex={0}
                        aria-controls="DataTables_Table_0"
                        rowSpan={1}
                        colSpan={1}
                        aria-sort="ascending"
                        aria-label=": activate to sort column descending"
                       
                      >#ID</th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="DataTables_Table_0"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Page Title: activate to sort column ascending"
                      >
                        Registration No.
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="DataTables_Table_0"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Position: activate to sort column ascending"
                      >
                       Vehicle Name
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="DataTables_Table_0"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Position: activate to sort column ascending"
                      >
                       Vehicle Model
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="DataTables_Table_0"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Position: activate to sort column ascending"
                      >
                      Company Name
                      </th>

                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="DataTables_Table_0"
                        rowSpan={1}
                        colSpan={1}
                        aria-label="Position: activate to sort column ascending"
                      >
                      Capacity(unit)
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
                  { vehicleData.length>0 ? (
                  <tbody className="bg-tbody">
                    {
                      currentItems.filter((item)=>{
                        return search.toLowerCase() === ' '
                        ? item
                        : (item.sPresentAddress?item.sPresentAddress:'').toLowerCase().includes(search);
                      }).map((item,index) =>{

                     return(
                        <tr role="row" className="odd" key={index}>
                        <td className="sorting_1">{index}</td>
                        <td>{item.sRegNo?item.sRegNo:'----'}</td>
                        <td>{item.sName?item.sName:'----'}</td>
                        <td>{item.sModel?item.sModel:'----'}</td>
                        <td>{item.sCompany?item.sCompany:'----'}</td>
                        <td>{item.aCapacity?item.aCapacity:'----'}</td>
                        <td>
                          <div className='d-flex'>
                          <Button  variant="success"
                          size="sm"
                            className=" editData d-flex"
                          >
                            <FontAwesomeIcon icon={faEdit} color="white"/><span className='ms-1 action-btn-txt'>Edit</span> 
                          </Button>
                          <Button variant="danger"
                          size="sm"
                          className=" deleteUser ms-1 d-flex align-items-center" 
                          onClick={()=>deleteVehicle(item._id)} 
                          >
                            <FontAwesomeIcon icon={faTrash} color="white"/> <span className='ms-1 action-btn-txt'>Delete</span> 
                          </Button>                            
                          </div>

                        </td>
                      </tr>)
                       })
                      }
                  </tbody>):isLoading?null:(
                      <tbody className="bg-tbody">
                      <tr  style={{height: '10rem'}} className="notfound"><th colSpan={6}>No Records found</th></tr>
                     </tbody>
                  )}
                </Table></div>
                {isLoading?<div className="d-flex justify-content-center align-items-center" style={{height:'20vh'}}>
                      <Spinner animation="border" variant="primary" />
                </div>:null}
                <div className="d-flex justify-content-between align-items-center">
                <div
                  className="dataTables_info"
                  id="DataTables_Table_0_info "
                  role="status"
                  aria-live="polite">
                  Showing {startIndex+1} to {endIndex<vehicleData.length?endIndex:vehicleData.length} of {vehicleData.length} entries
                </div>
                <div
                  className="dataTables_paginate paging_simple_numbers"
                  id="DataTables_Table_0_paginate"
                >
                  <Button
                    className="paginate_button previous "
                    aria-controls="DataTables_Table_0"
                    data-dt-idx={0}
                    tabIndex={-1}
                    id="DataTables_Table_0_previous"
                    onClick={()=>{
                      vehicleArray(currentPage-1)
                    }}
                    disabled={currentPage ===0}
                  >
                    Previous
                  </Button>
                  <span>
                    <Button
                    
                      className="paginate_button-current ms-2"
                      aria-controls="DataTables_Table_0"
                      data-dt-idx={1}
                      tabIndex={0}
                    >
                      {currentPage+1}
                    </Button>
                  </span>
                  <Button
                    className="paginate_button next ms-2"
                    aria-controls="DataTables_Table_0"
                    data-dt-idx="2"
                    tabIndex={-1}
                    id="DataTables_Table_0_next"
                    onClick={()=>{vehicleArray(currentPage+1)}}
                    disabled={currentPage===totalPages-1}
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
  </>
  )
}
