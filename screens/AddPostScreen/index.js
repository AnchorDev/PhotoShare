import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import {styles} from './style';

function AddPostScreen() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState('');

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleAddPhoto = () => {
    alert('Post dodany!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} disabled={true}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.title}>Nowy Post</Text>
        <View style={styles.flexSpacer} />
        <TouchableOpacity onPress={pickImage} style={styles.cameraButton}>
          <Ionicons name="camera" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {image && (
        <View style={styles.imageContainer}>
          <Image source={{ uri: image }} style={styles.image} />
          <TextInput
            placeholder="Napisz coś..."
            style={{ ...styles.input, width: styles.image.width }}
            multiline
            value={text}
            onChangeText={(inputText) => setText(inputText)}
          />
        </View>
      )}
      <TouchableOpacity onPress={handleAddPhoto} style={styles.addButton}>
        <Image source={require('../../assets/dodaj.png')} style={styles.addIcon} resizeMode="contain" />
        <Text style={styles.addButtonText}>Dodaj post</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
export default AddPostScreen;