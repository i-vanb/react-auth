import {ReactNode} from "react";

import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card.tsx";
import {AuthHeader} from "@/components/auth/AuthHeader.tsx";


export const CardWrapper = ({label, title, toggleAuthMode, toggleAuthLabel, children}: CardWrapperProps) => {
    return (
        <Card className="xl:w-1/4 md:w-1/2 shadow-md">
            <CardHeader>
                <AuthHeader label={label} title={title}/>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
            <CardFooter>
                <button onClick={toggleAuthMode} className="link">{toggleAuthLabel}</button>
            </CardFooter>
        </Card>
    );
};


type CardWrapperProps = {
    children: ReactNode;
    toggleAuthMode: () => void;
    label: string;
    title: string;
    toggleAuthLabel: string;
}