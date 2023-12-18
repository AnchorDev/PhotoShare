// index.js
import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";

export function History({ navigation }) {
    const [button1Pressed, setButton1Pressed] = useState(true);
    const [button2Pressed, setButton2Pressed] = useState(false);

    const [items, setItems] = useState([
        { id: 1, username: "TylerDurden", action: "zaczął/zaczęła", timeAgo: "5 godz.", isFollowing: true, image: require("../../img/prof1.jpg") },
        { id: 2, username: "JacekWrobel", action: "zaczął/zaczęła", timeAgo: "13 godz.", isFollowing: true, image: require("../../img/prof2.jpg") },
        { id: 3, username: "JaJezdze", action: "zaczął/zaczęła", timeAgo: "5 godz.", isFollowing: true, image: require("../../img/prof3.jpg") },
    ]);

    const handleButton1Press = () => {
        setButton1Pressed(true);
        setButton2Pressed(false);
    };

    const handleButton2Press = () => {
        setButton1Pressed(false);
        setButton2Pressed(true);
    };

    const handleFollowButtonPress = (itemId) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId
                    ? { ...item, isFollowing: !item.isFollowing }
                    : item
            )
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.notificationsText}>
                <Text style={styles.textStyles}>Powiadomienia</Text>
            </View>

            <View style={styles.todaySection}>
                <Text style={styles.todayHeaderText}>Dzisiaj</Text>

                {items.map((item) => (
                    <View key={item.id} style={styles.todayItemContainer}>
                        <View style={styles.todayProfileBackground}>
                            <Image
                                source={item.image}
                                style={styles.profileImage}
                            />
                        </View>
                        <View style={styles.todayInfoContainer}>
                            <Text style={styles.todayUsername}>{item.username} <Text style={styles.todayAction}>{item.action}</Text></Text>
                            <Text style={styles.todayAction}>Cię obserwować.</Text>
                            <Text style={styles.todayTimeAgo}>{item.timeAgo}</Text>
                        </View>
                        <TouchableOpacity
                            style={[
                                styles.todayActionButton,
                                item.isFollowing
                                    ? styles.todayActionButtonFollowed
                                    : styles.todayActionButtonStart,
                            ]}
                            onPress={() => handleFollowButtonPress(item.id)}
                        >
                            <Text
                                style={[
                                    styles.todayActionButtonText,
                                    item.isFollowing
                                        ? styles.todayActionButtonTextFollowed
                                        : styles.todayActionButtonTextStart,
                                ]}
                            >
                                {item.isFollowing ? "Obserwujesz" : "Zacznij obserwować"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>

            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={[
                        styles.ellipseButton,
                        button1Pressed && styles.activeEllipseButton,
                    ]}
                    onPress={handleButton1Press}
                >
                    <Text style={styles.buttonText}>Obserwacje</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.ellipseButton,
                        button2Pressed && styles.activeEllipseButton,
                    ]}
                    onPress={handleButton2Press}
                >
                    <Text style={styles.buttonText}>Polubienia</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
