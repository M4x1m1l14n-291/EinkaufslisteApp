import React from 'react';

import SettingsSymbol from '../svg/SettingsSymbol';
import ListSymbol from '../svg/ListSymbol';
import MealSymbol from '../svg/MealSymbol';

export default function TabBarIcons({ name, size = 24, color = 'black' }) {
    switch (name) {
        case 'EINKAUFEN':
            return <ListSymbol size={size} color={color} />;
        case 'EINSTELLUNGEN':
            return <SettingsSymbol size={size} color={color} />;
        case 'ESSEN':
            return <MealSymbol size={size} color={color} />;
        default:
            return undefined;
    }
}
