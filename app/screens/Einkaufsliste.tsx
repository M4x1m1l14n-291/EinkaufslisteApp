import React, { useContext, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { ListItem, ListItemSaved } from '../resources/components/ListItems.tsx';
import { AddItemModal } from '../resources/components/AddItemModal.tsx';
import { ThemeContext } from '../resources/provider/ThemeProvider';
import { DataContext } from '../resources/provider/DataProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import PlusSymbol from '../resources/svg/PlusSymbol.tsx';
import ListSymbol from '../resources/svg/ListSymbol.tsx';
import { pagesKeys } from '../resources/constants.tsx';

export default function Einkaufsliste({ navigation }: { navigation: any }) {
    const { theme } = useContext(ThemeContext);
    const { products, savedProducts, addProduct, removeProduct, removeSavedProduct } = useContext(DataContext);

    const [productsListVisible, setProductsListVisible] = useState(true);
    const [addItemVisible, setAddItemVisible] = useState(false);

    useFocusEffect(() =>
        navigation.setOptions({
            headerRight: () =>
                listButton(theme.text, () => {
                    navigation.setOptions({ title: productsListVisible ? pagesKeys.gespeichert : pagesKeys.einkaufen });
                    setProductsListVisible(!productsListVisible);
                }),
        })
    );

    return (
        <SafeAreaView style={{ ...styles.container, backgroundColor: theme.background }}>
            {productsListVisible ? (
                <>
                    <FlatList
                        key={'products list'}
                        style={styles.listContainer}
                        data={products}
                        renderItem={({ item }) => (
                            <ListItem item={item} theme={theme} onPress={() => removeProduct(item.name)} />
                        )}
                        ListFooterComponent={
                            <PlusSymbol
                                style={styles.addButton}
                                size={55}
                                color={theme.text}
                                onPress={() => setAddItemVisible(true)}
                            />
                        }
                    />

                    <AddItemModal
                        key={'add product'}
                        visible={addItemVisible}
                        setVisible={setAddItemVisible}
                        addProduct={addProduct}
                        theme={theme}
                    />
                </>
            ) : (
                <FlatList
                    key={'saved products list'}
                    style={styles.listContainer}
                    data={savedProducts}
                    renderItem={({ item }) => (
                        <ListItemSaved
                            item={item}
                            theme={theme}
                            onDeletePress={() => removeSavedProduct(item.name)}
                            onAddPress={() => addProduct({ name: item.name, amount: 0, source: [] })}
                        />
                    )}
                />
            )}
        </SafeAreaView>
    );
}

function listButton(color: string, onPress: any) {
    return <ListSymbol style={styles.listIcon} size={35} color={color} onPress={onPress} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listIcon: {
        marginRight: 10,
    },
    listContainer: {
        padding: 5,
    },
    addButton: {
        margin: 10,
        alignSelf: 'center',
    },
});
