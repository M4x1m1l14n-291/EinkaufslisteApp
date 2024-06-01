import React, { createContext, useEffect, useMemo, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { asyncStorageKeys } from '../constants.tsx';

const emptyData: DataStructureType = {
    savedProducts: [],
    products: [],
    savedMeals: [],
    meals: [],
};
const emptyFunctions: EmptyFunctionsType = {
    addProduct: () => {},
    removeProduct: () => {},
    removeSavedProduct: () => {},
    addDay: () => {},
};

type EmptyFunctionsType = {
    addProduct: ({ name, amount, source }: ProductType) => void;
    removeProduct: (name: string) => void;
    removeSavedProduct: (name: string) => void;
    addDay: () => void;
};

const today = new Date().toDateString();

export const DataContext = createContext({ ...emptyData, ...emptyFunctions });

export default function DataProvider({ children }: any) {
    const [data, setData] = useState(emptyData);

    function addProduct({ name, amount, source }: ProductType) {
        const products = data.products.find(v => v.name === name)
            ? data.products
            : [{ name, amount, source }, ...data.products];
        const savedProducts = data.savedProducts.find(v => v.name === name)
            ? data.savedProducts
            : [...data.savedProducts, { name, amount, source }].sort((a, b) => {
                  return a.name.localeCompare(b.name);
              });
        const newData: DataStructureType = {
            ...data,
            products,
            savedProducts,
        };
        setData(newData);
        saveDataToDisk(newData).then();
    }
    function removeProduct(name: string) {
        const newData: DataStructureType = {
            ...data,
            products: data.products.filter(value => value.name !== name),
        };
        setData(newData);
        saveDataToDisk(newData).then();
    }
    function removeSavedProduct(name: string) {
        const newData: DataStructureType = {
            ...data,
            savedProducts: data.savedProducts.filter(value => value.name !== name),
        };
        setData(newData);
        saveDataToDisk(newData).then();
    }

    function addDay() {
        function meals() {
            if (data.meals.length > 0) {
                const lastDayDate = data.meals.at(data.meals.length - 1)!.day;
                const nextDayDate = new Date(new Date(lastDayDate).getTime() + 86400000).toDateString();
                return [
                    ...data.meals,
                    {
                        name: '',
                        day: nextDayDate,
                        products: [],
                    },
                ];
            }
            return [{ name: '', day: today, products: [] }];
        }

        const newData: DataStructureType = {
            ...data,
            meals: meals(),
        };
        setData(newData);
        saveDataToDisk(newData).then();
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

            addProduct,
            removeProduct,
            removeSavedProduct,
            addDay,
        };
    }, [data]);

    return <DataContext.Provider value={obj}>{children}</DataContext.Provider>;
}

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
    products: ProductType[];
};
export type MealType = {
    name: string;
    // Sat Jun 01 2024
    day: string;
    products: ProductType[];
};
