import React from 'react';
import Header from '../../Component/Header/Header';
import { Outlet } from 'react-router';
import Footer from '../../Component/Footer/Footer';
import { ToastContainer} from 'react-toastify';
import Apperror from '../App/Apperror/Apperror';

const Root = () => {
    return (
        <div>
           <Header></Header>
           <Outlet></Outlet>
           <Footer></Footer>
           <ToastContainer />
        </div>
    );
};

export default Root;