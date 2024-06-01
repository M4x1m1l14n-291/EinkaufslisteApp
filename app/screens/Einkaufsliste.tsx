import React, { useContext } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { ThemeContext } from '../resources/provider/ThemeProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DataContext, ProductType } from '../resources/provider/DataProvider';
import TickSymbol from '../resources/svg/TickSymbol';
import { ThemeType } from '../resources/colors.tsx';
import PlusSymbol from '../resources/svg/PlusSymbol.tsx';

export default function Einkaufsliste() {
    const { theme } = useContext(ThemeContext);
    const { products } = useContext(DataContext);

    return (
        <SafeAreaView style={{ ...styles.container, backgroundColor: theme.background }}>
            <FlatList
                style={styles.listContainer}
                data={products}
                renderItem={({ item }) => <ListItem item={item} theme={theme} />}
                ListFooterComponent={
                    <PlusSymbol
                        style={styles.addButton}
                        size={55}
                        color={theme.textColor}
                        onPress={() => console.log('add item')}
                    />
                }
            />
        </SafeAreaView>
    );
}

export function ListItem({ item, theme, onPress }: { item: ProductType; theme: ThemeType; onPress?: any }) {
    return (
        <View style={{ ...styles.items, borderColor: theme.textColor }}>
            <Text style={{ ...styles.itemText, color: theme.textColor }} allowFontScaling={false} numberOfLines={1}>
                {item.amount > 0 && `${item.amount} | `}
                {item.name}
            </Text>

            <TickSymbol size={35} color={theme.textColor} onPress={onPress} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        padding: 5,
    },
    addButton: {
        margin: 10,
        alignSelf: 'center',
    },
    items: {
        marginBottom: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 2,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemText: {
        flex: 1,
        fontSize: 24,
    },
});
