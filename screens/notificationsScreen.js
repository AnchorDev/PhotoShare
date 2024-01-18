import React, { useEffect } from "react";
import { Text, View, BackHandler } from "react-native";

const NotificationsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <Text style={{ color: "white" }}>Notifications</Text>
    </View>
  );
};
export default NotificationsScreen;
