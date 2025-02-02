import {useLogout} from "../hooks/useLogout.ts";


export const Profile = ({user}: ProfileProps) => {
    const logout = useLogout();

    const {id, email} = user;

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md rounded-md bg-card p-6 shadow-md border">
                <h2 className="mb-4 text-xl font-bold">Профиль пользователя</h2>

                <div className="mb-4">
                    <p className="text-sm text-copy-secondary">
                        <span className="font-semibold">ID:</span> {id}
                    </p>
                    <p className="text-sm text-copy-secondary">
                        <span className="font-semibold">Email:</span> {email}
                    </p>
                </div>

                <button
                    onClick={logout}
                    className="w-full rounded-md bg-red-500 px-4 py-2 text-sm font-semibold text-copy-secondary hover:bg-red-600 focus:outline-none"
                >
                    Выйти
                </button>
            </div>
        </div>
    );
};


type ProfileProps = {
    user: {
        id: string;
        email: string;
    };
};