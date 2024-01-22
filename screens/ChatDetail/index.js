import React, { useState, useRef, useEffect } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from "./style";
import { Audio } from 'expo-av';
import { Ionicons } from "@expo/vector-icons";

const ChatDetail = ({ route }) => {
  const { profile } = route.params;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [recording, setRecording] = useState();
  const [sound, setSound] = useState();
  const [audioUri, setAudioUri] = useState(null);

  const flatListRef = useRef(null);

  useEffect(() => {
    GetPermissions();
    readMessagesFromStorage();
    //clearMessagesFromStorage();
  }, []);

  const GetPermissions = async () => {
    try {  
      const AudioPerm = await Audio.requestPermissionsAsync();
      if (AudioPerm.status === 'granted') {
        console.log('Audio Permission Granted');
      }
    } catch (err) {
      console.error('Failed to get permissions', err);
    }
  };

  const readMessagesFromStorage = async () => {
    try {
      const storedMessages = await AsyncStorage.getItem(`messages_${profile.id}`);
      if (!storedMessages) {
        const initialMessage = {
          id: 0,
          sender: profile.username,
          content: profile.message,
          audioUri: null,
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

  const handleSend = () => {
    if (newMessage.trim() === "") return;

    const newMessageObj = { id: messages.length + 1, sender: "Me", content: newMessage };
    const updatedMessages = [newMessageObj, ...messages];

    setMessages(updatedMessages);
    setNewMessage("");

    writeMessagesToStorage(updatedMessages);

    flatListRef.current.scrollToOffset({ offset: 0, animated: true });
  };

  const startRecording = async () => {
    try {
      const { recording } = await Audio.Recording.createAsync({
        android: {
          extension: '.wav',
          outputFormat: Audio.RECORDING_OPTION_ANDROID_OUTPUT_FORMAT_DEFAULT,
          audioEncoder: Audio.RECORDING_OPTION_ANDROID_AUDIO_ENCODER_DEFAULT,
          sampleRate: 44100,
          numberOfChannels: 2,
          bitRate: 128000,
        },
        ios: {
          extension: '.wav',
          audioQuality: Audio.RECORDING_OPTION_IOS_AUDIO_QUALITY_MAX,
          sampleRate: 44100,
          numberOfChannels: 2,
          bitRate: 128000,
          linearPCMBitDepth: 16,
          linearPCMIsBigEndian: false,
          linearPCMIsFloat: false,
        },
      });
      setRecording(recording);
    } catch (error) {
      console.error("Error starting recording:", error);
    }
  };

  const stopRecording = async () => {
    try {
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setAudioUri(uri);

      const newAudioMessage = { id: messages.length + 1, sender: "Me", audioUri: uri };
      const updatedMessages = [newAudioMessage, ...messages];

      setMessages(updatedMessages);
      writeMessagesToStorage(updatedMessages);

    } catch (error) {
      console.error("Error stopping recording:", error);
    }
  };

  const playRecording = async (uri) => {
    try {
      const { sound } = await Audio.Sound.createAsync(
        { uri },
        { shouldPlay: true }
      );
      setSound(sound);
    } catch (error) {
      console.error("Error playing recording:", error);
    }
  };

  const stopPlaying = async () => {
    try {
      sound && await sound.unloadAsync();
      setSound(null);
    } catch (error) {
      console.error("Error stopping playing:", error);
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
              {item.audioUri ? (
                <TouchableOpacity onPress={() => playRecording(item.audioUri)}>
                  <Image
                    source={require("../../assets/audio_message.png")}
                    style={styles.audioMessageImage}/>
                </TouchableOpacity>
              ) : (
                <Text style={item.sender === "Me" ? styles.sentMessageText : styles.receivedMessageText}>
                  {item.content}
                </Text>
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
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Ionicons name="send-sharp" size={30} color="white" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sendButton}
          onPressIn={startRecording}
          onPressOut={stopRecording}
        >
          <Ionicons name="megaphone-sharp" size={30} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatDetail;
