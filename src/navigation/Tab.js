import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Profile, Notification, Search, AddPost } from "../views";
import { BottomTabIcon } from "../components/BottomTabIcon";

const optionScreen = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: {
        backgroundColor: '#101010',
        borderTopColor: '#101010',
        borderTopWidth: 1,
    },
}

const Tab = createBottomTabNavigator();

export default function TabNav() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
                return <BottomTabIcon routeName={route?.name} focused={focused} />;
            },
        })}
            tabBarOptions={{
                style: {
                    backgroundColor: '#101010',
                    borderTopColor: '#101010',
                    borderTopWidth: 1,
                },
            }}
        >
            <Tab.Screen name="Home" component={Home} options={optionScreen} />
            <Tab.Screen name="Search" component={Search} options={optionScreen} />
            <Tab.Screen name="AddPost" component={AddPost} options={optionScreen} />
            <Tab.Screen name="Notification" component={Notification} options={optionScreen} />
            <Tab.Screen name="Profile" component={Profile} options={optionScreen} />
        </Tab.Navigator>
    );
}
