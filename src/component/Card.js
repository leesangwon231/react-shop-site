import React, {useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-regular-svg-icons'

const Card = ({product,clickHeart,index}) => {

  return (
    <div className={"card"}>
      <img  id={"productImg"} src={product.img} alt={"product Image"}/>
      <div className={"heartIcon"} onClick={(event) => clickHeart(event,index)}>
        <FontAwesomeIcon icon={faHeart}/></div>
        <h1>{product.choice ? "choice product" : ""}</h1>
        <h1 id={"title"}>{product.title}</h1>
        <h1>{product.price}</h1>
        <h1>{product.choice ? "new product" : ""}</h1>
    </div>
  );
}

export default Card;