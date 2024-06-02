import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ProductType, SavedProductsType } from '../provider/DataProvider.tsx';
import ReplyArrowSymbol from '../svg/ReplyArrowSymbol.tsx';
import DeleteSymbol from '../svg/DeleteSymbol.tsx';
import TickSymbol from '../svg/TickSymbol.tsx';
import { ThemeType } from '../colors.tsx';

type PropTypes = {
    item: ProductType;
    theme: ThemeType;
    onPress?: any;
};

export function ListItem({ item, theme, onPress }: PropTypes) {
    return (
        <View style={{ ...styles.items, borderColor: theme.text }}>
            <Text style={{ ...styles.number, color: theme.text }} allowFontScaling={false} numberOfLines={1}>
                {item.amount > 0 && `${item.amount} | `}
            </Text>

            <Text style={{ ...styles.itemText, color: theme.text }} allowFontScaling={false} numberOfLines={1}>
                {item.name}
            </Text>

            <TickSymbol size={35} color={theme.text} onPress={onPress} />
        </View>
    );
}

type PropTypesSaved = {
    item: SavedProductsType;
    theme: ThemeType;
    onDeletePress?: any;
    onAddPress?: any;
};

export function ListItemSaved({ item, theme, onDeletePress, onAddPress }: PropTypesSaved) {
    return (
        <View style={{ ...styles.items, borderColor: theme.text }}>
            <DeleteSymbol size={35} color={theme.text} onLongPress={onDeletePress} />

            <Text style={{ ...styles.itemText, color: theme.text }} allowFontScaling={false} numberOfLines={1}>
                {` ${item.name}`}
            </Text>

            <ReplyArrowSymbol size={35} color={theme.text} onPress={onAddPress} />
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
    number: {
        fontSize: 24,
    },
    itemText: {
        flex: 1,
        fontSize: 24,
    },
});
