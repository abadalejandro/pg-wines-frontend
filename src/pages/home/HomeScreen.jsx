import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import ProductsList from '../../components/productList/ProductsList';
import Slider from '../../components/slider/Slider';
import Footer from '../../components/footer/Footer';
import styles from './HomeScreen.module.css';

const HomeScreen = () => {

    return (
        <>      
        <Navbar/>      
            <div className={`${styles.container} `}>
                <h1>HomeScreen</h1>
            </div>
            <ProductsList />
            <Slider />
            <Footer/>
           
        </>
    );
}


export default HomeScreen;