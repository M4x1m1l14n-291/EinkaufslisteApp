import React, { createContext, useEffect, useMemo, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { asyncStorageKeys } from '../constants.tsx';

const emptyData: DataStructureType = {
    savedProducts: [],
    products: [],
    savedMeals: [],
    meals: [],
};

// savedProducts, products, savedMeals, meals
export const DataContext = createContext(emptyData);

export default function DataProvider({ children }: any) {
    const [data, setData] = useState(emptyData);

    function addMealToSaved(name: string, products: ProductType[]) {
        console.log(name);
        console.log(products);
    }

    async function saveDataToDisk(toSave: DataStructureType) {
        try {
            const jsonSerialized = JSON.stringify(toSave);
            await AsyncStorage.setItem(asyncStorageKeys.data, jsonSerialized);
        } catch (e) {
            console.error(`error when saving data to disk: ${e}`);
        }
    }

    async function loadDataFromDisk() {
        try {
            const loadedData = await AsyncStorage.getItem(asyncStorageKeys.data);
            if (loadedData !== null) {
                const newData: DataStructureType = JSON.parse(loadedData);
                setData(newData);
            }
        } catch (e) {
            console.error(`error when loading theme from disk: ${e}`);
        }
    }

    useEffect(() => {
        loadDataFromDisk().then(() => console.log('DataProvider loaded!'));
    }, []);

    const obj = useMemo(() => {
        return {
            savedProducts: data.savedProducts,
            products: data.products,
            savedMeals: data.savedMeals,
            meals: data.meals,
        };
    }, [data]);

    return <DataContext.Provider value={obj}>{children}</DataContext.Provider>;
}

const testData: DataStructureType = {
    savedProducts: [{ name: 'test product 1' }, { name: 'test product 2' }],
    products: [
        { name: 'test product 1', amount: 2, source: ['test meal 1'] },
        { name: 'test product 2', amount: 3, source: ['test meal 1', 'test meal 2'] },
    ],
    savedMeals: [{ name: 'test meal 1', products: [{ name: 'test product 2', amount: 3, source: ['test meal 1'] }] }],
    meals: [
        {
            name: 'test meal 1',
            day: new Date().toDateString(),
            products: [{ name: 'test product 2', amount: 3, source: ['test meal 1'] }],
        },
    ],
};

export type DataStructureType = {
    savedProducts: SavedProductsType[];
    products: ProductType[];
    savedMeals: SavedMealType[];
    meals: MealType[];
};

export type SavedProductsType = {
    name: string;
};

export type ProductType = {
    name: string;
    amount: number;
    source: string[];
};

export type SavedMealType = {
    name: string;
    products: [ProductType];
};

export type MealType = {
    name: string;
    // Weekday Month Day Year (Sat Jun 01 2024)
    day: string;
    products: [ProductType];
};
