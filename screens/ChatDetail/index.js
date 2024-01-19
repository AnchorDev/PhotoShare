import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "./style";
import { AudioRecorderPlayer } from "react-native-audio-recorder-player";

const ChatDetail = ({ route }) => {
  const { profile } = route.params;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [audioPath, setAudioPath] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const flatListRef = useRef(null);
  const audioRecorderPlayer = new AudioRecorderPlayer();

  useEffect(() => {
    readMessagesFromStorage();

    //clearMessagesFromStorage();
  }, []);

  const readMessagesFromStorage = async () => {
    try {
      const storedMessages = await AsyncStorage.getItem(`messages_${profile.id}`);
      if (!storedMessages) {
        const initialMessage = {
          id: 0,
          sender: profile.username,
          content: profile.message,
        };
        await AsyncStorage.mergeItem(`messages_${profile.id}`, JSON.stringify([initialMessage]));

        setMessages([initialMessage]);
      } else {
        setMessages(JSON.parse(storedMessages));
      }
  } catch (error) {
    console.error("Error reading messages from AsyncStorage:", error);
  }
  };

  const writeMessagesToStorage = async (messages) => {
    try {
      await AsyncStorage.setItem(`messages_${profile.id}`, JSON.stringify(messages));
    } catch (error) {
      console.error("Error writing messages to AsyncStorage:", error);
    }
  };

  const clearMessagesFromStorage = async () => {
    try {
      await AsyncStorage.removeItem(`messages_${profile.id}`);
      setMessages([]);
    } catch (error) {
      console.error("Error clearing messages from AsyncStorage:", error);
    }
  };

  const handleSend = async () => {
    if (newMessage.trim() === "") return;

    const newMessageObj = { id: messages.length + 1, sender: "Me", content: newMessage };
    const updatedMessages = [newMessageObj, ...messages];

    setMessages(updatedMessages);
    setNewMessage("");

    writeMessagesToStorage(updatedMessages);

    flatListRef.current.scrollToOffset({ offset: 0, animated: true });

    if (isRecording) {
      // Zakończ nagrywanie, zapisz ścieżkę dźwięku do wiadomości
      const audioInfo = await audioRecorderPlayer.stopRecorder();
      setAudioPath(audioInfo.path);

      // Odtwórz dźwięk dla weryfikacji
      audioRecorderPlayer.startPlayer(audioPath);
      return;
    }
  };
  const handleRecord = async () => {
    if (!isRecording) {
      // Rozpocznij nagrywanie
      const audioPath = await audioRecorderPlayer.startRecorder();
      setAudioPath(audioPath);
    } else {
      // Zakończ nagrywanie
      await audioRecorderPlayer.stopRecorder();
    }

    setIsRecording(!isRecording);
  };

  const handlePlayAudio = async () => {
    if (audioPath) {
      await audioRecorderPlayer.startPlayer(audioPath);
    }
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
              <Image source={profile.image} style={styles.messageProfileImage} />
            )}
            <View style={styles.messageContentContainer}>
              <Text style={item.sender === "Me" ? styles.sentMessageText : styles.receivedMessageText}>
                {item.content}
              </Text>
              {item.audioPath && (
                <TouchableOpacity onPress={handlePlayAudio}>
                  <Text style={styles.audioButtonText}>Odtwórz dźwięk</Text>
                </TouchableOpacity>
              )}
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
        <TouchableOpacity style={styles.recordButton} onPress={handleRecord}>
          <Text style={styles.recordButtonText}>{isRecording ? "Stop" : "Nagraj"}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendButtonText}>Wyślij</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatDetail;
