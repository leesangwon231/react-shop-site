import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import ProductAll from "./component/ProductAll";
import ProductDetail from "./component/ProductDetail";
import Login from "./component/Login";
import Header from "./component/Header";
import {useAllData} from "./hooks/getShoppingSite";

function App() {
    let a = useAllData();
    console.log(a)
  return (

    <div>
        <Header/>
        <Routes>
          <Route path={"/"} element={<ProductAll/>}/>
          <Route path={"/product/:id"} element={<ProductDetail/>}/>
          <Route path={"/login"} element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
