import { StatusBarStyle } from 'react-native';

export const themes: { light: ThemeType; dark: ThemeType } = {
    light: {
        type: 'light',
        isLight: true,
        headerBarBackground: 'white',
        background: '#f4f4f4',
        statusBarContent: 'dark-content',
        text: '#000',
        textInactive: 'grey',
    },
    dark: {
        type: 'dark',
        isLight: false,
        headerBarBackground: 'black',
        background: '#191919',
        statusBarContent: 'light-content',
        text: '#fff',
        textInactive: 'grey',
    },
};

export type ThemeType = {
    type: string;
    isLight: boolean;
    headerBarBackground: string;
    background: string;
    statusBarContent: StatusBarStyle;
    text: string;
    textInactive: string;
};
