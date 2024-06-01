import React, { useContext, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { ThemeContext } from '../resources/provider/ThemeProvider';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function EinkaufsListe() {
    const { theme } = useContext(ThemeContext);

    const [products, setProducts] = useState([]);

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
            <FlatList data={products} renderItem={({ item }) => <View style={{ flex: 1 }} />} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
