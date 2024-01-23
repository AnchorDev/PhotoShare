import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, StyleSheet, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import AddPhotoModal from "../components/modals/AddPhotoModal";
import { useNavigation } from "@react-navigation/native";

import { useGlobal } from "../context/GlobalContext";

const AddImageScreen = () => {
  const { image } = useGlobal();

  const navigation = useNavigation();

  const { setImage } = useGlobal();

  const [photoModalVisible, setPhotoModalVisible] = useState(false);

  const hidePhotoModal = () => {
    setPhotoModalVisible(false);
    navigation.goBack();
  };

  const showPhotoModal = () => {
    setPhotoModalVisible(true);
  };

  const takePhotoFromCamera = async () => {
    setPhotoModalVisible(false);
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access camera was denied");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 5],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      navigation.goBack();
    }
  };

  useEffect(() => {
    showPhotoModal();
  }, []);

  const choosePhotoFromLibrary = async () => {
    setPhotoModalVisible(false);
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access media library was denied");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 5],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    } else {
      navigation.goBack();
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      {image && <Image source={{ uri: image }} style={styles.selectedImage} />}
      <AddPhotoModal
        addPhotoModalVisible={photoModalVisible}
        addPhotoFromCamera={takePhotoFromCamera}
        addPhotoFromGallery={choosePhotoFromLibrary}
        onDismiss={hidePhotoModal}
      />
    </KeyboardAvoidingView>
  );
};

export default AddImageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },

  textInput: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    textAlign: "center",
    width: "90%",
    marginBottom: 15,
    color: "white",
  },
  selectedImage: {
    width: "100%",
    height: "100%",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    width: "20%",
  },
});
