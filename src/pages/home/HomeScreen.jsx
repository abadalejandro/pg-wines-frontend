import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import ProductsList from '../../components/productList/ProductsList';
import Slider1 from '../../components/slider/Slider1';
import Footer from '../../components/footer/Footer';
// import styles from './HomeScreen.module.css';
import { connect } from 'react-redux';


const HomeScreen = () => {

  

  return (
    <React.Fragment>
      <Navbar />
      {/* <Slider1 from={1} to={5} data={sliderData} /> */}
      &nbsp;&nbsp;&nbsp;      
      <Slider1  width={'75%'} />    
      &nbsp;&nbsp;
      <ProductsList />
      <Footer />
    </React.Fragment>
  );
};




export default HomeScreen
