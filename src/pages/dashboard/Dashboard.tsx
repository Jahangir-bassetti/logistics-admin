import React from 'react';
import './Dashboard.css';
import users from '../../assets/images/users.png';
import suppliers from '../../assets/images/suppliers.png';
import vendors from '../../assets/images/vendors.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
export const Main: React.FC = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row mt-4'>
                    <div className='col-lg-4 col-6 my-2'>
                        <div className='small-box box'>
                            <div className='inner'>
                                <h3>2</h3>
                                <p>Subscribers</p>
                            </div>
                            <div className='icon'>
                                <img
                                    src={users}
                                    // style={{color: "#0e76bc !important"}}
                                    alt='Ic'
                                />
                            </div>
                            <a href='/' className='small-box-footer'>
                                {' '}
                                More info <FontAwesomeIcon icon={faArrowAltCircleRight} />
                            </a>
                        </div>
                    </div>
                    <div className='col-lg-4 col-6 my-2'>
                        <div className='small-box box'>
                            <div className='inner'>
                                <h3> $477.59</h3>
                                <p>Total Subscription Earnings</p>
                            </div>
                            <div className='icon'>
                                <img
                                    src={users}
                                    alt='Ic'
                                />
                            </div>
                            <a href='/' className='small-box-footer'>
                                {' '}
                                More info <FontAwesomeIcon icon={faArrowAltCircleRight} />
                            </a>
                        </div>
                    </div>

                    <div className='col-lg-4 col-6 my-2'>
                        <div className='small-box box'>
                            <div className='inner'>
                                <h3> $390.00</h3>
                                <p>Total Advertisement Earnings</p>
                            </div>
                            <div className='icon'>
                                <img
                                     src={users}
                                    alt='Ic'
                                />
                            </div>
                            <a href='/' className='small-box-footer'>
                                {' '}
                                More info <FontAwesomeIcon icon={faArrowAltCircleRight} />
                            </a>
                        </div>
                    </div>

                    <div className='col-lg-4 col-6 my-2'>
                        <div className='small-box box'>
                            <div className='inner'>
                                <h3>5</h3>
                                <p>Suppliers</p>
                            </div>
                            <div className='icon'>
                                <img
                                     src={suppliers}
                                    alt='Ic'
                                />
                            </div>
                            <a href='/' className='small-box-footer'>
                                {' '}
                                More info <FontAwesomeIcon icon={faArrowAltCircleRight} />
                            </a>
                        </div>
                    </div>

                    <div className='col-lg-4 col-6 my-2'>
                        <div className='small-box box'>
                            <div className='inner'>
                                <h3>1</h3>
                                <p>Brands</p>
                            </div>
                            <div className='icon'>
                                <img
                                   src={vendors}
                                    alt='Ic'
                                />
                            </div>
                            <a href='/' className='small-box-footer'>
                                {' '}
                                More info <FontAwesomeIcon icon={faArrowAltCircleRight} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
