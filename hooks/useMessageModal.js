import { useState } from "react";
import MessagesTypes from "../components/modals/types";

const useMessageModal = () => {
  const [messageModalVisible, setMessageModalVisible] = useState(false);
  const [requiredMessageModalProps, setRequiredMessageModalProps] = useState({
    messageType: MessagesTypes.INFO,
    headerText: "",
    messageText: "",
    onDismiss: () => any,
    onProceed: () => any,
  });

  const [extraMessageModalProps, setExtraMessageModalProps] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isProceeding, setIsProceeding] = useState(false);
  const [isRejecting, setIsRejecting] = useState(false);

  const hideMessageModal = () => {
    setMessageModalVisible(false);
  };

  const showMessageModal = (
    messageType,
    headerText,
    messageText,
    onProceed,
    extraProps
  ) => {
    setMessageModalVisible(true);
    setRequiredMessageModalProps({
      messageType,
      headerText,
      messageText,
      onProceed,
    });
    setExtraMessageModalProps(extraProps);
  };

  const messageModalState = {
    messageModalVisible,
    ...requiredMessageModalProps,
    ...extraMessageModalProps,
    isLoading,
    isProceeding,
    isRejecting,
  };

  return {
    messageModalState,
    hideMessageModal,
    showMessageModal,
    setIsLoading,
    setIsProceeding,
    setIsRejecting,
  };
};

export default useMessageModal;
