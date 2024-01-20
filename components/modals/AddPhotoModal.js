import React from "react";
import { Modal, Pressable, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import StyledText from "../texts/StyledText";
import StyledButton from "../customButtons/StyledButton";
import appColors from "../../config/theme";

const AddPhotoModal = ({
  addPhotoModalVisible,
  addPhotoFromCamera,
  addPhotoFromGallery,
  onDismiss,
}) => {
  return (
    <Modal
      animationType="slide"
      visible={addPhotoModalVisible}
      transparent={true}
    >
      <Pressable onPress={onDismiss} style={styles.container}>
        <View style={styles.modalView}>
          <StyledText bold big style={styles.headerText}>
            Dodaj zdjęcie
          </StyledText>
          <View style={styles.decisionRow}>
            <StyledButton
              style={[styles.decisionButton, { backgroundColor: "#0a101f" }]}
              onPress={addPhotoFromCamera}
            >
              <View style={styles.buttonContent}>
                <Ionicons name="camera" size={25} color={appColors.white} />
                <StyledText bold style={styles.buttonText}>
                  Aparat
                </StyledText>
              </View>
            </StyledButton>
            <StyledButton
              style={[styles.decisionButton, { backgroundColor: "#0a101f" }]}
              onPress={addPhotoFromGallery}
            >
              <View style={styles.buttonContent}>
                <Ionicons name="images" size={25} color={appColors.white} />
                <StyledText bold style={styles.buttonText}>
                  Galeria
                </StyledText>
              </View>
            </StyledButton>
            <StyledButton
              style={[
                styles.decisionButton,
                { backgroundColor: appColors.fail },
              ]}
              onPress={onDismiss}
            >
              <Ionicons name="close" size={25} />
            </StyledButton>
          </View>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalView: {
    backgroundColor: appColors.secondary,
    width: "100%",
    alignItems: "center",
    paddingTop: 35,
    paddingBottom: 35,
    borderRadius: 15,
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  modalContent: {
    width: "100%",
    alignItems: "center",
    padding: 20,
  },
  headerText: {
    textAlign: "center",
    marginBottom: 30,
  },
  messageText: {
    textAlign: "center",
    marginBottom: 20,
  },
  decisionRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  decisionButton: {
    width: 80,
    justifyContent: "center",
  },
  buttonContent: {
    alignItems: "center",
    justifyContent: "center",
  },
});
export default AddPhotoModal;
