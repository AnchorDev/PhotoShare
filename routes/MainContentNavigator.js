import { createStackNavigator } from "@react-navigation/stack";
import ChatScreen from "../screens/ChatScreen";
import NotificationsScreen from "../screens/NotificationsScreen";
import TabsNavigator from "./TabsNavigator";
import AddImageScreen from "../screens/AddImageScreen";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AddPostScreen from "../screens/AddPostScreen";
import { GlobalProvider } from "../context/GlobalContext";
import { useNavigation } from "@react-navigation/native";
import CommentsScreen from "../screens/CommentsScreen";
import ChatDetail from "../screens/ChatDetail";

const Stack = createStackNavigator();

export const MainContentNavigator = () => {
  const navigation = useNavigation();

  return (
    <GlobalProvider>
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

        <Stack.Screen
          name="AddImageScreen"
          component={AddImageScreen}
          options={{
            headerTitle: "Dodaj zdjęcie",
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
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 16 }}
                onPress={() => navigation.navigate("AddPostScreen")}
              >
                <Ionicons name="arrow-forward" size={26} color="#0087fb" />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="AddPostScreen"
          component={AddPostScreen}
          options={{
            headerShown: true,
            headerTitle: "Dodaj opis",
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
          name="CommentsScreen"
          component={CommentsScreen}
          options={{
            headerShown: true,
            headerTitle: "Komentarze",
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
    </GlobalProvider>
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
      <Stack.Screen 
      name="ChatDetail" 
      component={ChatDetail} 
      options={{
        headerShown: true,
        headerTitle: "",
        headerStyle: {
          backgroundColor: "black",
        },
      }}
      />
    </Stack.Navigator>
  );
};

export default MainContentNavigator;
