import Button from 'react-bootstrap/Button';
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';

const Header = () => {
    return (
        <div className="header-container">
            <NavMenu></NavMenu>
            <div className="header-content d-flex justify-content-center align-items-center">
                <div className="text-white text-center">
                    <h3 className="fs-1">Welcome to Al Saudia</h3>
                    <p className="fs-5">Our service is always ready for your need. We always try to give you our best hospitality.</p>

                    <div className="mt-5">
                        <Link to="/interior">
                            <Button variant="outline-info" className='text-white hover_btn'>Visit Our Interior</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;