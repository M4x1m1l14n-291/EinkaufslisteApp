import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeProvider from './resources/provider/ThemeProvider';
import Navigation from './resources/navigation/Navigation.tsx';
import DataProvider from './resources/provider/DataProvider';

export default function App() {
    return (
        <Providers>
            <Navigation />
        </Providers>
    );
}

function Providers({ children }: any) {
    return (
        <ThemeProvider>
            <DataProvider>
                <SafeAreaProvider>{children}</SafeAreaProvider>
            </DataProvider>
        </ThemeProvider>
    );
}
