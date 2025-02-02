export const AuthHeader = ({label, title}: AuthHeaderProps) => {
    return (
        <div className="text-center">
            <h1 className="text-xl font-bold">{title}</h1>
            <p>{label}</p>
        </div>
    );
}


type AuthHeaderProps = {
    title: string;
    label: string;
}