import {useState, createContext, ReactNode, useContext} from "react";


const profileContext = createContext<ProfileContextType>(null);


export const ProfileProvider = ({children}: ProfileProviderProps) => {
    const [user, setUser] = useState<UserInfo | null>(null);

    const changeProfile = (info: UserInfo) => {
        setUser(() => info);
    };

    return (
        <profileContext.Provider value={{user, changeProfile}}>
            {children}
        </profileContext.Provider>
    );
}


export const useProfileContext = () => {
    const context = useContext(profileContext);

    if (!context) {
        throw new Error("useTheme must be used within a ProfileProvider");
    }

    return context;
};


type ProfileProviderProps = {
    children: ReactNode;
};

type ProfileContextType = {
    user: UserInfo | null;
    changeProfile: (info: UserInfo) => void;
} | null;

export type UserInfo = {
    id: string;
    email: string;
    username?: string;
} | null;