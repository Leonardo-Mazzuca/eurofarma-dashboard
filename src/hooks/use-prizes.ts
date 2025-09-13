import api from "@/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";


export const usePrizes = () => {


    const [prizes, setPrizes] = useState<PrizeProduct[]>([]);

    const fetchPrizes = async ( ) => {
        try {
            const res = await api.get('/prizes');
            return res.data
        } catch (e:unknown) {
            console.log(e);
        }
    }

    const {data,isLoading} = useQuery({
        queryFn: fetchPrizes,
        queryKey: ['prizes']
    })


    useEffect(()=>{
        if(data) setPrizes(data);
    },[data])


    return {
        prizes,
        isLoading
    }

}