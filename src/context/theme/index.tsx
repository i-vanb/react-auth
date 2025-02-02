import {useEffect, useState, createContext, ReactNode, useContext} from "react";
import {getUserTheme, setUserTheme} from "@/utils/userTheme.ts";


const themes = ["light", "dark"];

const themeContext = createContext<ThemeContextType>(null);


export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState(() => getUserTheme() || "light");

    useEffect(() => {
        setUserTheme(theme);
    }, [theme]);

    const changeTheme = (themeName: string) => {
        if (!themes.includes(themeName))
            return;

        setTheme(themeName);
    };

    return (
        <themeContext.Provider value={{theme, changeTheme, themes}}>
            {children}
        </themeContext.Provider>
    );
}


export const useTheme = () => {
    const context = useContext(themeContext);

    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
};


type ThemeProviderProps = {
    children: ReactNode;
};

type ThemeContextType = {
    theme: string;
    changeTheme: (theme: string) => void;
    themes: string[];
} | null;