import {useNavigate} from "react-router";

import {useProfileContext} from "@/context/profile";
import {removeToken} from "@/utils/token.ts";
import {queryClient} from "@/config/queryClient";


export const useLogout = (): (() => void) => {
    const {changeProfile} = useProfileContext();
    const navigate = useNavigate();

    const logout = () => {
        removeToken();
        queryClient.removeQueries({queryKey: ["profile"]});
        changeProfile(null);
        navigate("/auth", {replace: true});
    };

    return logout;
};