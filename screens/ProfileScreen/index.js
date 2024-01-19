import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { styles } from "./style";
import { useAuth } from "../../context/AuthContext";

function ProfileScreen() {
    const { userPosts } = useAuth();

    const renderUserPhoto = ({ item }) => (
        <Image source={{ uri: item.image }} style={styles.userPhotos} />
      );

    const photos = [
        require("../../assets/prof1.jpg"),
        require("../../assets/prof2.jpg"),
        require("../../assets/prof3.jpg"),
        require("../../assets/prof1.jpg"),
        require("../../assets/prof2.jpg"),
        require("../../assets/prof3.jpg"),
        require("../../assets/prof1.jpg"),
        require("../../assets/prof2.jpg"),
        require("../../assets/prof3.jpg"),
    ];

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
                    data={userPosts}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderUserPhoto}
                    horizontal={false}
                    numColumns={3}
                />
        </View>
    </View>
    );
}
export default ProfileScreen;
