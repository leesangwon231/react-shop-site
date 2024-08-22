import React, {useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart,faThumbsUp} from '@fortawesome/free-regular-svg-icons'
import {useDetailData} from "../hooks/getProductDetail";
import {useNavigate} from "react-router-dom";

const Card = ({product,clickHeart,index,heart}) => {
    let navigator = useNavigate();
    const clickedImage = (detailNm) => {
        navigator(`/product/${detailNm}`)
    }


    let heartFlag = heart.find((data)=>{
        if(data === product.id){
            return true;
        }else{
            return false;
        }
    })

    const heartVisible = () => {
        if(heartFlag===product.id){
            return <FontAwesomeIcon icon={faThumbsUp}/>
        }else{
            return <FontAwesomeIcon icon={faHeart}/>;
        }

    }


    return (
    <div className={"card"}>
      <img  id={"productImg"} src={product.img} alt={"product Image"} onClick={()=>clickedImage(product.id)}/>
      <div className={"heartIcon"} onClick={(event) => clickHeart(event,index)}>
          {heartVisible()}
      </div>
        <h1>{product.choice ? "choice product" : ""}</h1>
        <h1 id={"title"}>{product.title}</h1>
        <h1>{product.price}</h1>
        <h1>{product.choice ? "new product" : ""}</h1>
    </div>
  );
}

export default Card;