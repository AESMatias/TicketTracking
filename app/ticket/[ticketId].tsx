import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, 
    SafeAreaView, TouchableOpacity, StatusBar, Alert } from "react-native";
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useLocalSearchParams } from "expo-router";


export default function ticketId() {

    const { ticketId } = useLocalSearchParams();

    return (
        <View
        style={{ flex: 1 , backgroundColor: 'cyan'}}

          >
            <StatusBar barStyle="light-content"/>

            <SafeAreaView>
                <Text>Ticket ID: {ticketId}</Text>

            </SafeAreaView>
        </View>
    );
}