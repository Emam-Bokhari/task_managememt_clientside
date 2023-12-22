import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";



const useCreateTask = () => {
    const {user}=useContext(AuthContext)
    const userEmail=user?.email
    
   
   const {refetch,data:tasks=[]}=useQuery({
    queryKey:['tasks',userEmail],
    queryFn:async()=>{
        const result=await axios.get(`https://task-management-serverside-taupe.vercel.app/api/v1/show-all-task?userEmail=${userEmail}`)
        return result.data
    }
   })
   return [tasks,refetch]
};

export default useCreateTask;