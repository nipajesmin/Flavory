import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import TopFood from './TopFood';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <TopFood></TopFood>
        </div>
    );
};

export default HomeLayout;