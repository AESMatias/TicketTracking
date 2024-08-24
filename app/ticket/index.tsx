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
import { Animated } from "react-native";
import { useRef } from "react";
import { useEffect } from "react";

export default function TicketsPanel() {


    const [selectedTicket, setSelectedTicket] = useState(null);


    const handleTicketPress = (ticket) => {
        setSelectedTicket(ticket);
    }

    const FAKEDATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First ItemAA',
          explanation:'This is the first item in the list of tickets that are\
          available to be selected. This is a test of the ticket system.'
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item B',
                    explanation:'This is the first item in tASDDAShe list of tickets that are\
          available to be selecDSAted. This is a test ASDof the ticket system.'
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
                    explanation:'This is the firASDDAst item in thASDe list of tickets that are\
          available to be ASDDASselected. This is a testSDADAS of the ticket system.'
        },
        {
            id: '58694a0f-3da-SA-DSAASDDSA-2',
            title: 'AAAAAAAAAAAAAAAAAAAAAAAAAASADASSDADSASADASDAS',
                      explanation:'This is the first item in the list of tickets that are\
          availaASble to be selected. This is a test of the ticket systemAAAAAA.'
          },
      ];


      const Item = ({ title, id, severity='high', status='open'}) => {
        const [isHovered, setIsHovered] = useState(false);

        const getSeverityColor = (severity) => {
          switch (severity) {
            case 'high':
              return 'red';
            case 'medium':
              return 'orange';
            case 'low':
              return 'green';
            default:
              return 'gray';
          }
        };

        const getStatusColor = (status) => {
          return status === 'open' ? 'green' : 'gray';
        };

        return (
          <Pressable
            onPress={() => handleTicketPress({ title, id })}
            onHoverIn={() => setIsHovered(true)}
            onHoverOut={() => setIsHovered(false)}
            style={[
              styles.ticket,
              { backgroundColor: isHovered ? 'hsla(190, 90%, 90%,1)' : colors.ticketBackground },
            ]}
          >

            <Text 
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.ticketTitle}>
              {title} with id: {id}
            </Text>
            <Image
              style={{ width: 40, height: 40 }}
              source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            />
                            <View style={styles.badgesContainer}>
        <View style={[styles.badge, { backgroundColor: getSeverityColor(severity) }]}>
          <Text style={styles.badgeText}>{severity}</Text>
        </View>
        <View style={[styles.badge, { backgroundColor: getStatusColor(status) }]}>
          <Text style={styles.badgeText}>{status}</Text>
        </View>
      </View>
          </Pressable>
          
        );
      };

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
                backgroundColor: colors.primary,
            },
            headerTintColor: '#fff',
            
            headerTitleStyle: {
                fontWeight: 'bold',
            },
          }} />
        

          
        <FlatList
        style={styles.ticketSection}
        data={FAKEDATA}
        renderItem={({item}) => <Item title={item.title} 
        
        id={item.id} />}
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
        backgroundColor: 'hsla(190, 50%, 90%,1)',
        padding: 5,
        },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
    },
    ticketSection: {
        flex: 1,
        backgroundColor: 'hsla(190, 30%, 70%,1)',
        padding: 5,
        margin: 10,
        minWidth: '60%',
        borderRadius: 10,
        maxHeight: '90%',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
    ticket: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.ticketBackground,
        padding: 5,
        marginHorizontal: 10,
        marginVertical: 5,
        justifyContent: 'right',
        borderRadius: 2,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        borderBottomEndRadius: 10,
        borderBottomLeftRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
        
    },
    ticketTitle: {
        color: 'black',
        fontSize: Platform.OS === 'web' ? 16 : 13,
        fontWeight: '900',
        alignSelf: 'center',
        // fontFamily: 'Roboto',
        marginHorizontal: 10,
        
      },
      badgesContainer: {
        marginHorizontal: 10,
        flexDirection: 'column',
      },
      badge: {
        borderRadius: 5,
        paddingHorizontal: 6,
        paddingVertical: 2,
        marginVertical: 2,
      },
      badgeText: {
        fontSize: 12,
        color: '#fff',
      },
    });
