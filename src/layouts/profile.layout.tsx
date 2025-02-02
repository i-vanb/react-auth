import {Navigate} from "react-router";

import {Profile} from "@/components/profile.tsx";
import {Skeleton} from "@/components/ui/skeleton.tsx";
import useProfile from "@/hooks/useProfile.ts";

import pageConfig from "@/config/page.config.ts";


export default function ProfileLayout() {
    const {user, isLoading} = useProfile();

    if (isLoading) return <ProfileSkeleton/>;

    if (!user) return <Navigate to={pageConfig.auth}/>;

    return <Profile user={user}/>;
}


const ProfileSkeleton = () => {
    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md rounded-md bg-card p-6 shadow-md border space-y-6">
                <Skeleton className="h-12 w-12 rounded-full"/>
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]"/>
                    <Skeleton className="h-4 w-[200px]"/>
                </div>
                <Skeleton className="h-4 w-full"/>
            </div>
        </div>
    )
}