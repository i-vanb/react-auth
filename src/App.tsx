import '@/App.css'
import {Header} from "@/components/header.tsx";
import {Route, Routes} from "react-router";
import pageConfig from "@/config/page.config.ts";

import Profile from "@/layouts/profile.layout";
import Auth from "@/layouts/auth.layout";
import NotFoundLayout from "@/layouts/404.layout.tsx";
import {ProtectedRoutes} from "@/routes/protected.routes.tsx";
import {AuthorizedRoutes} from "@/routes/authorized.routes.tsx";


function App() {
    return (
        <div className="bg-background text-copy-primary h-screen flex flex-col">
            <Header/>
            <Routes>
                <Route element={<ProtectedRoutes/>}>
                    <Route path={pageConfig.profile} element={<Profile/>}/>
                </Route>
                <Route element={<AuthorizedRoutes/>}>
                    <Route path={pageConfig.auth} element={<Auth/>}/>
                </Route>
                <Route path="*" element={<NotFoundLayout/>}/>
            </Routes>
        </div>
    )
}


export default App
