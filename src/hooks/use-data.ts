import api from "@/api";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export const useData = () => {
  const [dataItems, setDataItems] = useState<DataItem[]>([]);

  const fetchData = async () => {
    try {
      const res = await api.get("/data-items");
      return res.data;
    } catch (e: unknown) {
      console.log(e);
    }
  };

  const { data: fetchDataItems, isLoading } = useQuery({
    queryFn: fetchData,
    queryKey: ["data-items"],
  });

  useEffect(() => {
    if (fetchDataItems) setDataItems(fetchDataItems);
  }, [fetchDataItems]);

  return {
    dataItems,
    isLoading,
  };
};
