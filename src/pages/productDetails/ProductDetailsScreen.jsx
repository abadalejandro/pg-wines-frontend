import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import styles from './ProductDetailsScreen.module.css';

const ProductDetailsScreen = () => {

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                Product Details Screen
            </div>
            <Footer />
        </>
    );
}

export default ProductDetailsScreen;
