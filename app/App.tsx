import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from 'react-native';

export default function App(): React.JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={isDarkMode ? 'black' : 'white'}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});
