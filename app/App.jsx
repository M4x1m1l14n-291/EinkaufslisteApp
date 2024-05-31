import React from 'react';

import ThemeProvider from './resources/providers/ThemeProvider';
import { NavigationContainer } from '@react-navigation/native';
import EinkaufsListe from './screens/EinkaufsListe.jsx';

export default function App() {
    return (
        <Providers>
            <NavigationContainer>
                <EinkaufsListe />
            </NavigationContainer>
        </Providers>
    );
}

function Providers({ children }) {
    return <ThemeProvider>{children}</ThemeProvider>;
}
