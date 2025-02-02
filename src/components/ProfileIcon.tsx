import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {CircleUserRound} from "lucide-react";


export const ProfileIcon = ({user}: ProfileIconProps) => {
    // TODO add image url to user object, till then use fallback
    user.src = "";

    return (
        <div className="flex items-center gap-2">
            <p className="text-copy-secondary text-xs">{user.email}</p>
            <Avatar>
                <AvatarImage src={user.src} />
                <AvatarFallback>
                    <CircleUserRound />
                </AvatarFallback>
            </Avatar>
        </div>
    );
}


type ProfileIconProps = {
    user: {
        email: string;
        id: string;
        src?: string;
    };
}