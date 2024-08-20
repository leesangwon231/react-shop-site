import { useQuery } from "react-query";
import axios from "axios";

const fetchAllProducts = () => {
  return  axios.get("https://my-json-server.typicode.com/leesangwon231/react-shop-site/products")
}

export const useAllData = () => {
    return useQuery({
        queryKey : ["get_data"],
        queryFn : fetchAllProducts,
        select : (data) => {
            return data.data;
        },
    });
};