import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import ThemeProvider from './resources/provider/ThemeProvider';
import Navigation from './resources/navigation/Navigation';

export default function App() {
    return (
        <Providers>
            <Navigation />
        </Providers>
    );
}

function Providers({ children }) {
    return (
        <ThemeProvider>
            <SafeAreaProvider>{children}</SafeAreaProvider>
        </ThemeProvider>
    );
}
