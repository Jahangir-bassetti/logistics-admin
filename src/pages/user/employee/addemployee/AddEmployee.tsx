import React, { useState, useEffect, ChangeEvent } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { EmployeeDetails, ErrorDetails, UserGroup, UserRole, ManageAccess, Branch, Department, Designation } from '../../../../interface/AddEmployeeInterface';

export const AddEmployee: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<ErrorDetails>({
    email: '',
    password: '',
    required: '',
  });
  const [details, setDetails] = useState<EmployeeDetails>({
    sName: '',
    sEmail: '',
    aPhoneNo: '',
    sPassword: '',
    eGender: '',
    dDob: '',
    sPresentAddress: '',
    tUserRole: '',
    tUserGroup: '',
    tManageAccess: '',
    tBranch: '',
    tDeptName: '',
    tDesignation: '',
  });
  const [userRoleList, setUserRoleList] = useState<UserRole[]>([]);
  const [userGroupList, setUserGroupList] = useState<UserGroup[]>([]);
  const [manageAccessList, setManageAccessList] = useState<ManageAccess[]>([]);
  const [branchList, setBranchList] = useState<Branch[]>([]);
  const [deptNameList, setDeptNameList] = useState<Department[]>([]);
  const [designationList, setDesignationList] = useState<Designation[]>([]);
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_LOCAL_API_URL;

  useEffect(() => {
    loadInitData();
  }, []);

    function checkEmail(){
        if(!( /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(details.sEmail))){
            setError({...error,email: "Invalid email"})
        }else{
            setError({...error,email: ""})
        }
    }

    function checkPassword(){
        if(!( /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/.test(details.sPassword))){
            setError({...error,password: "Password must have 1 capital letter, 1 small letter, 1 special character and 1 number. Also it's must have 8 character."})
        }else{
            setError({...error,password: ""})
        }
    }

    function checkRequired() {
        if(!(details.sName)){
            setError({...error,required: "This field is required."})
        }else{
            setError({...error,required: ""})
        }
    }

    function loadInitData(){

        let loadUserRole = fetch(apiUrl+"/admin/organization/user-role",{
            method: "GET",
            headers: {"content-type": "application/json"},
           })
           .then((res) => {
            return res.json();
        })
           .then((res)=>{
            setUserRoleList(res.data?res.data:[]);
           }).catch((err)=>{
            console.log(err.message);
           })
           
           let loadUserGroup = fetch(apiUrl+"/admin/organization/user-group",{
            method: "GET",
            headers: {"content-type": "application/json"},
           })
           .then((res) => {
            return res.json();
        })
           .then((res)=>{
            setUserGroupList(res.data?res.data:[]);
           }).catch((err)=>{
            console.log(err.message);
           })
           
           let loadManageAccess = fetch(apiUrl+"/admin/organization/manage-access",{
            method: "GET",
            headers: {"content-type": "application/json"},
           })
           .then((res) => {
            return res.json();
        }).then((res)=>{
            setManageAccessList(res.data?res.data:[]);
           }).catch((err)=>{
            console.log(err.message);
           })
           
           let loadBranch = fetch(apiUrl+"/admin/organization/branch",{
            method: "GET",
            headers: {"content-type": "application/json"},
           })
           .then((res) => {
            return res.json();
        }).then((res)=>{
            setBranchList(res.data?res.data:[]);
           }).catch((err)=>{
            console.log(err.message);
           })

           let loadDept = fetch(apiUrl+"/admin/organization/department",{
            method: "GET",
            headers: {"content-type": "application/json"},
           })
           .then((res) => {
            return res.json();
        }).then((res)=>{
            setDeptNameList(res.data?res.data:[]);
           }).catch((err)=>{
            console.log(err.message);
           })

           let loadDesigntion = fetch(apiUrl+"/admin/organization/designation",{
            method: "GET",
            headers: {"content-type": "application/json"},
           })
           .then((res) => {
            return res.json();
        }).then((res)=>{
            setDesignationList(res.data?res.data:[]);
           }).catch((err)=>{
            console.log(err.message);
           })
           
        Promise.all([loadUserRole, loadUserGroup, loadManageAccess,loadDesigntion,loadDept,loadBranch])
        .catch((reason) => {
            console.error(reason);
        }).finally(() => setIsLoading(false));
        ; 
           
    }

    const inputhandler = async (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLTextAreaElement>) => {
       
        setDetails({ ...details, [e.target.name]: e.target.value });
        
    };
 
    function isDataNotFilled(){
       return !(details.sName &&
                     details.sEmail &&
                      details.aPhoneNo && 
                      details.sPassword && 
                      details.dDob && 
                      details.eGender && 
                      details.sPresentAddress && 
                      details.tUserRole  && 
                      details.tManageAccess&& 
                      details.tBranch  && 
                      details.tDesignation
                      &&error.email===''&&error.password===''
                      &&error.required===''
                      )
      
}

   
   const handlesubmit=(e: { preventDefault: () => void; })=>{

    e.preventDefault();

    const userdata={    
        
            data: {
              sName: details.sName,
              sEmail: details.sEmail,
              aPhoneNo: details.aPhoneNo,
              sPassword: details.sPassword,
              eGender: details.eGender,
              dDob: details.dDob,
              sPresentAddress: details.sPresentAddress,
              tUserRole: details.tUserRole,
              tUserGroup: details.tUserGroup,
              tManageAccess: details.tManageAccess,
              tBranch: details.tBranch,
              tDeptName: details.tDeptName,
              tDesignation: details.tDesignation
            }
          
    }

    console.log(userdata);

    
    axios.post(apiUrl + "/admin/organization/employee", userdata)
    .then((res) => {
      console.log(res);
      navigate("/user/employee");
    })
    .catch((err) => {
      // console.log(err);
      toast.error(err.response.data.message,{
          position: "top-center",
          theme: "colored",
      });
    });
   };

   return (
    <>
    {isLoading?<div className='bg-loader'>
    <Spinner animation="border" variant="primary" />
    </div>:null}
        <div className="mx-2 " >
          <div className="user-content-header py-4">
    <ToastContainer/>
        <Row className="mb-2">
          <Col sm="6">
            <h1 className="m-0 text-dark">Employee</h1>
          </Col>
          
          <Col sm="6">
            <ol className="breadcrumb float-sm-right justify-content-end">
            <li className="breadcrumb-item">
                <Link to="dashboard">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/user/employee">Employee</Link>
              </li>
              <li className="breadcrumb-item active">Employee</li>
            </ol>
          </Col>
        </Row>
      </div>
            <Container fluid className='main-container bg-white pb-4' >
                <Row className='title-row'>
                    <p>Add Employee</p>
                </Row>
                

                <Row className='form-group'>
                    <Col className='form-fields op'>
                        <p>Name</p>
                        <input name='sName'
                            required
                            onBlur={()=>checkRequired()}
                            onChange={(e) => inputhandler(e)} placeholder='Enter Name' className='new-page-input' type='text' />
                            <span className='danger-warning'>{error.required}</span>
                    </Col>
                </Row>
                <Row className='form-group'>
                    <Col className='form-fields op'>
                        <p>Email</p>
                        
                        <input name='sEmail' required onBlur={()=>checkEmail()} onChange={(e) => inputhandler(e)}  placeholder='Enter Email' className='new-page-input' type='email' />
                        <span className='danger-warning'>{error.email}</span>
                    </Col>
                </Row>
                <Row className='form-group'>
                    <Col className='form-fields op'>
                        <p>Contact No</p>
                        
                        <input name='aPhoneNo' required onChange={(e) => inputhandler(e)} placeholder='Enter Phone' className='new-page-input' type='number' />
                    </Col>
                </Row>
                <Row className='form-group'>
                    <Col className='form-fields op'>
                        <p>Password</p>
                        
                        <input onBlur={()=>checkPassword()} name="sPassword" onChange={(e) => inputhandler(e)} placeholder='Enter Password' className='new-page-input' type='password'/>
                        <span className='danger-warning'>{error.password}</span>
                    </Col>
                </Row>
                <Row className='form-group'>
                    <Col className='form-fields op'>
                        <p>Date of Birth</p>
                        
                        <input name="dDob" required onChange={(e) => inputhandler(e)} placeholder='Enter Date of Birth' className='new-page-input' type='date'/>
                    </Col>
                </Row>
                <Row className='form-group'>
                    <Col className='form-fields op'>
                        <p>Gender</p>
                        
                        <select name="eGender" required value={details.eGender?details.eGender:""} onChange={(e) => inputhandler(e)} placeholder='Enter Gender' className='new-page-input'>
                            <option value={""}>Select any option</option>
                            <option value={"MALE"}>MALE</option>
                            <option value={"FEMALE"}>FEMALE</option>
                            <option value={"OTHERS"}>OTHERS</option>
                        </select>
                    </Col>
                </Row>

                <Row className='form-group'>
                    <Col className='form-fields op'>
                        <p>Present Address</p>
                        
                        <textarea
                        name="sPresentAddress" required onChange={(e) => inputhandler(e)}
                            className='page_meta_desc new-page-textarea'
                            // name='page_meta_desc'
                            cols={50}
                            rows={10}
                        ></textarea>
                    </Col>
                </Row>

                <Row className='form-group'>
                    <Col className='form-fields op'>
                        <p>Employee Role</p>
                        
                        <select name="tUserRole" required value={details.tUserRole?details.tUserRole:""}  onChange={(e) => inputhandler(e)} className='new-page-input'>
                            <option value={''} disabled>Select any option</option>
                            {userRoleList.map((value,index)=><option key={index} value={value._id}>{value.sName}</option>)}
                        </select>
                    </Col>
                </Row>
                <Row className='form-group'>
                    <Col className='form-fields '>
                        <p>Employee Group</p>
                        <select name="tUserGroup" value={details.tUserGroup?details.tUserGroup:""}  onChange={(e) => inputhandler(e)} className='new-page-input'>
                        <option value={''} disabled>Select any option</option>

                            {userGroupList.map((value,index)=><option key={index} value={value._id}>{value.sName}</option>)}
                        </select>
                    </Col>
                </Row>
                <Row className='form-group'>
                    <Col className='form-fields op'>
                        <p>Manage Access</p>
                        
                        <select name="tManageAccess" required value={details.tManageAccess?details.tManageAccess:""} onChange={(e) => inputhandler(e)}  className='new-page-input'>
                        <option value={''} disabled>Select any option</option>

                            {manageAccessList.map((value,index)=><option key={index} value={value._id}>{value.sName}</option>)}
                        </select>
                    </Col>
                </Row>
                <Row className='form-group'>
                    <Col className='form-fields op'>
                        <p>Branch</p>
                        
                        <select name="tBranch" required value={details.tBranch?details.tBranch:""}  onChange={(e) => inputhandler(e)} placeholder='Enter Branch' className='new-page-input'>
                        <option value={''}  disabled>Select any option</option>

                            {branchList.map((value,index)=><option key={index} value={value._id}>{value.sName}</option>)}
                        </select>
                    </Col>
                </Row>
                <Row className='form-group'>
                    <Col className='form-fields'>
                        <p>Department</p>
                        <select name="tDeptName"  value={details.tDeptName?details.tDeptName:""} onChange={(e) => inputhandler(e)} placeholder='Enter Department' className='new-page-input'>
                        <option value={''}  disabled>Select any option</option>

                            {deptNameList.map((value,index)=><option key={index} value={value._id}>{value.sName}</option>)}
                        </select>
                    </Col>
                </Row>
                <Row className='form-group'>
                    <Col className='form-fields op'>
                        <p>Designation</p>
                        
                        <select name="tDesignation" required value={details.tDesignation?details.tDesignation:""}  onChange={(e) => inputhandler(e)} placeholder='Enter Designation' className='new-page-input'>
                        <option value={''}  disabled>Select any option</option>

                            {designationList.map((value,index)=><option key={index} value={value._id}>{value.sName}</option>)}
                        </select>
                    </Col>
                </Row>
              
                
                </Container>
                <div className="card-footer text-center mb-3">
                  
                  <button className="btn ripple btn-primary btnDataSave" name="btnDataSave" disabled={isDataNotFilled()} onClick={handlesubmit}> Add  Employee </button>
                </div>
        </div>
    </>

  )
}
