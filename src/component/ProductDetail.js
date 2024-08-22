import React, {useState} from 'react'
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {useDetailData} from "../hooks/getProductDetail";

const ProductDetail = ({setMyPageDetail,myPageDetail}) => {

    const {id} = useParams();
    const {data:detailData} = useDetailData(id);
    const [clickedSize , setclickedSize] = useState();
    const navigate = useNavigate();
    const clickSize = (size) => {
        setclickedSize(size);
    }

    const clickSubmitDetail = (event) => { // 걍 detail Data 넘겨도 된다.... ()=> 로 막아두고
        event.preventDefault();
        if(document.getElementsByClassName("size_card active").length === 0){
            alert("사이즈를 선택해 주세요");
            return false;
        }

        let data = {};
        let title = document.getElementById("title").innerText;
        let price = document.getElementById("price").innerText.split(" ")[1];
        let size = document.getElementsByClassName("size_card active")[0].innerHTML
        let img = document.getElementById("img").src;

        data["id"] = id;
        data["title"] = title;
        data["price"] = price;
        data["size"] = size;
        data["img"] = img;


        setMyPageDetail([...myPageDetail , data]);

        alert("상품 구매 완료!! 메뉴바에서 확인 하세요");
        navigate("/");

    }

    return (
        <div className={"detail-container"}>
            <img id={"img"} src={detailData?.img}/>
            <div className={"product-detail-info"}>
                <form onSubmit={(event) => clickSubmitDetail(event)}>  
                    <h1 id={"title"}>{detailData?.title}</h1>
                    <h2 id={"price"}>₩ {detailData?.price}</h2>
                    <h2>SIZE</h2>
                    <div className={"size_wrapper"}>
                        {detailData?.size.map((data) => (
                            <div className={`size_card ${clickedSize === data ? 'active' : ""}`}
                                 onClick={() => clickSize(data)}>{data}</div>
                        ))}
                    </div>
                    <button className={"detail_button"} type={"submit"}>추가</button>
                </form>
            </div>
        </div>
    )
}

export default ProductDetail;