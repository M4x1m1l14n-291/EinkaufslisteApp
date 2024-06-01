import React, { useContext } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Einkaufsliste from '../../screens/Einkaufsliste';
import TabBarIcons from '../components/TabBarIcons';
import { ThemeContext } from '../provider/ThemeProvider';
import Essensliste from '../../screens/Essensliste';
import Settings from '../../screens/Settings';
import ThemeSymbol from '../svg/ThemeSymbol';
import { pagesKeys } from '../constants';

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
                        tabBarActiveTintColor: theme.text,
                        tabBarInactiveTintColor: theme.textInactive,
                        tabBarHideOnKeyboard: true,
                        headerStyle: { backgroundColor: theme.headerBarBackground },
                        headerTitleAlign: 'center',
                        headerTintColor: theme.text,
                    };
                }}
            >
                <Tab.Screen name={pagesKeys.essen} component={Essensliste} />
                <Tab.Screen name={pagesKeys.einkaufen} component={Einkaufsliste} />
                <Tab.Screen
                    name={pagesKeys.einstellungen}
                    component={Settings}
                    options={{
                        headerRight: () => themeButton(theme.text, switchTheme),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

function getTabBarIcon({ name }: { name: string }) {
    return ({ focused, color, size }: { focused: boolean; color: string; size: number }) => {
        return <TabBarIcons name={name} size={size + 8 + (focused ? 4 : 0)} color={color} />;
    };
}

function themeButton(color: string, onPress: any) {
    // eslint-disable-next-line react-native/no-inline-styles
    return <ThemeSymbol style={{ marginRight: 10 }} size={40} color={color} onPress={onPress} />;
}
