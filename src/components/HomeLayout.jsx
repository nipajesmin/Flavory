import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import TopFood from './TopFood';
import Footer from './Footer';
import FlavoryTeam from './FlavoryTeam';
import Updates from './Updates';
import Community from './Community';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <Updates></Updates>
            <TopFood></TopFood>
            <Community></Community>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;