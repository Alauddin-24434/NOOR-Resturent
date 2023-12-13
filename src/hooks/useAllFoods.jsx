import { useQuery } from "@tanstack/react-query";

const useAllFoods = () => {
    const {data,isLoading ,isFetching,}=useQuery({
        queryKey:['foods'],
        queryFn: async ()=> {
            const data= await fetch('https://b8a11-server-side-alauddin-24434-7g3ompu7j.vercel.app/foods')
            return await data.json()
        }
        
    })
    return {data,isLoading,isFetching}
     
};

export default useAllFoods;