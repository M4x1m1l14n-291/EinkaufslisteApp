import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { MealType, SavedMealType } from '../provider/DataProvider.tsx';
import { ThemeType } from '../colors.tsx';
import CrossSymbol from '../svg/CrossSymbol.tsx';
import DeleteSymbol from '../svg/DeleteSymbol.tsx';
import ReplyArrowSymbol from '../svg/ReplyArrowSymbol.tsx';
import { dayNames } from '../constants.tsx';

type PropTypes = {
    item: MealType;
    theme: ThemeType;
    onPressText: any;
    onPressDelete: any;
};

export function DayItem({ item, theme, onPressText, onPressDelete }: PropTypes) {
    const day = dayNames[new Date(item.day).getDay()];

    return (
        <View style={{ ...styles.container, borderColor: theme.text }}>
            <Text
                numberOfLines={1}
                allowFontScaling={false}
                style={{ ...styles.daysText, width: day.length * 24, color: theme.text }}
            >
                {day}
            </Text>
            <Text numberOfLines={1} allowFontScaling={false} style={{ ...styles.separator, color: theme.text }}>
                |
            </Text>
            <Text
                numberOfLines={1}
                allowFontScaling={false}
                style={{ ...styles.name, color: theme.text }}
                onPress={onPressText}
            >
                {item.name.length > 0 ? item.name : '...'}
            </Text>
            {item.name.length > 0 && (
                <CrossSymbol style={styles.delete} size={40} color={theme.text} onPress={onPressDelete} />
            )}
        </View>
    );
}

type PropTypesSaved = {
    item: SavedMealType;
    theme: ThemeType;
    onLongPress: any;
    onPress: any;
    selectedMode: boolean;
};

export function MealItem({ item, theme, onLongPress, onPress, selectedMode }: PropTypesSaved) {
    return (
        <View style={{ ...styles.items, borderColor: theme.text }}>
            <DeleteSymbol size={35} color={theme.text} onLongPress={onLongPress} />

            <Text style={{ ...styles.name, color: theme.text }} allowFontScaling={false} numberOfLines={1}>
                {` ${item.name}`}
            </Text>
            {selectedMode && <ReplyArrowSymbol size={35} color={theme.text} onPress={onPress} />}
        </View>
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
    items: {
        margin: 2,
        paddingHorizontal: 10,
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    daysText: {
        paddingVertical: 10,
        paddingLeft: 10,
        fontSize: 24,
    },
    separator: {
        paddingRight: 5,
        fontSize: 34,
    },
    name: {
        flex: 1,
        maxWidth: '70%',
        paddingRight: 10,
        paddingVertical: 10,
        fontSize: 24,
    },
    delete: {
        justifyContent: 'center',
    },
});
