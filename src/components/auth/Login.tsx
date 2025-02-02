import {useNavigate} from "react-router";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import {CardWrapper} from "@/components/auth/CardWrapper.tsx";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {Input} from "@/components/ui/input.tsx";
import {PasswordInput} from "@/components/ui/psw-input.tsx";
import {Button} from "@/components/ui/button.tsx";

import useLogin from "@/hooks/useLogin";
import {setToken} from "@/utils/token.ts";

import pageConfig from "@/config/page.config.ts";
import {loginSchema} from "./login.schema.ts";


export const Login = ({toggleAuthMode}: LoginProps) => {
    const {mutate: loginUser} = useLogin();
    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
    });

    const onSubmit = (data: { email: string; password: string }) => {
        loginUser(data, {
            onSuccess: (response) => {
                setToken(response.token);
                toast.success("Login Successful! Welcome back 🎉", {
                    icon: "✅",
                });
                navigate(pageConfig.profile, {replace: true});
            },
            onError: () => {
                toast.error("Invalid email or password. Try again.", {
                    icon: "❌",
                });
            }
        });
    };

    return (
        <CardWrapper
            toggleAuthMode={toggleAuthMode}
            label="Enter to your account"
            title="Login"
            toggleAuthLabel="Don't have an account? Sign up"
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="text" placeholder="example@gmail.com"
                                               className="border-muted"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <PasswordInput {...field} className="border-muted"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit" className="btn-primary w-full">Login</Button>
                </form>
            </Form>
        </CardWrapper>
    );
}


type LoginProps = {
    toggleAuthMode: () => void;
}