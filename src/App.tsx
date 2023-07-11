import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes, useMatch } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/Header';
import { Main } from './pages/dashboard/Dashboard';
import { Sidebar } from './components/sidebar/Sidebar';
import './index.css';
import { Account } from './pages/account/Account';
import { Bill } from './pages/bill/Bill';
import { Consignment } from './pages/consignment/Consignment';
import { Login } from './pages/login/Login';
import Report from './pages/report/Report';
import { AddNewPage } from './pages/template/addpage/AddPage';
import { Trip } from './pages/trip/Trip';
import { Vehicle } from './pages/vehicle/Vehicle';
import { Inventory } from './pages/inventory/Inventory';
import { useDispatch, useSelector } from 'react-redux';
import {PageList} from './pages/template/pagelist/PageList';
import { AddEmployee } from './pages/user/employee/addemployee/AddEmployee';
import { Customer } from './pages/user/customer/Customer';
import { Driver } from './pages/user/driver/Driver';
import { Employee } from './pages/user/employee/Employee';
import { AddVehicle } from './pages/vehicle/addvehicle/AddVehicle';
import { signinToken, signinUser } from './redux/auth/authSlice';
import { AddConsignment } from './pages/consignment/addconsignment/AddConsignment';
import { ProtectedRoute } from './services/ProtectedRoute';
import './icon.library';
import { RootState } from './redux/store';

function App(): JSX.Element {
  const dispatch = useDispatch();
  const isUserRoute = useMatch("/login");
  const auth = useSelector((state: RootState) => state.auth);
  const [sidebarOpen, setSideBarOpen] = useState<{
    isBtnOpen: boolean;
    currentValue: boolean;
  }>({
    isBtnOpen: true,
    currentValue: true,
  });

  useEffect(() => {
    onInit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onInit = () => {
    if (!auth.user || !auth.token) {
      let localData = JSON.parse(localStorage.getItem("user") || "null");
      let localDataToken = JSON.parse(localStorage.getItem("sToken") || "null");
      if (localData && localDataToken) {
        dispatch(signinUser(localData));
        dispatch(signinToken(localDataToken));
      }
    }
  };

  const handleViewSidebar = () => {
    setSideBarOpen({
      isBtnOpen: !sidebarOpen.isBtnOpen,
      currentValue: !sidebarOpen.currentValue,
    });
  };

  return (
        <div className='app-wrap'>
            <div className='bg-global'></div>

            {!isUserRoute && <Header toggleSidebar={handleViewSidebar} isOpen={sidebarOpen} />}
            <div
                className={
                    !isUserRoute
                        ? sidebarOpen.currentValue && sidebarOpen.isBtnOpen
                            ? 'main-container-withsidebar'
                            : 'main-container-withoutsidebar'
                        : ''
                }
            >
                {!isUserRoute && (
                    <Sidebar isOpen={sidebarOpen} setSideBarOpen={setSideBarOpen} toggleSidebar={handleViewSidebar} />
                )}

                <Routes>
                    <Route path='login' element={<Login />}></Route>
                    <Route path='' element={<Navigate to='/dashboard' replace />}></Route>
                    <Route path='dashboard' element={<ProtectedRoute component={Main}></ProtectedRoute>}></Route>
                    <Route
                        path='accountSettings'             
                        element={<ProtectedRoute component={Account}></ProtectedRoute>}>
                        </Route>                  
                    <Route
                        path='consignments'
                        element={<ProtectedRoute component={Consignment}></ProtectedRoute>}
                    ></Route>
                    <Route
                        path='/consignments/create'
                        element={<ProtectedRoute component={AddConsignment}></ProtectedRoute>}
                    ></Route>
                   <Route
                        path='/account-settings/pagelist'
                        element={<ProtectedRoute component={PageList}></ProtectedRoute>}/> 

                    <Route path='user'>
                        <Route path='driver' element={<ProtectedRoute component={Driver}></ProtectedRoute>} />
                        <Route path='customer' element={<ProtectedRoute component={Customer}></ProtectedRoute>} />
                        <Route path='employee' element={<ProtectedRoute component={Employee}></ProtectedRoute>} />
                    </Route>
                    <Route path='vehicle' element={<ProtectedRoute component={Vehicle}></ProtectedRoute>}></Route>
                    <Route path='trip' element={<ProtectedRoute component={Trip}></ProtectedRoute>}></Route>
                    <Route path='bill' element={<ProtectedRoute component={Bill}></ProtectedRoute>}></Route>
                    <Route path='report' element={<ProtectedRoute component={Report}></ProtectedRoute>}></Route>
                    <Route path='inventory' element={<ProtectedRoute component={Inventory}></ProtectedRoute>}></Route>
                    <Route path='/account-settings/add-page' element={<ProtectedRoute component={AddNewPage}></ProtectedRoute>}></Route>
                    <Route
                        path='/user/employee/create'
                        element={<ProtectedRoute component={AddEmployee}></ProtectedRoute>}
                    ></Route>
                    <Route
                        path='editemployee/:id'
                        element={<ProtectedRoute component={AddEmployee}></ProtectedRoute>}
                    ></Route>
                    <Route path='/vehicle/create' element={<ProtectedRoute component={AddVehicle}></ProtectedRoute>}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;