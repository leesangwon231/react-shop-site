import React, {useEffect} from 'react'
import Card from "./Card";

const ProductAll = ({products,clickHeart}) => {


    return (
        <div className={"main-container"}>
            {products?.map((product,index) => (
                <Card key = {index} product = {product} clickHeart = {clickHeart} index = {index}/>
            ))}
        </div>

    )
}

export default ProductAll;