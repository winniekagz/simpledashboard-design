import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Topbar from './components/Topbar/Topbar';
import Sidebar from './components/sidebar/sidebar';
import Product from './pages/product/Product';
import AddProduct from './pages/Addproduct/AddProduct';
import Adduser from "./pages/AddUser/Adduser"
import User from "./pages/user/User"
import './App.css';

function App() {
  return (
    <div className="App">
      <Topbar/>
      {/* <Sidebar/> */}
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/newuser" element={<Adduser/>}/>
        <Route  path="/newproduct" element={<AddProduct/>}/>
        <Route path="/products" element={<Product/>}/>
        <Route path="/users" element={<User/>}/>
      </Routes>
    </div>
  );
}

export default App;
