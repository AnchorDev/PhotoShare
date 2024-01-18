import { createStackNavigator } from "@react-navigation/stack";
import ChatScreen from "../screens/ChatScreen";
import NotificationsScreen from "../screens/notificationsScreen";
import TabsNavigator from "./TabsNavigator";

const Stack = createStackNavigator();

export const MainContentNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="Main"
        component={TabsNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{
          headerShown: true,
          headerTitle: "Komunikator",
          headerStyle: {
            backgroundColor: "black",
            borderBottomColor: "white",
            borderBottomWidth: 0.17,
            borderBottomColor: "rgba(169, 169, 169, 0.3)",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />

      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
        options={{
          headerShown: true,
          headerTitle: "Powiadomienia",
          headerStyle: {
            backgroundColor: "black",
            borderBottomColor: "white",
            borderBottomWidth: 0.17,
            borderBottomColor: "rgba(169, 169, 169, 0.3)",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default MainContentNavigator;
