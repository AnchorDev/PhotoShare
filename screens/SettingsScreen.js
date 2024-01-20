import React from "react";
import { Text, View, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsScreen = () => {
  const handleClearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log("AsyncStorage cleared successfully!");
    } catch (error) {
      console.error("Error clearing AsyncStorage:", error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black", // Assuming you want a black background
      }}
    >
      <Text style={{ color: "white", marginBottom: 20 }}>settings</Text>

      {/* Button to clear AsyncStorage */}
      <Button
        title="Clear AsyncStorage"
        onPress={handleClearAsyncStorage}
        color="red" // You can customize the button color
      />
    </View>
  );
};

export default SettingsScreen;
