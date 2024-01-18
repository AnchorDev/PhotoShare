import { createStackNavigator } from "@react-navigation/stack";
import ChatScreen from "../screens/ChatScreen";
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
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default MainContentNavigator;
