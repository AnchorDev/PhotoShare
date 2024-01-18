import React, { useState, useEffect, useCallback } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, CommonActions } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import * as Font from "expo-font";
import { useAuth } from "../../context/AuthContext";

const CustomHeader = () => {
  const navigation = useNavigation();
  const [appIsReady, setAppIsReady] = useState(false);
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const handleChatButtonPress = () => {
    navigation.navigate("ChatScreen");
  };

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({ Pacifico_400Regular });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.headerContainer} onLayout={onLayoutRootView}>
      <TouchableOpacity onPress={handleLogout} style={styles.leftContainer}>
        <Ionicons name="log-out-outline" size={26} color="white" />
      </TouchableOpacity>

      <View style={styles.centerContainer}>
        <Text
          style={{
            color: "white",
            fontFamily: "Pacifico_400Regular",
            fontSize: 20,
          }}
        >
          PhotoShare
        </Text>
      </View>

      <TouchableOpacity
        onPress={handleChatButtonPress}
        style={styles.rightContainer}
      >
        <Ionicons name="paper-plane-outline" size={26} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    padding: 20,
    borderBottomWidth: 0.17,
    borderBottomColor: "rgba(169, 169, 169, 0.3)",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
  },
  rightContainer: {
    alignItems: "flex-end",
  },
  iconMargin: {
    marginLeft: 10,
  },
});

export default CustomHeader;
