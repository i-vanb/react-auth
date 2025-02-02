import {ReactNode} from "react";

import {ProfileProvider} from "./profile";
import {ThemeProvider} from "./theme";


export const AppProvider = ({children}: { children: ReactNode }) => {
    return (
        <ProfileProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </ProfileProvider>
    );
};
