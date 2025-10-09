import React from 'react';
import Header from '../../Component/Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../Component/Footer/Footer';
import { ToastContainer} from 'react-toastify';
import Loader from '../Loadpage/Loader';

const Root = () => {
    const navigation=useNavigation()
    return (
        <div>
           <Header></Header>
           {
            navigation.state==='loading'? <Loader />:<Outlet></Outlet>
           }
           <Footer></Footer>
           <ToastContainer />
        </div>
    );
};

export default Root;