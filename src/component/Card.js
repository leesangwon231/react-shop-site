import React, {useEffect} from 'react';

const Card = ({product}) => {




  return (
    <div className={"card"}>
      <img  id={"productImg"} src={product.img} alt={"product Image"}/>
        <h1>{product.choice ? "choice product" : ""}</h1>
        <h1 id={"title"}>{product.title}</h1>
        <h1>{product.price}</h1>
        <h1>{product.choice ? "new product" : ""}</h1>
    </div>
  );
}

export default Card;