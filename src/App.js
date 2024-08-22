import './App.css';
import {Route, Routes} from "react-router-dom";
import ProductAll from "./component/ProductAll";
import Login from "./component/Login";
import Header from "./component/Header";
import {useAllData} from "./hooks/getShoppingSite";
import {useEffect, useState} from "react";
import PrivateRouter from "./component/PrivateRouter";
import {useSearchProduct} from "./hooks/searchProducts";

function App() {


    const {data}  = useAllData();
    const [products , setProducts] = useState(null);
    const [keyword , setKeyword] = useState(null);
    const [authenticate,setAuthenticate] = useState(false);
    const [myPageDetail ,setMyPageDetail] = useState([]);


    const { data: searchResults } = useSearchProduct(keyword);

    useEffect(() => {
        if (keyword) {
            setProducts(searchResults);
        } else {
            setProducts(data);
        }
    }, [data, keyword, searchResults]);


    useEffect(() => {
        console.log("내가산 물품들!!!! =====> ", myPageDetail);
    }, [myPageDetail]);



    const clickHeart = (event,index) => {
        console.log(event);
        console.log(index);

    }



    return (

    <div>
        <Header setKeyword = {setKeyword}/>
        <Routes>
          <Route path={"/"} element={<ProductAll products = {products} clickHeart = {clickHeart}/>}/>
          <Route path={"/product/:id"} element={<PrivateRouter authenticate={authenticate} setMyPageDetail={setMyPageDetail} myPageDetail={myPageDetail}/>}/>
          <Route path={"/login"} element={<Login setAuthenticate={setAuthenticate}/>}/>
        </Routes>
    </div>
  );
}

export default App;
