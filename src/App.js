import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AuthProvider from './Context/AuthProvider';
import AddProduct from './pages/AdminPage/AddProduct/AddProduct';
import AllOrders from './pages/AdminPage/AllOrders/AllOrders';
import CoustomerReview from './pages/CoustomerPage/CoustomerReview/CoustomerReview';
import Payment from './pages/CoustomerPage/Payment/Payment';
import UserOrder from './pages/CoustomerPage/UserOrder/UserOrder';
import Home from './pages/HomePage/Home/Home';
import OurProducts from './pages/HomePage/OurProducts/OurProducts';
import Login from './pages/LoginPage/Login/Login';
import Register from './pages/LoginPage/Register/Register';
import NotFound from './pages/NotFound/NotFound'
import Navigation from './pages/Shared/Navigation/Navigation';
import PrivateRoute from './pages/LoginPage/PrivateRoute/PrivateRoute'
import BookingModal from './pages/CoustomerPage/BookingModal/BookingModal'
import ManageProducts from './pages/AdminPage/ManageProducts/ManageProducts';
import MakeAdmin from './pages/AdminPage/MakeAdmin/MakeAdmin';
import AdminRoute from './pages/LoginPage/AdminRoute/AminRoute';


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/explore">
            <OurProducts></OurProducts>
          </Route>

          <PrivateRoute exact path="/userOrder">
            <UserOrder></UserOrder>
          </PrivateRoute>
          <PrivateRoute exact path="/coustomerReview">
            <CoustomerReview></CoustomerReview>
          </PrivateRoute>
          <PrivateRoute exact path="/plceOrder/:id">
            <BookingModal></BookingModal>
          </PrivateRoute>

          <PrivateRoute exact path="/payment">
            <Payment></Payment>
          </PrivateRoute>

          {/*--- admin Route -----*/}
          <AdminRoute exact path="/manageProducts">
            <ManageProducts></ManageProducts>
          </AdminRoute>
          <AdminRoute exact path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </AdminRoute>

          <AdminRoute exact path="/addProduct">
            <AddProduct></AddProduct>
          </AdminRoute>

          <AdminRoute exact path="/managOrders">
            <AllOrders></AllOrders>
          </AdminRoute>

          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
};
export default App;