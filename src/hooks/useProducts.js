import useSWR from "swr";
import {fetcherWithFetch} from "../services/fetcher";
import { PRODUCTS_URL } from "../services/API";

const useProducts = () => {
    const {data : products, error , isLoading} = useSWR(PRODUCTS_URL, fetcherWithFetch);

    return {
       products,
       error,
       isLoading,
    };
}

export default useProducts; 