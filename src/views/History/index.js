import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";

export function History({ navigation }) {
    const [button1Pressed, setButton1Pressed] = useState(true);
    const [button2Pressed, setButton2Pressed] = useState(false);
    const [isFollowing, setIsFollowing] = useState(true);

    const handleButton1Press = () => {
        setButton1Pressed(true);
        setButton2Pressed(false);
    };

    const handleButton2Press = () => {
        setButton1Pressed(false);
        setButton2Pressed(true);
    };

    const handleFollowButtonPress = () => {
        setIsFollowing((prevIsFollowing) => !prevIsFollowing);
    };

    return (
        <View style={styles.container}>
            <View style={styles.notificationsText}>
                <Text style={styles.textStyles}>Powiadomienia</Text>
            </View>


            <View style={styles.todaySection}>

                <Text style={styles.todayHeaderText}>Dzisiaj</Text>
                <View style={styles.todayItemContainer}>
                    <View style={styles.todayProfileBackground}>
                        <Image
                            source={require("../../img/profilowe.jpg")}
                            style={styles.profileImage}
                        />
                    </View>
                    <View style={styles.todayInfoContainer}>
                        <Text style={styles.todayUsername}>marynarzhehe <Text style={styles.todayAction}>zaczął/zaczęła</Text></Text>
                        <Text style={styles.todayAction}>Cię obserwować.</Text>
                        <Text style={styles.todayTimeAgo}>5 godz.</Text>
                    </View>
                    <TouchableOpacity
                        style={[
                            styles.todayActionButton,
                            isFollowing
                                ? styles.todayActionButtonFollowed
                                : styles.todayActionButtonStart,
                        ]}
                        onPress={handleFollowButtonPress}
                    >
                        <Text
                            style={[
                                styles.todayActionButtonText,
                                isFollowing
                                    ? styles.todayActionButtonTextFollowed
                                    : styles.todayActionButtonTextStart,
                            ]}
                        >
                            {isFollowing ? "Obserwujesz" : "Zacznij obserwować"}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.todayItemContainer}>
                    <View style={styles.todayProfileBackground}>
                        <Image
                            source={require("../../img/profilowe.jpg")}
                            style={styles.profileImage}
                        />
                    </View>
                    <View style={styles.todayInfoContainer}>
                        <Text style={styles.todayUsername}>eliza.janus <Text style={styles.todayAction}>zaczął/zaczęła</Text></Text>
                        <Text style={styles.todayAction}>Cię obserwować.</Text>
                        <Text style={styles.todayTimeAgo}>13 godz.</Text>
                    </View>
                    <TouchableOpacity
                        style={[
                            styles.todayActionButton,
                            isFollowing
                                ? styles.todayActionButtonFollowed
                                : styles.todayActionButtonStart,
                        ]}
                        onPress={handleFollowButtonPress}
                    >
                        <Text
                            style={[
                                styles.todayActionButtonText,
                                isFollowing
                                    ? styles.todayActionButtonTextFollowed
                                    : styles.todayActionButtonTextStart,
                            ]}
                        >
                            {isFollowing ? "Obserwujesz" : "Zacznij obserwować"}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.todayItemContainer}>
                    <View style={styles.todayProfileBackground}>
                        <Image
                            source={require("../../img/profilowe.jpg")}
                            style={styles.profileImage}
                        />
                    </View>
                    <View style={styles.todayInfoContainer}>
                        <Text style={styles.todayUsername}>radek <Text style={styles.todayAction}>zaczął/zaczęła</Text></Text>
                        <Text style={styles.todayAction}>Cię obserwować.</Text>
                        <Text style={styles.todayTimeAgo}>5 godz.</Text>
                    </View>
                    <TouchableOpacity
                        style={[
                            styles.todayActionButton,
                            isFollowing
                                ? styles.todayActionButtonFollowed
                                : styles.todayActionButtonStart,
                        ]}
                        onPress={handleFollowButtonPress}
                    >
                        <Text
                            style={[
                                styles.todayActionButtonText,
                                isFollowing
                                    ? styles.todayActionButtonTextFollowed
                                    : styles.todayActionButtonTextStart,
                            ]}
                        >
                            {isFollowing ? "Obserwujesz" : "Zacznij obserwować"}
                        </Text>
                    </TouchableOpacity>
                </View>
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
