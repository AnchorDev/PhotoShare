import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";

export function Profile({ navigation }) {
    const openOptions = () => {
        navigation.navigate('Settings');
    };



    return (
        <View style={styles.container}>
            <Text style={styles.profileText}>Maruch12</Text>
            <View style={styles.profileInfo}>
                <View style={styles.profileBackground}>
                <Image
                    source={require("../../img/profilowe.jpg")}
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
                <Text style={styles.description}>Człowiek wielu talentów, lecz sekretem jest ich poznanie. F1 fan, zwłaszcza oponiarza.</Text>
            </View>
            <TouchableOpacity onPress={openOptions} style={styles.optionsButton}>
                <Image
                    source={require("../../img/kolo.png")}
                    style={styles.optionsIcon}
                />
            </TouchableOpacity>
        </View>
    );
}
