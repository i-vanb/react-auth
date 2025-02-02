import {useMutation} from "@tanstack/react-query";
import axiosInstance from "@/api";


const useRegister = () => {
    return useMutation({
        mutationFn: async (userData: { email: string; password: string }) => {
            const response = await axiosInstance.post("/register", userData);
            return response.data;
        }
    });
};


export default useRegister;
