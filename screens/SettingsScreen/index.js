import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, Alert } from 'react-native';
import { styles } from "./style";

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

  const handleDataUsageClick = () => {
    Alert.alert('Aplikacja działa offline');
  };

  const handleInfoClick = () => {
    Alert.alert('Aplikacja wykonana w 2023 roku na projekt z aplikacji mobilnych.');
  };

  const handleLogoutClick = () => {
    Alert.alert('Wylogowanie');
  };

  const handleDeleteAccountClick = () => {
    Alert.alert(
      'Potwierdzenie',
      'Czy na pewno chcesz usunąć konto?',
      [
        {
          text: 'Anuluj',
          style: 'cancel',
        },
        {
          text: 'Usuń',
          onPress: () => {
            Alert.alert('Konto zostało usunięte');
          },
        },
      ],
      { cancelable: false }
    );
  };

  const renderSettingItem = (text, icon, onPress) => (
    <TouchableOpacity style={styles.settingItem} onPress={onPress}>
      <Image source={icon} style={styles.imageIcon} />
      <Text style={styles.settingItemText}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.settingsPanel}>
        {renderSettingItem('Język', require('../../assets/language-icon.png'), handleLanguageClick)}
        {renderSettingItem('Powiadomienia', require('../../assets/notification-icon.png'), handleNotificationsClick)}
        {renderSettingItem('Prywatność', require('../../assets/privacy-icon.png'), handlePrivacyClick)}
        {renderSettingItem('Użycie danych', require('../../assets/data-usage-icon.png'), handleDataUsageClick)}
        {renderSettingItem('Informacje', require('../../assets/info-icon.png'), handleInfoClick)}
        <TouchableOpacity style={styles.settingItem} onPress={handleLogoutClick}>
          <Text style={styles.settingsTextRed}>Wyloguj</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingItem} onPress={handleDeleteAccountClick}>
          <Text style={styles.settingsTextRed}>Usuń konto</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SettingsScreen;