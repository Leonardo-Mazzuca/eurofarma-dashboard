import api from "@/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useTraces = () => {
  const [traces, setTraces] = useState<Trace[]>([]);

  const fetchTraces = async () => {
    try {
      const res = await api.get("/traces");
      return res.data;
    } catch (e: unknown) {
      console.log(e);
    }
  };

  const { data, isLoading } = useQuery({
    queryFn: fetchTraces,
    queryKey: ["traces"],
  });

  useEffect(() => {
    if (data) setTraces(data);
  }, [data]);

  return {
    traces,
    isLoading,
  };
};
