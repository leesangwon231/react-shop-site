import './App.css';
import {Route, Routes} from "react-router-dom";
import ProductAll from "./component/ProductAll";
import ProductDetail from "./component/ProductDetail";
import Login from "./component/Login";
import Header from "./component/Header";
import {useAllData} from "./hooks/getShoppingSite";
import {useState} from "react";

function App() {

    let {data:products,isError,isLoading}  = useAllData();
    const [authenticate,setAuthenticate] = useState(false);

    const clickHeart = (event,index) => {
        console.log(event);
        console.log(index);

    }

    return (

    <div>
        <Header/>
        <Routes>
          <Route path={"/"} element={<ProductAll products = {products} clickHeart = {clickHeart}/>}/>
          <Route path={"/product/:id"} element={<ProductDetail/>}/>
          <Route path={"/login"} element={<Login setAuthenticate={setAuthenticate}/>}/>
        </Routes>
    </div>
  );
}

export default App;
