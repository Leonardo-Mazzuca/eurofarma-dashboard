import api from "@/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";


export const useColaborators = () => {


    const [colaborators, setColaborators] = useState<User[]>([]);

    const fetchUsers = async () => {
        try {
            const res = await api.get('/users');
            return res.data
        } catch (e:unknown) {
            console.log(e);
        }
    }

    const {data,isLoading} = useQuery({
        queryFn: fetchUsers,
        queryKey: ['users']
    })

    useEffect(()=> {
        if(data) setColaborators(data);
    },[data])

    return {
        colaborators,
        isLoading
    }


}