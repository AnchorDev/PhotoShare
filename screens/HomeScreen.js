import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const isFocused = useIsFocused();
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();
  const [userLikes, setUserLikes] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedPosts = await AsyncStorage.getItem("posts");
        const storedUserLikes = await AsyncStorage.getItem("userLikes");

        if (storedPosts) {
          const parsedPosts = JSON.parse(storedPosts);
          setPosts(parsedPosts);
        }

        if (storedUserLikes) {
          const parsedUserLikes = JSON.parse(storedUserLikes);
          setUserLikes(parsedUserLikes);
        }
      } catch (error) {
        console.error("Błąd podczas pobierania danych:", error);
      }
    };

    fetchData();
  }, [isFocused]);

  const handleLike = async (item) => {
    const postId = item.id;
    const updatedUserLikes = { ...userLikes };

    if (updatedUserLikes[postId]) {
      delete updatedUserLikes[postId];
      item.likes = (item.likes || 0) - 1;
    } else {
      updatedUserLikes[postId] = true;
      item.likes = (item.likes || 0) + 1;
    }

    await AsyncStorage.setItem("userLikes", JSON.stringify(updatedUserLikes));
    await AsyncStorage.setItem("posts", JSON.stringify(posts));

    setUserLikes(updatedUserLikes);
    setPosts([...posts]); // Trigger re-render
  };

  const isPostLiked = (postId) => {
    return userLikes[postId] ? true : false;
  };

  return (
    <FlatList
      style={{ marginBottom: 60 }}
      data={posts}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <SafeAreaView style={styles.container}>
          <View style={styles.userInfoContainer}>
            <Ionicons name="person-circle-outline" size={40} color={"white"} />
            <Text style={{ color: "white", fontWeight: "800" }}>
              {item.mail}
            </Text>
          </View>
          {item.image && (
            <Image
              source={{ uri: item.image }}
              style={{
                width: "100%",
                height: 400,
              }}
            />
          )}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleLike(item)}
            >
              <Ionicons
                name={isPostLiked(item.id) ? "heart" : "heart-outline"}
                size={28}
                color={isPostLiked(item.id) ? "#FD1D1D" : "white"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("CommentsScreen")}
            >
              <Ionicons name="chatbubble-outline" size={28} color={"white"} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="share-social-outline" size={28} color={"white"} />
            </TouchableOpacity>
            <View style={{ flex: 1, flexDirection: "row-reverse" }}>
              <TouchableOpacity style={styles.button}>
                <Ionicons name="bookmark-outline" size={28} color={"white"} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.commentsAndLikesContainer}>
            <Text
              style={{
                color: "white",
                fontWeight: "800",
              }}
            >
              Liczba polubień: {item.likes || 0}
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              {item.text && (
                <Text style={{ color: "white", fontWeight: "800" }}>
                  {item.mail}:{" "}
                </Text>
              )}
              <Text style={{ color: "white" }}>{item.text}</Text>
            </View>
          </View>
        </SafeAreaView>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingTop: 5,
  },
  userInfoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "31%",
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: "space-between",
    paddingLeft: 5,
  },
  button: {
    padding: 10,
  },
  lastButton: {
    alignSelf: "flex-end",
    padding: 10,
  },
  commentsAndLikesContainer: {
    paddingLeft: 10,
  },
});

export default HomeScreen;
