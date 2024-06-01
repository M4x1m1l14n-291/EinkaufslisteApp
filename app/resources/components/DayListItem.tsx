import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { MealType } from '../provider/DataProvider.tsx';
import { ThemeType } from '../colors.tsx';
import CrossSymbol from '../svg/CrossSymbol.tsx';

type PropTypes = {
    item: MealType;
    theme: ThemeType;
    onPressText: any;
    onPressDelete: any;
};

export function DayItem({ item, theme, onPressText, onPressDelete }: PropTypes) {
    return (
        <View style={{ ...styles.container, borderColor: theme.text }}>
            <Text numberOfLines={1} style={{ ...styles.daysText, color: theme.text }}>
                {item.day.substring(0, 3)}
            </Text>
            <Text numberOfLines={1} style={{ ...styles.separator, color: theme.text }}>
                |
            </Text>
            <Text style={{ ...styles.name, color: theme.text }} onPress={onPressText}>
                {item.name}
            </Text>
            {item.name.length > 0 && (
                <CrossSymbol style={styles.delete} size={40} color={theme.text} onPress={onPressDelete} />
            )}
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
        flex: 1,
        paddingRight: 10,
        paddingVertical: 10,
        fontSize: 24,
    },
    delete: {
        justifyContent: 'center',
    },
});
