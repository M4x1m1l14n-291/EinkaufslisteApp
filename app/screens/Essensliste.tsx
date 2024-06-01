import React, { useContext, useState } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

import { DataContext, MealType } from '../resources/provider/DataProvider.tsx';
import ReturnArrowSymbol from '../resources/svg/ReturnArrowSymbol.tsx';
import { ThemeContext } from '../resources/provider/ThemeProvider';
import { DayItem } from '../resources/components/DayListItem.tsx';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlusSymbol from '../resources/svg/PlusSymbol.tsx';
import ListSymbol from '../resources/svg/ListSymbol.tsx';
import { useFocusEffect } from '@react-navigation/native';

const emptyItem: MealType = {
    name: '',
    day: '',
    products: [],
};

export default function Essensliste({ navigation }: { navigation: any }) {
    const { theme } = useContext(ThemeContext);
    const { meals, savedMeals, addDay, modifyDay } = useContext(DataContext);

    const [daysVisible, setDaysVisible] = useState(true);
    const [selectedItem, setSelectedItem] = useState(emptyItem);

    console.log(selectedItem);

    function setBackButton() {
        navigation.setOptions({
            headerLeft: () =>
                returnButton(theme.text, () => {
                    navigation.setOptions({ headerLeft: null });
                    setSelectedItem(emptyItem);
                    setDaysVisible(true);
                }),
        });
    }
    useFocusEffect(() =>
        navigation.setOptions({
            headerRight: () =>
                listButton(theme.text, () => {
                    navigation.setOptions({ headerLeft: null });
                    setSelectedItem(emptyItem);
                    setDaysVisible(!daysVisible);
                }),
        })
    );

    return (
        <SafeAreaView style={{ ...styles.container, backgroundColor: theme.background }}>
            {daysVisible ? (
                <FlatList
                    key={'days list'}
                    style={styles.listContainer}
                    data={meals}
                    renderItem={({ item }) => (
                        <DayItem
                            item={item}
                            theme={theme}
                            onPressText={() => {
                                setBackButton();
                                setSelectedItem({ name: item.name, day: item.day, products: item.products });
                                setDaysVisible(false);
                            }}
                            onPressDelete={() => modifyDay({ name: '', day: item.day, products: [] })}
                        />
                    )}
                    ListFooterComponent={
                        <PlusSymbol style={styles.addButton} size={55} color={theme.text} onPress={addDay} />
                    }
                />
            ) : (
                <FlatList
                    key={'saved meals list'}
                    style={styles.listContainer}
                    data={savedMeals}
                    renderItem={({ item }) => <Text style={{ color: theme.text }}>{item.name}</Text>}
                    ListFooterComponent={
                        <PlusSymbol style={styles.addButton} size={55} color={theme.text} onPress={() => {}} />
                    }
                />
            )}
        </SafeAreaView>
    );
}

function returnButton(color: string, onPress: any) {
    return <ReturnArrowSymbol style={styles.returnIcon} size={40} color={color} onPress={onPress} />;
}

function listButton(color: string, onPress: any) {
    return <ListSymbol style={styles.listIcon} size={35} color={color} onPress={onPress} />;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        paddingLeft: 5,
        paddingVertical: 5,
    },
    returnIcon: {
        marginLeft: 10,
    },
    listIcon: {
        marginRight: 10,
    },
    addButton: {
        margin: 10,
        alignSelf: 'center',
    },
});
