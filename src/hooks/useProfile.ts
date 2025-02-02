import {useEffect} from "react";
import {useQuery, UseQueryResult} from "@tanstack/react-query";

import {useProfileContext, type UserInfo} from "@/context/profile";

import {getToken} from "@/utils/token.ts";
import axiosInstance from "@/api";


const fetchProfile = async (): Promise<UserInfo> => {
    const response = await axiosInstance.get("/profile");
    return response.data;
};


const useProfile = (): ProfileQueryResult => {
    const {user, changeProfile} = useProfileContext();

    const token = getToken();

    const query = useQuery<UserInfo, Error>({
        queryKey: ["profile"],
        queryFn: fetchProfile,
        staleTime: 1000 * 60 * 5,
        retry: 0,
        enabled: !!token,
    });

    useEffect(() => {
        if (query.data && query.data.id !== user?.id) {
            changeProfile(query.data);
        }
    }, [query.data, user, changeProfile]);

    return {...query, user: user || null};
}


export default useProfile;


type ProfileQueryResult = UseQueryResult<UserInfo> & {
    user: UserInfo | null;
};