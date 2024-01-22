import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert, Button } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";
import AsyncStorage from "@react-native-async-storage/async-storage";


function SettingsScreen() {
  const [lang, setLang] = useState('polski');
  const [notifications, setNotifications] = useState('true');
  const [privacy, setPrivacy] = useState('true');
  const [dataUsage, setDataUsage] = useState('false');

  const handleLanguageClick = () => {
    Alert.alert('Zmiana języka');
  };

  const handleNotificationsClick = () => {
    Alert.alert('Zarządzanie powiadomieniami');
  };

  const handlePrivacyClick = () => {
    Alert.alert('Ustawienia prywatności');
  };
  const handleInfoClick = () => {
    Alert.alert('Aplikacja wykonana w 2023 roku na projekt z aplikacji mobilnych.');
  };

  const handleLogoutClick = () => {
    Alert.alert('Wylogowanie');
  };
  const handleDataUsageClick = async () => {
    try {
      await AsyncStorage.clear();
      Alert.alert('Wyczyszczono AsyncStorage');
    } catch (error) {
      console.error("Error clearing AsyncStorage:", error);
    }
  };

  const renderSettingItem = (text, iconName, onPress) => (
    <TouchableOpacity style={styles.settingItem} onPress={onPress}>
      <Ionicons name={iconName} size={30} color="white" style={styles.icon} />
      <Text style={styles.settingItemText}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.settingsPanel}>
        {renderSettingItem('Język', 'language', handleLanguageClick)}
        {renderSettingItem('Powiadomienia', 'notifications', handleNotificationsClick)}
        {renderSettingItem('Prywatność', 'lock-closed', handlePrivacyClick)}
        {renderSettingItem('Użycie danych', 'cloud-download', handleDataUsageClick)}
        {renderSettingItem('Informacje', 'md-information-circle', handleInfoClick)}
        <TouchableOpacity style={styles.settingItem} onPress={handleLogoutClick}>
          <Text style={styles.settingsTextRed}>Wyloguj</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SettingsScreen;
