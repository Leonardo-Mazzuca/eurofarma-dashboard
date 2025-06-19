
import api from "@/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

//Channels are the same thing that area
export const useChannels = () => {


    const [channels, setChannels] = useState<Channel[]>([]);

    const fetchChannels = async () => {
        try {
            const res = await api.get('/channels');
            return res.data
        } catch (e:unknown) {
            console.log(e);
        }
    }

    const {data,isLoading} = useQuery({
        queryFn: fetchChannels,
        queryKey: ['channels']
    })

    useEffect(()=> {
        if(data) setChannels(data);
    },[data])

    return {
        channels,
        isLoading
    }


}