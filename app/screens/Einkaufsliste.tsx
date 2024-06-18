import React, { useCallback, useContext, useEffect, useState } from 'react';
import { BackHandler, FlatList, StyleSheet } from 'react-native';

import { ListItem, ListItemSaved } from '../resources/components/ProductListItems.tsx';
import { AddItemModal } from '../resources/components/AddItemModal.tsx';
import { ThemeContext } from '../resources/provider/ThemeProvider';
import { DataContext } from '../resources/provider/DataProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import PlusSymbol from '../resources/svg/PlusSymbol.tsx';
import ListSymbol from '../resources/svg/ListSymbol.tsx';
import { pagesKeys } from '../resources/constants.tsx';
import ReturnArrowSymbol from '../resources/svg/ReturnArrowSymbol.tsx';

export default function Einkaufsliste({ navigation }: { navigation: any }) {
    const { theme } = useContext(ThemeContext);
    const { products, savedProducts, addProduct, removeProduct, removeSavedProduct } = useContext(DataContext);

    const [productsListVisible, setProductsListVisible] = useState(true);
    const [addItemVisible, setAddItemVisible] = useState(false);

    function switchToList() {
        navigation.setOptions({ title: pagesKeys.gespeichert });
        hideListButton();
        showBackButton();
        setProductsListVisible(false);
    }
    function switchToProducts() {
        navigation.setOptions({ title: pagesKeys.einkaufen });
        hideBackButton();
        showListButton();
        setProductsListVisible(true);
    }

    function showListButton() {
        navigation.setOptions({ headerRight: () => listButton(theme.text, switchToList) });
    }
    function hideListButton() {
        navigation.setOptions({ headerRight: null });
    }

    function showBackButton() {
        navigation.setOptions({
            headerLeft: () =>
                returnButton(theme.text, () => {
                    hideBackButton();
                    switchToProducts();
                    showListButton();
                }),
        });
    }
    function hideBackButton() {
        navigation.setOptions({ headerLeft: null });
    }

    useEffect(() => {
        showListButton();
    }, []);

    useFocusEffect(
        useCallback(() => {
            const onBackPress = () => {
                if (!productsListVisible) {
                    switchToProducts();
                    return true;
                } else {
                    return false;
                }
            };

            const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);

            return () => subscription.remove();
        }, [productsListVisible])
    );

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
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

function returnButton(color: string, onPress: any) {
    return <ReturnArrowSymbol style={styles.returnIcon} size={40} color={color} onPress={onPress} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listIcon: {
        marginRight: 10,
    },
    returnIcon: {
        marginLeft: 10,
    },
    listContainer: {
        padding: 5,
    },
    addButton: {
        margin: 10,
        marginBottom: 60,
        alignSelf: 'center',
    },
});
