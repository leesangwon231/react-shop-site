import React, {useEffect} from 'react'
import Card from "./Card";

const ProductAll = ({products,clickHeart, heart}) => {


    return (
        <div className={"main-container"}>
            {products?.map((product,index) => (
                <Card key = {index} product = {product} clickHeart = {clickHeart} index = {index} heart = {heart}/>
            ))}
        </div>

    )
}

export default ProductAll;