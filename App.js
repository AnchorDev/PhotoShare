import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from "./src/navigation/Stack";
import { StatusBar } from 'expo-status-bar';


export default function App() {
  return (
      <NavigationContainer>
          <StatusBar style="light" backgroundColor="#000000" />
        <StackNav />
      </NavigationContainer>

  );
}
