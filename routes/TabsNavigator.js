import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import AddPostScreen from "../screens/AddPostScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CustomHeader from "../components/other/customHeader";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false, // Ustawienie opcji, aby ukryć etykiety
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarStyle: [
          {
            position: "absolute",
            backgroundColor: "transparent",
            padding: 10,
          },
          null,
        ],
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconSize = 25;
          if (route.name === "HomeScreen") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "SearchScreen") {
            iconName = focused ? "search" : "search-outline";
          } else if (route.name === "AddPostScreen") {
            iconName = focused ? "add-circle" : "add-circle-outline";
          } else if (route.name === "SettingsScreen") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "ProfileScreen") {
            iconName = focused ? "person" : "person-outline";
          }
          return <Ionicons name={iconName} size={iconSize} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ header: () => <CustomHeader />, headerShown: true }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="AddPostScreen"
        component={AddPostScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ header: () => <CustomHeader />, headerShown: true }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ header: () => <CustomHeader />, headerShown: true }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
