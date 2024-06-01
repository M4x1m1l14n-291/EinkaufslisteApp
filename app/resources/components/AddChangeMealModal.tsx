import React, { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

import CrossSymbol from '../svg/CrossSymbol.tsx';
import TickSymbol from '../svg/TickSymbol.tsx';
import { ThemeType } from '../colors.tsx';
import { MealType, SavedMealType } from '../provider/DataProvider.tsx';

type PropTypes = {
    visible: boolean;
    setVisible: (state: boolean) => void;
    theme: ThemeType;
    selectedItem: MealType;
    addMeal: ({ name, products }: SavedMealType) => void;
    setMeal: ({ name, products }: SavedMealType, day: string) => void;
};

export function AddChangeMealModal({ visible, setVisible, theme, selectedItem, addMeal, setMeal }: PropTypes) {
    const [name, setName] = useState(selectedItem.name);
    const [products, setProducts] = useState(selectedItem.products);

    if (visible) {
        return (
            <>
                <Pressable style={styles.background} onPress={() => setVisible(false)} />
                <View style={{ ...styles.container, borderColor: theme.text, backgroundColor: theme.background }}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={{ ...styles.textInput, color: theme.text, borderColor: theme.text }}
                            maxLength={30}
                            allowFontScaling={false}
                            onChangeText={setName}
                        />
                    </View>

                    <View style={styles.buttonContainer}>
                        <CrossSymbol
                            size={40}
                            color={theme.text}
                            onPress={() => {
                                setName('');
                                setProducts([]);
                                setVisible(false);
                            }}
                        />

                        <TickSymbol
                            size={40}
                            color={theme.text}
                            onPress={() => {
                                if (name.length > 0) {
                                    if (selectedItem.day.length > 0) {
                                        setMeal({ name, products }, selectedItem.day);
                                    }
                                    addMeal({ name, products });
                                    setName('');
                                    setProducts([]);
                                    setVisible(false);
                                }
                            }}
                        />
                    </View>
                </View>
            </>
        );
    }
    return null;
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    container: {
        width: '95%',
        alignSelf: 'center',
        bottom: '2.5%',
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        position: 'absolute',
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    numberInput: {
        height: 44,
        width: 44,
        borderRadius: 8,
        borderWidth: 2,
        marginRight: 10,
        fontSize: 20,
        padding: 5,
    },
    textInput: {
        flex: 1,
        height: 44,
        borderRadius: 8,
        borderWidth: 2,
        fontSize: 20,
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});
