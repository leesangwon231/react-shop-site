import React, {useState} from 'react'
import {useParams} from "react-router-dom";
import {useDetailData} from "../hooks/getProductDetail";

const ProductDetail = ({setMyPageDetail,myPageDetail}) => {

    const {id} = useParams();
    const {data:detailData} = useDetailData(id);
    const [clickedSize , setclickedSize] = useState();

    const clickSize = (size) => {
        setclickedSize(size);
    }

    const clickSubmitDetail = (event) => {
        event.preventDefault();
        if(document.getElementsByClassName("size_card active").length === 0){
            alert("사이즈를 선택해 주세요");
            return false;
        }

        let data = {};
        let title = document.getElementById("title").innerText;
        let price = document.getElementById("price").innerText.split(" ")[1];
        let size = document.getElementsByClassName("size_card active")[0].innerHTML

        data["id"] = id;
        data["title"] = title;
        data["price"] = price;
        data["size"] = size;

        setMyPageDetail([...myPageDetail , data]);
    }

    return (
        <div className={"detail-container"}>
            <img src={detailData?.img}/>
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