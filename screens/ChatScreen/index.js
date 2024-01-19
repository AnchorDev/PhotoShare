// index.js
import React, { useState } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

function ChatScreen() {
    const navigation = useNavigation();
    const [items, setItems] = useState([
        { id: 1, username: "WolfFromWallStreet", timeAgo: "1 godz.", isRead: true, message: "Agresja to w tej pracy mus...", image: require("../../assets/profile1.png")  },
        { id: 2, username: "JoiBladeRunner", timeAgo: "1 tydz.", isRead: true, message: "Wyglądasz na samotnego...", image: require("../../assets/profile2.png")},
        { id: 3, username: "JacekWróbel", timeAgo: "2 tyg.", isRead: true, message: "Ty: Stary, od początku byłem... ", image: require("../../assets/profile3.png")},
        { id: 4, username: "GetRichEasly2023", timeAgo: "mar.", isRead: true, message: "Wystarczy, że klikniesz w ten... ", image: require("../../assets/profile4.png")},
        { id: 5, username: "FreeMoney21636712", timeAgo: "2019", isRead: true, message :"Досым, сен осыдан ақш...", image: require("../../assets/profile5.png")},
    ]);
    
    const handleProfileClick = (profileId) => {
        navigation.navigate("ChatDetail", { profileId });
      };

    return (
    <View style={styles.container}>
      <View style={styles.profilesSection}>
        <View style={styles.profileItemContainer}>
          <View style={styles.mainProfileBackground}>
            <Image source={require("../../assets/profilowe.jpg")} style={styles.mainProfileImage} />
          </View>
        </View>
        {items.slice(0, 3).map((item) => (
          <TouchableOpacity key={item.id} onPress={() => handleProfileClick(item.id)}>
            <View style={styles.profileItemContainer}>
              <View style={styles.profileBackground}>
                <Image source={item.image} style={styles.profileImage} />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.chatSection}>
        {items.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => handleProfileClick(item.id)}>
            <View style={styles.chatItemContainer}>
              <View style={styles.chatBackground}>
                <Image source={item.image} style={styles.chatImage} />
              </View>
              <View style={styles.chatInfoContainer}>
                <Text style={styles.chatUsername}>{item.username}</Text>
                <Text style={styles.chatMessage}>{item.message} · {item.timeAgo}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
export default ChatScreen;
