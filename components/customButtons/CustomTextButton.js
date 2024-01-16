import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: "#0087fb",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default CustomButton;
