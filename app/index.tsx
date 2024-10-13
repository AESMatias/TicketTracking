import { Platform, Pressable, View, Animated, StyleSheet, 
  TextInput, ImageBackground } from "react-native";
import { Stack, useRouter } from "expo-router";
import { useState, useRef } from "react";
import { Text } from "react-native";
import { colors } from "@/components/generalColors";
import { Image } from "react-native";
import Login from "./views/home";
import LoginEntry from "@/components/LoginEntry";
import { PaperProvider } from 'react-native-paper';

export default function Home() {

  const isWeb = Platform.OS === 'web';
  const backgroundImageLINK = require('../assets/images/Entrybackground.jpg') //TODO: CHANGE;

  return (
    <>
    {!isWeb ? (    
      <PaperProvider>
     <ImageBackground source={backgroundImageLINK} 
     style={styles.backgroundImage}>
    <LoginEntry/>
    </ImageBackground>
    </PaperProvider>
    ): (<PaperProvider>
      <LoginEntry/>
    </PaperProvider>)}
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

