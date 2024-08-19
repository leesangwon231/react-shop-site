import { useQuery } from "react-query";
import axios from "axios";

const fetchAllProducts = () => {
  return  axios.get("http://localhost:5000/products")
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