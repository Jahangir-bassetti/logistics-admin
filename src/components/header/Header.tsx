import React, { useEffect, useRef, useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell } from '@fortawesome/free-regular-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { signOut } from '../../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import HeaderProps from '../../interface/HeaderInterface';

export const Header: React.FC<HeaderProps> = (props) => {
  const [show, setShow] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShow(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  function setLogout(): void {
    dispatch(signOut());
    localStorage.removeItem('user');
    localStorage.removeItem('sToken');
    navigate('/login');
  }

  return (
    <div className='header' ref={menuRef}>
      <div className='header-wraper'>
        <div className='header-left'>
          <div className='logo'>
            <button
              className='menu-icon'
              style={{
                marginLeft: props.isOpen.currentValue && props.isOpen.isBtnOpen ? '15rem' : '4.5rem',
              }}
              onClick={props.toggleSidebar}
            >
              <i className='menuIcon'><MenuIcon /></i>
            </button>
          </div>
        </div>
        <div className='header-right'>
          <button className='noti-icon'>
            <i className='notifi'>
              <FontAwesomeIcon icon={faBell} />
            </i>
            <span className='icon-badge'>12</span>
          </button>
          <div
            className='header-profile'
            onClick={() => {
              setShow(!show);
            }}
          >
            <FontAwesomeIcon icon={faUser} />
          </div>
          <div
            className='header-profile text-danger'
            onClick={() => {
              setLogout();
            }}
          >
            <FontAwesomeIcon icon={faPowerOff} />
          </div>
        </div>
      </div>
    </div>
  );
};
