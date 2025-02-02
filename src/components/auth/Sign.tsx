import {useNavigate} from "react-router";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import {zodResolver} from "@hookform/resolvers/zod";

import useRegister from "@/hooks/useRegister.ts";
import {setToken} from "@/utils/token.ts";

import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {PasswordInput} from "@/components/ui/psw-input.tsx";
import {Form, FormField, FormItem, FormLabel, FormControl, FormMessage} from "@/components/ui/form.tsx";
import {CardWrapper} from "./CardWrapper.tsx";

import {signupSchema} from "./sign.schema.ts";
import pageConfig from "@/config/page.config.ts";


export const Sign = ({toggleAuthMode}: SignProps) => {
    const {mutate: registerUser} = useRegister();
    const navigate = useNavigate();

    const form = useForm({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: ""
        }
    });

    const onSubmit = (data: { email: string; password: string; confirmPassword: string }) => {
        if (data.password !== data.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        registerUser(
            {email: data.email, password: data.password},
            {
                onSuccess: (response) => {
                    setToken(response.token);
                    toast.success("Registration successful! Redirecting...");
                    navigate(pageConfig.profile, {replace: true});
                },
                onError: (err: any) => {
                    toast.error(err.response?.data?.message || "Registration failed. Try again.");
                },
            }
        );
    }

    return (
        <CardWrapper
            toggleAuthMode={toggleAuthMode}
            label="Create an account"
            title="Sign Up"
            toggleAuthLabel="Already have an account? Login"
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
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <PasswordInput {...field} className="border-muted"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button type="submit" className="btn-primary w-full">Sign Up</Button>
                </form>
            </Form>
        </CardWrapper>
    );
}


type SignProps = {
    toggleAuthMode: () => void;
}