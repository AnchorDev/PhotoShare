import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, History, Profile, Notification } from "../views";
import {BottomTabIcon} from "../components/BottomTabIcon";


const optionScreen = {
    headerShown: false,
    tabBarShowLabel: false
}

const Tab = createBottomTabNavigator();

export default function TabNav() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, }) => {

                return <BottomTabIcon routeName={route?.name} focused={focused} />;
            }
        })}>
            <Tab.Screen name="Home" component={Home} options={optionScreen} />
            <Tab.Screen name="History" component={History} options={optionScreen} />
            <Tab.Screen name="Profile" component={Profile} options={optionScreen} />
        </Tab.Navigator>
    );
}
