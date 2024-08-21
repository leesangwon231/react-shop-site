import React from 'react';
import Login from "./Login";
import {Navigate} from "react-router-dom";
import ProductDetail from "./ProductDetail";

const PrivateRouter = ({authenticate,setMyPageDetail,myPageDetail}) => {
    return authenticate === true ? <ProductDetail setMyPageDetail={setMyPageDetail} myPageDetail={myPageDetail}/> : <Navigate to={"/login"} />
}

export default PrivateRouter;