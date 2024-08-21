import './App.css';
import {Route, Routes} from "react-router-dom";
import ProductAll from "./component/ProductAll";
import Login from "./component/Login";
import Header from "./component/Header";
import {useAllData} from "./hooks/getShoppingSite";
import {useEffect, useState} from "react";
import PrivateRouter from "./component/PrivateRouter";

function App() {

    let {data:products}  = useAllData();
    const [authenticate,setAuthenticate] = useState(false);
    const [myPageDetail ,setMyPageDetail] = useState([]);


    useEffect(() => {
        console.log("내가산 물품들!!!! =====> ", myPageDetail);
    }, [myPageDetail]);

    const clickHeart = (event,index) => {
        console.log(event);
        console.log(index);

    }

    return (

    <div>
        <Header/>
        <Routes>
          <Route path={"/"} element={<ProductAll products = {products} clickHeart = {clickHeart}/>}/>
          <Route path={"/product/:id"} element={<PrivateRouter authenticate={authenticate} setMyPageDetail={setMyPageDetail} myPageDetail={myPageDetail}/>}/>
          <Route path={"/login"} element={<Login setAuthenticate={setAuthenticate}/>}/>
        </Routes>
    </div>
  );
}

export default App;
