import React, { useState, useEffect } from 'react';
import { View, Image, TextInput, FlatList, StyleSheet, TouchableOpacity, Modal, Text } from 'react-native';
import { Asset } from 'expo-asset';
import {styles} from './style';

function SearchScreen () {
  const [allImages, setAllImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredImages, setFilteredImages] = useState([]);
  const [pickedImage, setPickedImage] = useState(null);
  const [customImagePath, setCustomImagePath] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

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
    setPickedImage(imageUri);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search by name"
          value={searchQuery}
          onChangeText={(text) => handleSearch(text)}
        />
        {!!customImagePath && (
          <View style={styles.lupaIconContainer}>
            <Image source={require('../../assets//lupa.png')} style={styles.lupaIcon} />
          </View>
        )}
      </View>
      {pickedImage && (
        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <TouchableOpacity onPress={closeModal}>
              <Image style={styles.modalImage} source={{ uri: pickedImage }} />
            </TouchableOpacity>
            <Text style={styles.imageName}></Text>
          </View>
        </Modal>
      )}
      <FlatList
        data={filteredImages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pickImage(item.path)}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: item.path }} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default SearchScreen;