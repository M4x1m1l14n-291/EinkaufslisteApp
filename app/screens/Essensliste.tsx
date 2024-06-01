import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { ThemeContext } from '../resources/provider/ThemeProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DataContext } from '../resources/provider/DataProvider.tsx';

export default function Essensliste() {
    const { theme } = useContext(ThemeContext);
    const { meals, savedMeals } = useContext(DataContext);

    return <SafeAreaView style={{ ...styles.container, backgroundColor: theme.background }} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
