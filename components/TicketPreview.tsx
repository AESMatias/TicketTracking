import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { colors } from "./generalColors";

export function TicketPreviewComponent({ selectedTicket }) {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const opacityAnimText = useRef(new Animated.Value(0)).current;
  const scaleAnimText = useRef(new Animated.Value(1)).current;
  const backgroundColorAnim = useRef(new Animated.Value(0)).current; // New background color animation

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scaleAnim, {
        toValue: 1.8,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 0.85,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnimText, {
        toValue: 0.5,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnimText, {
        toValue: 0.95,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(backgroundColorAnim, { 
        toValue: 1,
        duration: 200,
        useNativeDriver: false,
      }),
    ]).start();

    // Revert to original values after a delay
    setTimeout(() => {
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 1.5,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnimText, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnimText, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(backgroundColorAnim, {  // Reverting background color
          toValue: 0,
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start();
    }, 300);
  }, [selectedTicket]);

  const interpolatedBackgroundColor = backgroundColorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['hsla(190, 80%, 70%, 0.4)', 'hsla(195, 80%, 80%,1)']  
  });

  if (!selectedTicket) {
    return (
      <View style={styles.container}>
        <Text style={styles.titleTicket}>No ticket selected</Text>
      </View>
    );
  }

  return (
    <Animated.View style={[styles.container, { backgroundColor: interpolatedBackgroundColor }]}>
      <Animated.Image
        style={[
          styles.userImage,
          {
            transform: [{ scale: scaleAnim }],
            opacity: opacityAnim,
          },
        ]}
        source={require('../assets/images/aesmatias.png')}
      />
      <Animated.Text
        style={[
          styles.textTicket,
          {
            transform: [{ scale: scaleAnimText }],
            opacity: opacityAnimText,
          },
        ]}
      >
        {selectedTicket.title}
        {selectedTicket.id}
      </Animated.Text>
      <Animated.Text
        ellipsizeMode={'tail'}
        style={[
          styles.textTicket,
          {
            transform: [{ scale: scaleAnimText }],
            opacity: opacityAnimText,
          },
        ]}
      >
        {selectedTicket.explanation}
      </Animated.Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '90%',
    padding: 10,
    margin: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'hsla(190, 80%, 70%, 0.4)',  // Initial background color
    flexDirection: 'column',
    gap: 100,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  userImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    width: 60,
    top: 30,
    borderRadius: 30,
    borderWidth: 0,
  },
  titleTicket: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
  },
  textTicket: {
    fontSize: 12,
    fontWeight: 900,
    color: 'black',
    textAlign: 'center',
    padding: 5,
    flexShrink: 1,
    maxWidth: '100%',
    maxHeight: '100%',
  },
});
