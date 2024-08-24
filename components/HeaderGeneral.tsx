import { LinearGradient } from 'expo-linear-gradient';
import { Text, View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { colors } from '@/components/generalColors';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
import { Stack } from "expo-router";

const GeneralHeader = () => {
    return (
      <LinearGradient
        colors={['hsl(210, 100%, 11%)', 'hsl(210, 100%, 6%)', colors.backgroundGeneral]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.headerContainer}
      >
        <Text style={styles.headerTitle}>GENERALLLLL</Text>
      </LinearGradient>
    );
  };

export default GeneralHeader;

  const styles = StyleSheet.create({
    headerContainer: {
      flex: 0.1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      minHeight: 60,
    },
    headerTitle: {
      color: 'white',
      fontSize: 22,
      fontWeight: '900',
      top: 12,
      fontFamily: 'Roboto',
      fontStyle: 'italic',
    },
  });
  