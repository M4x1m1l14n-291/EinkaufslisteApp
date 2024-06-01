import React, { useContext } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { ThemeContext } from '../resources/provider/ThemeProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DataContext } from '../resources/provider/DataProvider.tsx';
import { DayItem } from '../resources/components/DayListItem.tsx';
import PlusSymbol from '../resources/svg/PlusSymbol.tsx';

export default function Essensliste() {
    const { theme } = useContext(ThemeContext);
    const { meals, savedMeals, addDay, modifyDay } = useContext(DataContext);

    return (
        <SafeAreaView style={{ ...styles.container, backgroundColor: theme.background }}>
            <FlatList
                style={styles.listContainer}
                data={meals}
                renderItem={({ item }) => (
                    <DayItem
                        item={item}
                        theme={theme}
                        onPressText={() => modifyDay({ name: 'test1', day: item.day, products: [] })}
                        onPressDelete={() => modifyDay({ name: '', day: item.day, products: [] })}
                    />
                )}
                ListFooterComponent={
                    <PlusSymbol style={styles.addButton} size={55} color={theme.text} onPress={addDay} />
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        paddingLeft: 5,
        paddingVertical: 5,
    },
    addButton: {
        margin: 10,
        alignSelf: 'center',
    },
});
