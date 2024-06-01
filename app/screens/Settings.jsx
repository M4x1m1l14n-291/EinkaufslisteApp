import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { ThemeContext } from '../resources/provider/ThemeProvider';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Settings() {
    const { theme } = useContext(ThemeContext);

    return <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
