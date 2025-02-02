import {Outlet, Navigate} from "react-router";

import {useAuthToken} from "@/hooks/useAuthToken";
import pageConfig from "@/config/page.config.ts";


export const ProtectedRoutes = () => {
    const isAuthenticated = useAuthToken();

    if (isAuthenticated === null) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to={pageConfig.auth}/>
    }

    return <Outlet/>;
}