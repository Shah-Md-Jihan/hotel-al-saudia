import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import NavMenu from '../Pages/Shared/NavMenu/NavMenu';

const Main = () => {
    return (
        <div>
            <NavMenu></NavMenu>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;