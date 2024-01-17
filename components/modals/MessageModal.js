import React, { useEffect } from "react";
import {
  Modal,
  Pressable,
  View,
  StyleSheet,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import StyledText from "../texts/StyledText";
import StyledButton from "../customButtons/StyledButton";
import appColors from "../../config/theme";
import MessageTypes from "./types";

const MessageModal = ({
  messageModalVisible,
  messageType,
  headerText,
  messageText,
  buttonText,
  altButtonText,
  onDismiss,
  onProceed,
  onReject,
  isLoading,
  isProceeding,
  isRejecting,
}) => {
  let messageIconName,
    messageThemeColor = "";

  useEffect(() => {
    if (messageModalVisible) {
      StatusBar.setBarStyle(appColors.statusBar);
    } else {
      StatusBar.setBarStyle("default");
    }
  }, [messageModalVisible]);

  switch (messageType) {
    case MessageTypes.FAIL:
      messageIconName = "close";
      messageThemeColor = appColors.fail;
      break;
    case MessageTypes.SUCCESS:
      messageIconName = "check";
      messageThemeColor = appColors.success;
      break;
    case MessageTypes.WARNING:
      messageIconName = "alert-circle-outline";
      messageThemeColor = appColors.warning;
      break;
    case MessageTypes.DECISION:
      messageIconName = "alert-circle-check-outline";
      messageThemeColor = appColors.decision;
      break;
    case MessageTypes.DANGEROUS_DECISION:
      messageIconName = "alert-circle-check-outline";
      messageThemeColor = appColors.fail;
      break;
    default:
      messageIconName = "information-variant";
      messageThemeColor = appColors.info;
      break;
  }

  return (
    <Modal
      animationType="slide"
      visible={messageModalVisible}
      transparent={true}
    >
      <Pressable onPress={onDismiss} style={styles.container}>
        {isLoading && <ActivityIndicator size={70} color={appColors.white} />}

        {!isLoading && (
          <View style={styles.modalView}>
            <View
              style={[styles.modalIcon, { backgroundColor: messageThemeColor }]}
            >
              <MaterialCommunityIcons
                name={messageIconName}
                size={75}
                color={appColors.white}
              />
            </View>
            <View style={styles.modalContent}>
              <StyledText bold big style={styles.headerText}>
                {headerText || "HEADER"}
              </StyledText>
              <StyledText style={styles.messageText}>
                {messageText || "MESSAGE"}
              </StyledText>

              {messageType === MessageTypes.DECISION ||
              messageType === MessageTypes.DANGEROUS_DECISION ? (
                <View style={styles.decisionRow}>
                  <StyledButton
                    style={styles.decisionButton}
                    onPress={onReject}
                    isLoading={isRejecting}
                  >
                    {altButtonText || (
                      <>
                        Nie
                        <MaterialCommunityIcons name="close" size={16} />
                      </>
                    )}
                  </StyledButton>
                  <StyledButton
                    style={[
                      styles.decisionButton,
                      { backgroundColor: messageThemeColor },
                    ]}
                    onPress={onProceed}
                    isLoading={isProceeding}
                  >
                    {buttonText || (
                      <>
                        Tak <MaterialCommunityIcons name="check" size={16} />
                      </>
                    )}
                  </StyledButton>
                </View>
              ) : (
                <StyledButton
                  style={{ backgroundColor: messageThemeColor }}
                  onPress={onProceed}
                  isLoading={isProceeding}
                >
                  {buttonText || "Ok"}
                </StyledButton>
              )}
            </View>
          </View>
        )}
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
    paddingTop: 45,
    borderRadius: 15,
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  modalIcon: {
    backgroundColor: appColors.neutral,
    height: 100,
    width: 100,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: -50,
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
    marginBottom: 10,
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
    width: "auto",
  },
});

export default MessageModal;
