import { useQuery } from "@tanstack/react-query";

const useAllFoods = () => {
    const {data,isLoading ,isFetching}=useQuery({
        queryKey:['foods'],
        queryFn: async ()=> {
            const data= await fetch('http://localhost:5000/foods')
            return await data.json()
        }
        
    })
    return {data,isLoading,isFetching}
     
};

export default useAllFoods;