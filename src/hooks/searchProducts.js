import {useQuery} from "react-query";
import axios from "axios";


const searchProducts = (param) => {
    let searchParam = param.queryKey[1] === undefined ? "" : param.queryKey[1];
    return axios.get(`https://my-json-server.typicode.com/leesangwon231/react-shop-site/products/?q=${searchParam}`);
}

export const useSearchProduct  = (searchParam) => {
    return useQuery({
       queryKey : ["search-products",searchParam],
       queryFn : searchProducts,
        select : (data) => {
           return data.data
        }
    });
}