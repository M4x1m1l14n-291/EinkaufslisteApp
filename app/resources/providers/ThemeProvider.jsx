import React, { createContext, useMemo, useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import { themes } from '../colors';

// themeState, setTheme
export const ThemeContext = createContext({ theme: themes.light });

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(useColorScheme() ? themes.dark : themes.light);

    const obj = useMemo(() => {
        return { theme, setTheme };
    }, [theme]);

    return (
        <ThemeContext.Provider value={obj}>
            <StatusBar backgroundColor={theme.statusBarBackground} barStyle={theme.statusBarContent} />
            {children}
        </ThemeContext.Provider>
    );
}
