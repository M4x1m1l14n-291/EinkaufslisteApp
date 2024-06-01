import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import { MealType } from '../provider/DataProvider.tsx';
import { ThemeType } from '../colors.tsx';

type PropTypes = {
    item: MealType;
    theme: ThemeType;
    onPressItem: any;
};

export function DayItem({ item, theme, onPressItem }: PropTypes) {
    return (
        <TouchableOpacity style={{ ...styles.container, borderColor: theme.text }} onPress={onPressItem}>
            <Text numberOfLines={1} style={{ ...styles.daysText, color: theme.text }}>
                {item.day.substring(0, 3)}
            </Text>
            <Text numberOfLines={1} style={{ ...styles.separator, color: theme.text }}>
                |
            </Text>
            <Text style={{ ...styles.name, color: theme.text }}>{item.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 2,
        borderRadius: 5,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        paddingRight: 5,
        flexDirection: 'row',
        alignContent: 'center',
    },
    daysText: {
        width: '16%',
        paddingVertical: 10,
        paddingLeft: 10,
        fontSize: 24,
    },
    separator: {
        paddingRight: 5,
        fontSize: 34,
    },
    name: {
        minWidth: '30%',
        paddingRight: 10,
        paddingVertical: 10,
        fontSize: 24,
    },
});
