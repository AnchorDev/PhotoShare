import { Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
const window = Dimensions.get("window");

const CustomButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={{ color: "white" }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: window.width - 30,
    alignItems: "center",
    backgroundColor: "#0087fb",
    padding: 10,
    borderRadius: 10,
  },
});

export default CustomButton;
