import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import ProductAll from "./component/ProductAll";
import ProductDetail from "./component/ProductDetail";
import Login from "./component/Login";
import Header from "./component/Header";
import {useAllData} from "./hooks/getShoppingSite";
import {useEffect, useState} from "react";

function App() {

    let {data:products,isError,isLoading}  = useAllData();
    const [authenticate,setAuthenticate] = useState(false);



    return (

    <div>
        <Header/>
        <Routes>
          <Route path={"/"} element={<ProductAll products = {products}/>}/>
          <Route path={"/product/:id"} element={<ProductDetail/>}/>
          <Route path={"/login"} element={<Login setAuthenticate={setAuthenticate}/>}/>
        </Routes>
    </div>
  );
}

export default App;
