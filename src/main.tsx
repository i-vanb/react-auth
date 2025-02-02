import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from "react-router";
import {Toaster} from "react-hot-toast";
import {QueryClientProvider} from "@tanstack/react-query";

import '@/index.css'
import App from '@/App.tsx'
import {AppProvider} from "@/context/AppProvider.tsx";
import {queryClient} from "@/config/queryClient";


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <AppProvider>
                    <App/>
                    <Toaster position="top-right" reverseOrder={false}/>
                </AppProvider>
            </QueryClientProvider>
        </BrowserRouter>
    </StrictMode>,
)
