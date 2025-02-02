import React, {useState} from "react";

import {Login} from "./Login.tsx";
import {Sign} from "./Sign.tsx";


const Auth: React.FC = () => {
    const [isLoginMode, setIsLoginMode] = useState(true);

    const toggleAuthMode = () => {
        setIsLoginMode((prev) => !prev);
    };

    return (
        <div className="flex flex-1 items-center justify-center">
            {isLoginMode
                ? <Login toggleAuthMode={toggleAuthMode}/>
                : <Sign toggleAuthMode={toggleAuthMode}/>
            }
        </div>
    );
};


export default Auth;