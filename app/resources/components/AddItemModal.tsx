import React, { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';

import { ProductType } from '../provider/DataProvider.tsx';
import CrossSymbol from '../svg/CrossSymbol.tsx';
import TickSymbol from '../svg/TickSymbol.tsx';
import { ThemeType } from '../colors.tsx';

type PropType = {
    visible: boolean;
    setVisible: (state: boolean) => void;
    addProduct: ({ name, amount, source }: ProductType) => void;
    theme: ThemeType;
};

export function AddItemModal({ visible, setVisible, addProduct, theme }: PropType) {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);

    if (visible) {
        return (
            <>
                <Pressable style={styles.background} onPress={() => setVisible(false)} />
                <View style={{ ...styles.container, borderColor: theme.text, backgroundColor: theme.background }}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={{ ...styles.numberInput, color: theme.text, borderColor: theme.text }}
                            textAlign={'center'}
                            maxLength={3}
                            inputMode={'numeric'}
                            allowFontScaling={false}
                            placeholder={'0'}
                            placeholderTextColor={theme.text}
                            onChangeText={text => setAmount(parseInt(text, 10))}
                        />

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
                                setAmount(0);
                                setVisible(false);
                            }}
                        />

                        <TickSymbol
                            size={40}
                            color={theme.text}
                            onPress={() => {
                                setName('');
                                setAmount(0);
                                addProduct({ name: name.trim(), amount: amount, source: [] });
                                setVisible(false);
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
