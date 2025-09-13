import api from "@/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";


export const useOrders = () => {

    const [orders, setOrders] = useState<Order[]>([]);

    const fetchOrders = async ( ) => {
        try {
            const res = await api.get('/orders');
            return res.data
        } catch (e:unknown) {
            console.log(e);
        }
    }

    const {data,isLoading} = useQuery({
        queryFn: fetchOrders,
        queryKey: ['orders']
    })


    useEffect(()=> {
        if(data) setOrders(data);
    },[data]);

    return {
        orders,
        isLoading
    }
}