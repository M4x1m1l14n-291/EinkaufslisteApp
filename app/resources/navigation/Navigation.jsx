import React, { useContext } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import EinkaufsListe from '../../screens/EinkaufsListe';
import TabBarIcons from '../components/TabBarIcons';
import { ThemeContext } from '../provider/ThemeProvider';
import Essensliste from '../../screens/Essensliste';
import Settings from '../../screens/Settings';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    const { theme } = useContext(ThemeContext);

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => {
                    return {
                        tabBarIcon: getTabBarIcon(route),
                        tabBarShowLabel: false,
                        tabBarStyle: { backgroundColor: theme.headerBarBackground },
                        tabBarActiveTintColor: theme.textColor,
                        tabBarInactiveTintColor: theme.textInactive,
                        tabBarHideOnKeyboard: true,
                        headerStyle: { backgroundColor: theme.headerBarBackground },
                        headerTitleAlign: 'center',
                        headerTintColor: theme.textColor,
                    };
                }}
            >
                <Tab.Screen name={'ESSEN'} component={Essensliste} />
                <Tab.Screen name={'EINKAUFEN'} component={EinkaufsListe} />
                <Tab.Screen name={'EINSTELLUNGEN'} component={Settings} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

function getTabBarIcon(route) {
    return ({ focused, color, size }) => {
        return <TabBarIcons name={route.name} size={size + 8 + (focused ? 4 : 0)} color={color} />;
    };
}
