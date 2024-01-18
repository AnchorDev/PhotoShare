import React, { useState, useEffect, useCallback } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import * as Font from "expo-font";
import { useAuth } from "../../context/AuthContext";

const TabsHeader = () => {
  const navigation = useNavigation();
  const [appIsReady, setAppIsReady] = useState(false);
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  const handleNotificationsButtonPress = () => {
    navigation.navigate("NotificationsScreen");
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
            fontSize: 26,
          }}
        >
          PhotoShare
        </Text>
      </View>

      <TouchableOpacity
        onPress={handleNotificationsButtonPress}
        style={styles.rightContainer}
      >
        <Ionicons
          name="heart-outline"
          size={26}
          color="white"
          style={styles.iconMargin}
        />
      </TouchableOpacity>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 5,
    borderBottomWidth: 0.17,
    borderBottomColor: "rgba(169, 169, 169, 0.3)",
  },
  leftContainer: {
    alignItems: "flex-start",
  },
  centerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 35,
  },
  rightContainer: {
    alignItems: "flex-end",
  },
  iconMargin: {
    marginRight: 20,
  },
});

export default TabsHeader;
