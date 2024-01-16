import { TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import StyledText from "../texts/StyledText";
import appColors from "../../config/theme";

const StyledButton = ({
  children,
  style,
  textStyle,
  disabled,
  onPress,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, style]}
      disabled={disabled || isLoading}
    >
      <StyledText style={[styles.text, textStyle]}>
        {isLoading ? (
          <ActivityIndicator size="small" color={appColors.white} />
        ) : (
          children
        )}
      </StyledText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.neutral,
    padding: 15,
    borderRadius: 10,
  },
  text: {
    color: appColors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default StyledButton;
