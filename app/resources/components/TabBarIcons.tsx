import React from 'react';

import SettingsSymbol from '../svg/SettingsSymbol';
import ListSymbol from '../svg/ListSymbol';
import MealSymbol from '../svg/MealSymbol';
import { pagesKeys } from '../constants.tsx';

export default function TabBarIcons({ name = '', size = 24, color = 'black' }) {
    switch (name) {
        case pagesKeys.einkaufen:
            return <ListSymbol size={size} color={color} />;
        case pagesKeys.einstellungen:
            return <SettingsSymbol size={size} color={color} />;
        case pagesKeys.essen:
            return <MealSymbol size={size} color={color} />;
        default:
            return null;
    }
}
