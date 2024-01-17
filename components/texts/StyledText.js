import { Text } from "react-native";
import appColors from "../../config/theme";

const StyledText = ({ children, small, big, bold, style }) => {
  return (
    <Text
      style={[
        {
          color: appColors.tint,
          fontSize: small ? 13 : big ? 24 : 16,
          fontWeight: bold ? "bold" : "normal",
          letterSpacing: 0.25,
          textAlign: "center",
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default StyledText;
