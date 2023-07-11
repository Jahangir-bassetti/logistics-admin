import React, { useState, useEffect } from 'react';
import './Login.css';
import MailIcon from '@material-ui/icons/Mail';
import LockIcon from '@material-ui/icons/Lock';
import { useSelector, useDispatch } from 'react-redux';
import { signinUser, signinToken } from '../../redux/auth/authSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface User {
  sEmail: string;
  sPassword: string;
}
export const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<User>({
    sEmail: '',
    sPassword: '',
  });
  const auth = useSelector((state: any) => state.auth.value);
  const apiUrl = process.env.REACT_APP_LOCAL_API_URL
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem('user') || 'null');
    let localDataToken = JSON.parse(localStorage.getItem('sToken') || 'null');

    const isAuth =
      (auth && auth.token && auth.user) || (localData && localDataToken)
        ? true
        : false;
    if (isAuth) {
      navigate('/dashboard');
    }
    // eslint-disable-next-line
  }, []);

  const handleLogin = () => {
    setIsLoading(true);
    axios
      .post(apiUrl + '/auth/sign-in', { data: user })
      .then((res) => {
        console.log(res);
        dispatch(signinUser(res.data.data.data));
        dispatch(signinToken(res.data.data.sToken));

        if (res.data.data) localStorage.setItem('user', JSON.stringify(res.data.data));
        if (res.data.sToken) localStorage.setItem('sToken', JSON.stringify(res.data.sToken));
        
        navigate('/dashboard');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Invalid Email Or Password !', {
          position: "top-center",
          theme: "colored",
          });
      })
      .finally(() => setIsLoading(false));
  };

  const inputhandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
        <>
        <ToastContainer />
        <div className='login-container'>
    

            <div className='login-box'>
                <div className='login-title'>
                    <h1>ShipGo</h1>
                </div>
                <p className='login-msg'>Sign in to start your session</p>

                <div className='form-group login-form'>
                    <div className='login-input-group'>
                        <input
                            type='email'
                            placeholder='Email'
                            name='sEmail'
                            required
                            onChange={(e) => inputhandler(e)}
                        />
                        <i className='input-icon'>
                            <MailIcon />
                        </i>
                    </div>
                </div>

                <div className='form-group login-form'>
                    <div className='login-input-group'>
                        <input
                            type='password'
                            placeholder='Password'
                            name='sPassword'
                            required
                            onChange={(e) => inputhandler(e)}
                        />
                        <i className='input-icon'>
                            {' '}
                            <LockIcon />
                        </i>
                    </div>
                </div>

                <div className='form-check'>
                    <div className='input-check'>
                        <label>
                            <input type='checkbox' name='remember' /> Remember Me
                        </label>
                    </div>
                </div>

                <div className='login-button'>
                    <button type='submit' className='btn-submit' onClick={handleLogin}>
                    {isLoading? <Spinner animation="border" variant="light" />:<span>Sign In</span>}
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};
