import React, { useContext } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import EinkaufsListe from '../../screens/EinkaufsListe';
import TabBarIcons from '../components/TabBarIcons';
import { ThemeContext } from '../provider/ThemeProvider';
import Essensliste from '../../screens/Essensliste';
import Settings from '../../screens/Settings';
import ThemeSymbol from '../svg/ThemeSymbol';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    const { theme, switchTheme } = useContext(ThemeContext);

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={'EINKAUFEN'}
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
                <Tab.Screen
                    name={'EINSTELLUNGEN'}
                    component={Settings}
                    options={{
                        headerRight: () => themeButton(theme.textColor, switchTheme),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

function getTabBarIcon(route) {
    return ({ focused, color, size }) => {
        return <TabBarIcons name={route.name} size={size + 8 + (focused ? 4 : 0)} color={color} />;
    };
}

function themeButton(color, onPress) {
    // eslint-disable-next-line react-native/no-inline-styles
    return <ThemeSymbol key={'themeButton'} style={{ marginRight: 10 }} size={40} color={color} onPress={onPress} />;
}
