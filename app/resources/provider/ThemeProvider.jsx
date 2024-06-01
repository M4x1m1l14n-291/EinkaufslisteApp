import React, { createContext, useEffect, useMemo, useState } from 'react';
import { StatusBar, useColorScheme } from 'react-native';

import changeNavigationBarColor from 'react-native-navigation-bar-color';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { asyncStorageKeys, themeKeys } from '../constants';
import { themes } from '../colors';

// themeState, switchTheme
export const ThemeContext = createContext({ theme: themes.light });

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(useColorScheme() === themeKeys.dark ? themes.dark : themes.light);

    async function saveThemeToDisk(toSave) {
        try {
            await AsyncStorage.setItem(asyncStorageKeys.theme, toSave);
        } catch (e) {
            console.error(`error when saving theme to disk: ${e}`);
        }
    }

    async function loadThemeFromDisk() {
        try {
            const type = await AsyncStorage.getItem(asyncStorageKeys.theme);
            if (type !== null) {
                const newTheme = type === themeKeys.dark ? themes.dark : themes.light;
                changeNavigationBarColor(newTheme.headerBarBackground, newTheme.isLight, false);
                setTheme(newTheme);
            }
        } catch (e) {
            console.error(`error when loading theme from disk: ${e}`);
        }
    }

    function switchTheme() {
        const newTheme = theme.type === themeKeys.dark ? themes.light : themes.dark;
        saveThemeToDisk(newTheme.type).then();
        changeNavigationBarColor(newTheme.headerBarBackground, newTheme.isLight, false);
        setTheme(newTheme);
    }

    useEffect(() => {
        loadThemeFromDisk().then(() => console.log('ThemeProvider loaded!'));
    }, []);

    const obj = useMemo(() => {
        return { theme, switchTheme };
    }, [theme]);

    return (
        <ThemeContext.Provider value={obj}>
            <StatusBar backgroundColor={theme.headerBarBackground} barStyle={theme.statusBarContent} />
            {children}
        </ThemeContext.Provider>
    );
}
