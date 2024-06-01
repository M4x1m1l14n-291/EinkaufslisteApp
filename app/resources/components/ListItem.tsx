import { ProductType } from '../provider/DataProvider.tsx';
import { ThemeType } from '../colors.tsx';
import { StyleSheet, Text, View } from 'react-native';
import TickSymbol from '../svg/TickSymbol.tsx';
import React from 'react';

type PropTypes = {
    item: ProductType;
    theme: ThemeType;
    onPress?: any;
};

export function ListItem({ item, theme, onPress }: PropTypes) {
    return (
        <View style={{ ...styles.items, borderColor: theme.text }}>
            <Text style={{ ...styles.itemText, color: theme.text }} allowFontScaling={false} numberOfLines={1}>
                {item.amount > 0 && `${item.amount} | `}
                {item.name}
            </Text>

            <TickSymbol size={35} color={theme.text} onPress={onPress} />
        </View>
    );
}

const styles = StyleSheet.create({
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
