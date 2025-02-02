import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {useTheme} from "@/context/theme";

export const ThemeSwitch = () => {
    const {theme, changeTheme, themes} = useTheme();

    const onValueChange = (value: string) => {
        changeTheme(value);
    }

    return (
        <div className="flex gap-4">
            <Select value={theme} onValueChange={onValueChange}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a theme"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Theme</SelectLabel>
                        {themes.map((themeName) => (
                            <SelectItem key={themeName} value={themeName}>{themeName}</SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    )
}

