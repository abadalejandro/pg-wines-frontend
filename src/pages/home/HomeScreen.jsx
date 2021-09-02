import React from 'react';
import Navbar from '../../components/navbar/Navbar';
// import ProductsList from '../../components/productList/ProductsList';
// import Slider1 from '../../components/slider/Slider1';
import Slider2 from '../../components/slider/Slider2';
// import Footer from '../../components/footer/Footer';
// import styles from './HomeScreen.module.css';

const HomeScreen = () => {

    return (
        <>
            <Navbar />
            {/* <div className={`${styles.container} `}>
            <h1>HomeScreen</h1>
            </div> */}
            {/* <ProductsList /> */}
            {/* <Slider1 /> package react-responsive-carousel */} 
            <Slider2 />
            {/* <Footer /> */}

        </>
    );
}


export default HomeScreen;