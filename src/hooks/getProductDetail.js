import {useParams} from "react-router-dom";
import axios from "axios";
import {useQuery} from "react-query";


const fetchDetailData = (detailNm) => {
    return axios.get(`https://my-json-server.typicode.com/leesangwon231/react-shop-site/products/${detailNm.queryKey[1]}`)
}

export const useDetailData = (detailNm) => {
    return useQuery({
        queryKey : ["show-detail-data",detailNm],
        queryFn : fetchDetailData,
        select : (data) => {
            return data.data;
        }
    });
}