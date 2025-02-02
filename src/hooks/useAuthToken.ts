import {useState, useEffect} from "react";
import {jwtDecode} from "jwt-decode";

import {getToken, removeToken} from "@/utils/token.ts";


export const useAuthToken = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    useEffect(() => {
        const checkTokenValidity = () => {
            const token = getToken();

            if (!token) {
                setIsAuthenticated(false);
                return;
            }

            try {
                const decoded: JwtPayload = jwtDecode(token);
                const isExpired = decoded.exp ? decoded.exp * 1000 < Date.now() : true;

                if (isExpired) {
                    removeToken();
                    setIsAuthenticated(false);

                    return;
                }

                setIsAuthenticated(true);
            } catch (error) {
                console.error("Invalid token:", error);

                removeToken();
                setIsAuthenticated(false);
            }
        };

        checkTokenValidity();
    }, []);

    return isAuthenticated;
};


type JwtPayload = {
    exp?: number;
};