import {Outlet, Navigate} from "react-router";

import {useAuthToken} from "@/hooks/useAuthToken";
import pageConfig from "@/config/page.config.ts";


export const AuthorizedRoutes = () => {
    const isAuthenticated = useAuthToken();

    if (isAuthenticated)
        return <Navigate to={pageConfig.profile} replace={true}/>

    return <Outlet/>;
}