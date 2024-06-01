import React, { useContext, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { ThemeContext } from '../resources/provider/ThemeProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DataContext } from '../resources/provider/DataProvider';
import PlusSymbol from '../resources/svg/PlusSymbol.tsx';
import { ListItem } from '../resources/components/ListItem.tsx';
import { AddItemModal } from '../resources/components/AddItemModal.tsx';

export default function Einkaufsliste() {
    const { theme } = useContext(ThemeContext);
    const { products, addProduct } = useContext(DataContext);

    const [visible, setVisible] = useState(false);

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
                        color={theme.text}
                        onPress={() => setVisible(true)}
                    />
                }
            />

            <AddItemModal visible={visible} setVisible={setVisible} addProduct={addProduct} theme={theme} />
        </SafeAreaView>
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
});
