import React, { createContext, useEffect, useMemo, useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import changeNavigationBarColor from 'react-native-navigation-bar-color';
import { themes } from '../colors';

// themeState, setTheme
export const ThemeContext = createContext({ theme: themes.light });

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(useColorScheme() ? themes.dark : themes.light);

    useEffect(() => {
        setTheme(themes.light);
        changeNavigationBarColor(theme.headerBarBackground, theme.isLight, false);
    }, [theme]);

    const obj = useMemo(() => {
        return { theme, setTheme };
    }, [theme]);

    return (
        <ThemeContext.Provider value={obj}>
            <StatusBar backgroundColor={theme.headerBarBackground} barStyle={theme.statusBarContent} />
            {children}
        </ThemeContext.Provider>
    );
}
