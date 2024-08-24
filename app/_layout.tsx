import { Drawer } from 'expo-router/drawer';
import { Text, View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '@/components/generalColors';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
import { Stack } from "expo-router";

const CustomHeader = () => {
  return (
    <LinearGradient
      colors={['hsl(210, 100%, 11%)', 'hsl(210, 100%, 6%)', colors.backgroundGeneral]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.headerContainer}
    >
      <Text style={styles.headerTitle}>ASASDSA</Text>
    </LinearGradient>
  );
};

const CustomHeaderDrawer = () => {
  return (
    <View style={styles.drawerContent}>
      <LinearGradient
        colors={['hsl(210, 100%, 11%)', 'hsl(210, 100%, 6%)', colors.backgroundGeneral]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.drawerHeader}
      >
        <Text style={styles.drawerTitle}>Menu</Text>
      </LinearGradient>
      <Link href="/" style={styles.menuItem}>
        <Text style={styles.menuText}>Home</Text>
      </Link>
      <Link href="/ticket" style={styles.menuItem}>
        <Text style={styles.menuText}>Tickets</Text>
      </Link>
      {/* <Link href="/settings" style={styles.menuItem}>
        <Text style={styles.menuText}>Settings</Text>
      </Link> */}
    </View>
  );
};

export default function Layout() {
   const router = useRouter();
  
  //TODO: I need to put component= in the screens down there
  return (
<Drawer

      screenOptions={{
        // header: () => <CustomHeader />,
        headerShown: false,
        drawerStyle: { backgroundColor: '#1a237e' },
        drawerContentOptions: { activeTintColor: '#fff', inactiveTintColor: '#bbb' },
      }}
      drawerContent={(props) => <CustomHeaderDrawer {...props} />}
    >
      <Drawer.Screen name="home" />
      <Drawer.Screen name="tickets"  />
      {/* <Drawer.Screen name="Settings" /> */}
    </Drawer>
    
  );
}

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
  drawerContent: {
    flex: 1,
    backgroundColor: '#1a237e',
  },
  drawerHeader: {
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: '900',
  },
  menuItem: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  menuText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

const HomeScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Home Screen</Text>
  </View>
);

const TicketsScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Tickets Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Settings Screen</Text>
  </View>
);
