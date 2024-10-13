import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';

const BackgroundGradient = () => {
  return (
    <NavigationContainer>
    <LinearGradient
      colors={['hsl(210, 100%, 20%)', 'hsl(220, 90%, 15%)', 'hsl(230, 80%, 10%)']}
      style={{ flex: 1 }}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    />
    </NavigationContainer>
  );
};

export default BackgroundGradient;