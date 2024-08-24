import { Drawer } from 'expo-router/drawer';
import { Text, View, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '@/components/generalColors';
import { Link } from 'expo-router';
import { useRouter } from 'expo-router';
import { Stack } from "expo-router";
import { useState } from 'react';
import { Image } from 'react-native';
import { Pressable } from 'react-native';


// const CustomHeader = () => {
//   return (
//     <LinearGradient
//       colors={['hsl(210, 100%, 11%)', 'hsl(210, 100%, 6%)', colors.backgroundGeneral]}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 0, y: 1 }}
//       style={styles.headerContainer}
//     >
//       <Text style={styles.headerTitle}>ASASDSA</Text>
//     </LinearGradient>
//   );
// };

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

const UserMenu = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownVisible(!isDropdownVisible);
    };

    
    
return (
  <View style={styles.userMenuContainer}>
    <Pressable onPress={toggleDropdown}>
      <Image
        source={{ uri: 'https://avatars.githubusercontent.com/u/119653204?v=4' }}
        style={styles.userImage}
      />
    </Pressable>
    {isDropdownVisible && (
      <View style={styles.dropdownMenu}>
        <Link href="/profile" style={styles.dropdownMenuItem}>
          <Text style={styles.dropdownMenuText}>Profile</Text> {/* Link al perfil */}
        </Link>
        <Link href="/settings" style={styles.dropdownMenuItem}>
          <Text style={styles.dropdownMenuText}>Settings</Text> {/* Link a configuraciones */}
        </Link>
        <Link href="/logout" style={styles.dropdownMenuItem}>
          <Text style={styles.dropdownMenuText}>Logout</Text> {/* Link para cerrar sesión */}
        </Link>
      </View>
    )}
  </View>
);
}
  

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
        //in the left of the screen
        headerTitleAlign: 'center',
        headerRight: () => <UserMenu />,
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


  userMenuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 35,
    height: 35,
    borderRadius: 17.5,
    marginRight: 10,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 40,
    right: 0,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 2,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  username: {
    fontSize: 16,
    fontWeight: '600',
  },
});

