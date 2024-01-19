// ChatDetail.js
import React, { useState, useRef } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";

const ChatDetail = ({ route }) => {
  const { profileId } = route.params;
  const [messages, setMessages] = useState([
    { id: 1, sender: "Me", content: "Cześć! Jak się masz?" },
    { id: 2, sender: "WolfFromWallStreet", content: "Hej! Wszystko ok, a u Ciebie?" },
    // ... dodaj więcej wiadomości według potrzeb
  ]);
  const [newMessage, setNewMessage] = useState("");

  const flatListRef = useRef(null);

  const handleSend = () => {
    if (newMessage.trim() === "") return;

    const newMessageObj = { id: messages.length + 1, sender: "Me", content: newMessage };
    setMessages([newMessageObj, ...messages]);
    setNewMessage("");

    // Przewiń do dolnej części listy po dodaniu nowej wiadomości
    flatListRef.current.scrollToOffset({ offset: 0, animated: true });
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        inverted
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={item.sender === "Me" ? styles.sentMessageContainer : styles.receivedMessageContainer}>
            {item.sender !== "Me" && (
              <Image source={require("../../assets/profile1.png")} style={styles.messageProfileImage} />
            )}
            <View style={styles.messageContentContainer}>
              <Text style={item.sender === "Me" ? styles.sentMessageText : styles.receivedMessageText}>
                {item.content}
              </Text>
            </View>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Wpisz wiadomość..."
          value={newMessage}
          onChangeText={(text) => setNewMessage(text)}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Wyślij</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatDetail;
