import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, 
    SafeAreaView, TouchableOpacity, StatusBar, Alert, 
    Platform} from "react-native";
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {colors} from "@/components/generalColors";
import { Stack } from "expo-router";
import {TicketPreviewComponent} from "@/components/TicketPreview";
import { FlatList } from "react-native"
import { Pressable } from "react-native";

export default function TicketsPanel() {


    const [selectedTicket, setSelectedTicket] = useState(null);

    const handleTicketPress = (ticket) => {
        setSelectedTicket(ticket);
    }

    const FAKEDATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First ItemAA',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item B',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];


      const Item = ({title,id}) => (
        <Pressable 
        onPress={() => handleTicketPress({title,id})}
        style={styles.ticket}>
          <Text style={styles.ticketTitle}>{title} with id: {id} </Text>
          <Image
            style={{width: 40, height: 40}}
            source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
            />
        </Pressable>
        );

    return (        
    <View
        style={styles.container}

        // headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        // headerImage={
        //   <Image
        //     source={require('@/assets/images/partial-react-logo.png')}
        //     // style={styles.reactLogo}
        //   />}
          >
        <Stack.Screen         options={{
            headerShown: true,
            title: 'Tickets',
            headerStyle: {
                backgroundColor: 'purple',
            },
            headerTintColor: '#fff',
            
            headerTitleStyle: {
                fontWeight: 'bold',
            },
          }} />
        

          
        <FlatList
        style={styles.ticketSection}
        data={FAKEDATA}
        renderItem={({item}) => <Item title={item.title} id={item.id} />}
        keyExtractor={item => item.id}
      />
            {Platform.OS === 'web' ? (
          <TicketPreviewComponent 
          selectedTicket={selectedTicket}
          style={styles.ticketSection}>

          </TicketPreviewComponent> ) : (
            null)}

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.backgroundGeneral,
        padding: 10,
        },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    ticketSection: {
        flex: 1,
        backgroundColor: colors.backgroundGeneral,
        padding: 10,
        margin: 10,
    },
    ticket: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'red',
        padding: 5,
        margin: 10,
        justifyContent: 'center',
    },
    ticketTitle: {
        color: 'white',
        fontSize: Platform.OS === 'web' ? 18 : 14,
        fontWeight: '900',
        top: 12,
        fontFamily: 'Roboto',
        fontStyle: 'italic',
      },
    });
