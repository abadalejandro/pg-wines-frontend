import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginScreen from '../pages/login/LoginScreen';
// import PublicRoutes from './PublicRoutes';
import AuthContext from '../auth/AuthContext';
// import PrivateRoutes from './PrivateRoutes';
import HomeScreen from '../pages/home/HomeScreen';
import ProductDetailsScreen from '../pages/productDetails/ProductDetailsScreen';
import './AppRouter';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const AppRouter = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <Router>
      <div>
      
        <Switch>
          <Route exact path="/login/:id" component={LoginScreen} />
          <Route exact path="/home" component={HomeScreen} />
          <Route exact path="/productDetails" component={ProductDetailsScreen} />
          <Redirect to="/home" />
          {/* <Route path="/" component={PublicRoutes} /> */}
          {/* <Route path="/" component={PrivateRoutes} /> */}
        </Switch>
        
      </div>
    </Router>
  );
}


// const PrivateRoute = ({path, component, ...rest}) =>{
//   let storage = localStorage.getItem('storage');
//   storage = JSON.parse(storage);
//   if(storage && storage.use){
//     return <Route path={path} component={component} {...rest} />
//   }else{
//     return <Redirect to="/login" {...rest} />
//   }
// }

export default AppRouter;
