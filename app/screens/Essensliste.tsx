import React, { useContext, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { AddChangeMealModal } from '../resources/components/AddChangeMealModal.tsx';
import { DataContext, MealType } from '../resources/provider/DataProvider.tsx';
import { DayItem, MealItem } from '../resources/components/DayListItem.tsx';
import ReturnArrowSymbol from '../resources/svg/ReturnArrowSymbol.tsx';
import { ThemeContext } from '../resources/provider/ThemeProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import PlusSymbol from '../resources/svg/PlusSymbol.tsx';
import ListSymbol from '../resources/svg/ListSymbol.tsx';

const emptyItem: MealType = {
    name: '',
    day: '',
    products: [],
};

export default function Essensliste({ navigation }: { navigation: any }) {
    const { theme } = useContext(ThemeContext);
    const { meals, savedMeals, addDay, modifyDay, addMeal, removeMeal } = useContext(DataContext);

    const [daysVisible, setDaysVisible] = useState(true);
    const [addMealVisible, setAddMealVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState(emptyItem);

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
                <>
                    <FlatList
                        key={'saved meals list'}
                        style={styles.listContainer}
                        data={savedMeals}
                        renderItem={({ item }) => (
                            <MealItem
                                item={item}
                                theme={theme}
                                onLongPress={() => removeMeal(item.name)}
                                onPress={() => {
                                    modifyDay({ name: item.name, day: selectedItem.day, products: item.products });
                                    navigation.setOptions({ headerLeft: null });
                                    setSelectedItem(emptyItem);
                                    setDaysVisible(true);
                                }}
                                selectedMode={selectedItem.day.length > 0}
                            />
                        )}
                        ListFooterComponent={
                            <PlusSymbol
                                style={styles.addButton}
                                size={55}
                                color={theme.text}
                                onPress={() => setAddMealVisible(true)}
                            />
                        }
                    />

                    <AddChangeMealModal
                        key={'add meal'}
                        visible={addMealVisible}
                        setVisible={setAddMealVisible}
                        theme={theme}
                        selectedItem={selectedItem}
                        addMeal={({ name, products }) => {
                            addMeal({ name, products });
                        }}
                        setMeal={({ name, products }, day) => {
                            modifyDay({ name, day, products });

                            navigation.setOptions({ headerLeft: null });
                            setSelectedItem(emptyItem);
                            setDaysVisible(!daysVisible);
                        }}
                    />
                </>
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
