import React, {useEffect} from 'react'
import Card from "./Card";

const ProductAll = ({products}) => {



    return (
        <div className={"main-container"}>
            {products?.map((product,index) => (
                <Card key = {index} product = {product}/>
            ))}
        </div>

    )
}

export default ProductAll;