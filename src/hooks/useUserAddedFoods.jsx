import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useUserAddedFoods = () => {
    const {authUser}=useContext(AuthContext)
    const {data,isLoading ,isFetching}=useQuery({
        queryKey:['addedUser'],
        queryFn: async ()=> {
            const data= await fetch(`http://localhost:5000/addedUser?MadeUserEmail=${authUser?.email}`)
            return await data.json()
        }
        
    })
    return {data,isLoading,isFetching}
     
};

export default useUserAddedFoods;