import api from "@/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";


export const useColaborators = () => {


    const [colaborators, setColaborators] = useState<User[]>([]);
    const [rankPointsItems, setRankPointsItems] = useState<DataPointsItem[]>([]);

    const fetchUsers = async () => {
        try {
            const res = await api.get('/users');
            return res.data
        } catch (e:unknown) {
            console.log(e);
        }
    }

    const fetchRankItems = async () => {
        try {
            const res = await api.get('/data-points-items');
            return res.data
        } catch (e:unknown) {
            console.log(e);
        }
    }

    const {data,isLoading} = useQuery({
        queryFn: fetchUsers,
        queryKey: ['users']
    })

    const {data: dataPointsItems} = useQuery({
        queryFn: fetchRankItems,
        queryKey: ['data-points-items']
    })

    useEffect(()=> {
        if(data) setColaborators(data);
    },[data])

    useEffect(()=> {
        if(dataPointsItems) setRankPointsItems(dataPointsItems);
    },[dataPointsItems])

    return {
        colaborators,
        isLoading,
        rankPointsItems,
        dataPointsItems
    }


}