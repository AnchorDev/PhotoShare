// index.js
import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";


export function Chat({ navigation }) {

    const [items, setItems] = useState([
        { id: 1, username: "WolfFromWallStreet", timeAgo: "1 godz.", isRead: true, message: "Agresja to w tej pracy mus...", image: require("../../img/profile1.png")  },
        { id: 2, username: "JoiBladeRunner", timeAgo: "1 tydz.", isRead: true, message: "Wyglądasz na samotnego...", image: require("../../img/profile2.png")},
        { id: 3, username: "JacekWróbel", timeAgo: "2 tyg.", isRead: true, message: "Ty: Stary, od początku byłem... ", image: require("../../img/profile3.png")},
        { id: 4, username: "GetRichEasly2023", timeAgo: "mar.", isRead: true, message: "Wystarczy, że klikniesz w ten... ", image: require("../../img/profile4.png")},
        { id: 5, username: "FreeMoney21636712", timeAgo: "2019", isRead: true, message :"Досым, сен осыдан ақш...", image: require("../../img/profile5.png")},
    ]);
    return (
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => console.log('Button pressed')}>
              <Image
                source={require('../../img/left-arrow.png')}
                style={styles.imageButton}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Komunikator</Text>
          </View>
          <View style={styles.profilesSection}>
                    <View style={styles.profileItemContainer}>
                        <View style={styles.mainProfileBackground}>
                            <Image
                                source = {require("../../img/profilowe.jpg")}
                                style={styles.mainProfileImage}
                            />
                        </View>
                    </View>
                {items.slice(0,3).map((item) => (
                    <View key={item.id} style={styles.profileItemContainer}>
                        <View style={styles.profileBackground}>
                            <Image
                                source={item.image}
                                style={styles.profileImage}
                            />
                        </View>
                    </View>
                ))}
            </View>
            <View style={styles.chatSection}>
                {items.map((item) => (
                    <View key={item.id} style={styles.chatItemContainer}>
                        <View style={styles.chatBackground}>
                            <Image
                                source={item.image}
                                style={styles.chatImage}
                            />
                        </View>
                        <View style={styles.chatInfoContainer}>
                            <Text style={styles.chatUsername}>{item.username}</Text>
                            <Text style={styles.chatMessage}>{item.message} · {item.timeAgo}</Text>
                        </View> 
                    </View>
                ))}
            </View>

        </View>
    );
}
