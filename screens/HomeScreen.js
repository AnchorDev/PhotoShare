import React, { useEffect } from "react";
import { Text, View, BackHandler } from "react-native";

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <Text style={{ color: "white" }}>Home</Text>
    </View>
  );
};
export default HomeScreen;
