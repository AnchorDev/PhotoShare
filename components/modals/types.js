import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ColorValue } from "react-native";

const MessageType = {
  FAIL: "FAIL",
  WARNING: "WARNING",
  SUCCESS: "SUCCESS",
  DECISION: "DECISION",
  DANGEROUS_DECISION: "DANGEROUS_DECISION",
  INFO: "INFO",
};

export default MessageType;

export const MessageIconName = Object.keys(MaterialCommunityIcons.glyphMap);
export const MessageThemeType = ColorValue;
