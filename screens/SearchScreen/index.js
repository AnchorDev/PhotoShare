import React, { useState, useEffect } from 'react';
import { View, Image, TextInput, FlatList, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Text } from 'react-native';
import { Asset } from 'expo-asset';
import { styles } from './style';

function SearchScreen() {
  const [allImages, setAllImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const localImages = [
      { name: '@eliza', path: Asset.fromModule(require('../../assets/profile5.png')).uri },
      { name: '@karol', path: Asset.fromModule(require('../../assets/profile5.png')).uri },
      { name: '@kuba', path: Asset.fromModule(require('../../assets/profile5.png')).uri },
      { name: '@radek', path: Asset.fromModule(require('../../assets/profile5.png')).uri },
      { name: '@julia', path: Asset.fromModule(require('../../assets/profile5.png')).uri }
    ];

    setAllImages(localImages);
    setFilteredImages(localImages);
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = allImages.filter(image =>
      image.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredImages(filtered);
  };

  const pickImage = (imageUri) => {
    setSelectedImage(imageUri);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <TouchableWithoutFeedback onPress={closeImage}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search by name"
            value={searchQuery}
            onChangeText={(text) => handleSearch(text)}
          />
        </View>
        <FlatList
          data={filteredImages}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pickImage(item)}>
              <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: item.path }} />
              </View>
            </TouchableOpacity>
          )}
        />
        {selectedImage && (
          <View style={styles.overlay}>
            <Image style={styles.enlargedImage} source={{ uri: selectedImage.path }} />
            <View style={styles.enlargedImageOverlay}>
              <Text style={styles.enlargedImageUsername}>{selectedImage.name}</Text>
            </View>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SearchScreen;
