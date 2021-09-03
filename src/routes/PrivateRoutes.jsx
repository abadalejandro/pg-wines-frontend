import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import Navbar from '../components/navbar/Navbar';
import HomeScreen from '../pages/home/HomeScreen';
import Footer from '../components/footer/Footer.jsx';
import ProductDetailsScreen from '../pages/productDetails/ProductDetailsScreen';
import ManageProductsScreen from '../pages/manageProducts/ManageProductsScreen';
import ShippingPay from '../pages/shippingpay/ShippingPay';

const PrivateRoutes = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="home" component={HomeScreen} />
                    <Route exact path="/productDetails" component={ProductDetailsScreen} />
                    <Route exact path="/manageProducts" component={ManageProductsScreen} />
                    <Route exact path="/product/:shipping" component={ShippingPay} />
                    <Redirect to="/home" />
                </Switch>
            </div>
            <Footer />
        </>
    )
}

export default PrivateRoutes;
