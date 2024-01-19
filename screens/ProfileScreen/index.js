import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, Modal } from "react-native";
import { styles } from "./style";
import { useAuth } from "../../context/AuthContext";

function ProfileScreen() {
    const { userPosts } = useAuth();
    const [selectedImage, setSelectedImage] = useState(null);

    const renderUserPhoto = ({ item }) => (
        <TouchableOpacity onPress={() => setSelectedImage(item.image)}>
          <Image source={{ uri: item.image }} style={styles.userPhotos} resizeMode="cover" />
        </TouchableOpacity>
      );

      const reversedUserPosts = [...userPosts].reverse();

      
      
    return (
    <View style={styles.container}>
        <Text style={styles.profileText}>Maruch12</Text>
        <View style={styles.profileInfo}>
            <View style={styles.profileBackground}>
                <Image
                    source={require("../../assets/profilowe.jpg")}
                    style={styles.profileImage}
                />
            </View>
            <View style={styles.statsContainer}>
                <View style={styles.statItem}>
                    <Text style={styles.statNumber}>102</Text>
                    <Text style={styles.statLabel}>Obserwujący</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statNumber}>520</Text>
                    <Text style={styles.statLabel}>Polubienia</Text>
                </View>
                <View style={styles.statItem}>
                    <Text style={styles.statNumber}>52</Text>
                    <Text style={styles.statLabel}>Obserwuje</Text>
                </View>
            </View>
        </View>
        <View style={styles.userInfo}>
            <Text style={styles.userName}>Marek Marucha</Text>
            <Text style={styles.location}>🏡 Kielce</Text>
            <Text style={styles.description}>
                Człowiek wielu talentów, lecz sekretem jest ich poznanie. F1 fan,
                zwłaszcza oponiarza.
            </Text>
            <FlatList
                    data={reversedUserPosts}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderUserPhoto}
                    horizontal={false}
                    numColumns={3}
                />
        </View>
        <Modal
        visible={selectedImage !== null}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.modalBackground}
            onPress={() => setSelectedImage(null)}
          />
          <Image
            source={{ uri: selectedImage }}
            style={styles.modalImage}
            resizeMode="contain"
          />
        </View>
      </Modal>
    </View>
    );
}
export default ProfileScreen;
