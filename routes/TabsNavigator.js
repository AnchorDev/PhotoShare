import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TabsHeader from "../components/headers/tabsHeader";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  const navigation = useNavigation();

  const PrzyciskNawigacji = () => (
    <TouchableOpacity
      onPress={() => navigation.navigate("AddImageScreen")}
      style={{
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
      activeOpacity={1}
    >
      <Ionicons
        name="add-circle-outline"
        size={25}
        color="white"
        style={{ paddingLeft: 23, paddingRight: 23 }}
      />
    </TouchableOpacity>
  );

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "white",
        tabBarStyle: [
          {
            position: "absolute",
            backgroundColor: "black",
            //backgroundColor: "transparent",
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
        options={{
          header: () => <TabsHeader />,
          headerShown: true,
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ header: () => <TabsHeader />, headerShown: true }}
      />
      <Tab.Screen
        name="AddPostScreen"
        options={{
          tabBarButton: () => <PrzyciskNawigacji />,
        }}
      >
        {() => <component />}
      </Tab.Screen>
      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ header: () => <TabsHeader />, headerShown: true }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ header: () => <TabsHeader />, headerShown: true }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
