const getUserTheme = (): ThemeType => {
    const userTheme = window.localStorage.getItem('theme');

    if (userTheme) {
        return userTheme;
    }

    return null;
}


const setUserTheme = (theme: string): void => {
    window.localStorage.setItem('theme', theme);

    document.documentElement.classList.remove("light", "dark", "fall");
    document.documentElement.classList.add(theme);
}


export {
    getUserTheme,
    setUserTheme
}


type ThemeType = string | null;