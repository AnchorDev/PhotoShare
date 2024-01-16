import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
const window = Dimensions.get("window");

const CustomInput = ({
  placeholder,
  placeholderTextColor,
  value,
  setValue,
  type,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  if (type === "classic") {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          value={value}
          onChangeText={setValue}
          style={{ width: "100%", color: "white" }}
        />
      </View>
    );
  } else if (type === "password") {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={!showPassword}
          value={value}
          onChangeText={setValue}
          style={{ width: "90%", color: "white" }}
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <FontAwesome
            name={showPassword ? "eye" : "eye-slash"}
            size={20}
            color="white"
          />
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  inputContainer: {
    width: window.width - 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 10,
    borderRadius: 10,
  },
});

export default CustomInput;
