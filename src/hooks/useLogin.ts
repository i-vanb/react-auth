import {useMutation} from '@tanstack/react-query';
import axiosInstance from '@/api';


const useLogin = () => {
    return useMutation({
        mutationFn: async (userData: { email: string; password: string }) => {
            const response = await axiosInstance.post("/login", userData);
            return response.data;
        },
    });
};


export default useLogin;
