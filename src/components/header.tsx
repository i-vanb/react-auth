import {useNavigate} from "react-router";

import {useProfileContext} from "@/context/profile";

import {ThemeSwitch} from "@/components/themeSwitch.tsx";
import {ProfileIcon} from "@/components/ProfileIcon.tsx";

import pageConfig from "@/config/page.config.ts";


export const Header = () => {
    const {user} = useProfileContext();

    return (
        <header className="p-4 bg-card flex items-center justify-between bg-background">
            <h1 className="text-2xl font-bold text-copy-primary">LOGO</h1>
            <div className="flex items-center gap-6">
                <ThemeSwitch/>
                {user
                    ? <ProfileIcon user={user}/>
                    : <LoginButton/>
                }
            </div>
        </header>
    );
}


const LoginButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(pageConfig.auth);
    };

    return (
        <button onClick={handleClick} className="bg-primary text-copy-primary rounded-md p-2">Login</button>
    );
}