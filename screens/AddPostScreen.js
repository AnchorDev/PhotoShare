import React, { useState, useEffect } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { useGlobal } from "../context/GlobalContext";
import CustomButton from "../components/customButtons/CustomButton";
import { auth } from "../firebase";
import MessageTypes from "../components/modals/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MessageModal from "../components/modals/MessageModal";
import useMessageModal from "../hooks/useMessageModal";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import StyledButton from "../components/customButtons/StyledButton";
import StyledText from "../components/texts/StyledText";
import appColors from "../config/theme";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { WebView } from "react-native-webview";

const AddPostScreen = () => {
  const [postText, setPostText] = useState("");
  const { image } = useGlobal();
  const navigation = useNavigation();
  const { setImage } = useGlobal();

  const { messageModalState, hideMessageModal, showMessageModal } =
    useMessageModal();

  const handleProceed = () => {
    hideMessageModal();
    navigation.navigate("HomeScreen");
  };

  const handleError = () => {
    hideMessageModal();
    navigation.navigate("HomeScreen");
  };

  const handleReject = () => {
    setImage(null);
    navigation.navigate("HomeScreen");
  };

  const savePost = async () => {
    try {
      const existingPosts = await AsyncStorage.getItem("posts");
      const parsedPosts = existingPosts ? JSON.parse(existingPosts) : [];

      const newPost = {
        id: uuidv4(),
        mail: auth.currentUser?.email,
        image: image,
        text: postText,
        likes: 0,
      };

      parsedPosts.push(newPost);

      await AsyncStorage.setItem("posts", JSON.stringify(parsedPosts));

      const existingUserLikes = await AsyncStorage.getItem("userLikes");
      const parsedUserLikes = existingUserLikes
        ? JSON.parse(existingUserLikes)
        : {};

      parsedUserLikes[auth.currentUser?.email] = [];

      await AsyncStorage.setItem("userLikes", JSON.stringify(parsedUserLikes));

      showMessageModal(
        MessageTypes.SUCCESS,
        "Udało się !",
        "Pomyślnie zapisano posta.",
        handleProceed
      );
    } catch (error) {
      console.error("Błąd podczas zapisywania posta:", error);
      showMessageModal(
        MessageTypes.FAIL,
        "Uwaga!",
        "Wystąpił błąd podczas zapisywania posta.",
        handleError
      );
    }
    setImage(null);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <TextInput
        placeholder="Co słychać?"
        multiline
        numberOfLines={1}
        maxLength={42}
        style={styles.textInput}
        placeholderTextColor="gray"
        value={postText}
        onChangeText={setPostText}
      />
      <View style={styles.decisionRow}>
        <StyledButton
          style={[styles.decisionButton, { backgroundColor: "#0087fb" }]}
          onPress={savePost}
        >
          <View style={styles.buttonContent}>
            <StyledText bold style={styles.buttonText}>
              Dodaj post
            </StyledText>
          </View>
        </StyledButton>
        <StyledButton
          style={[styles.decisionButton, { backgroundColor: appColors.fail }]}
          onPress={handleReject}
        >
          <View style={styles.buttonContent}>
            <StyledText bold style={styles.buttonText}>
              Anuluj
            </StyledText>
          </View>
        </StyledButton>
      </View>
      <MessageModal {...messageModalState} />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    textAlign: "center",
    width: "90%",
    marginBottom: 15,
    color: "white",
  },
  decisionRow: {
    marginTop: 100,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  decisionButton: {
    width: 120,
    flexDirection: "row",
  },
  buttonContent: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  icon: {
    color: "white",
  },
});
export default AddPostScreen;
