import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import Navbar from '../components/navbar/Navbar';
import HomeScreen from '../pages/home/HomeScreen';
import Footer from '../components/footer/Footer.jsx';
import ProductDetailsScreen from '../pages/productDetails/ProductDetailsScreen';

const PublicRoutes = () => {
 
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/home" component={HomeScreen} />
                    <Route exact path="/productDetails" component={ProductDetailsScreen} />
                    <Redirect to="/home" />
                </Switch>
            </div>
            <Footer />
        </>
    )
}

export default PublicRoutes;
