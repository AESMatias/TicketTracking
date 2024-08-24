import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, 
    SafeAreaView, TouchableOpacity, StatusBar, Alert } from "react-native";
import ParallaxScrollView from '@/components/ParallaxScrollView';


export default function ticketId() {


    return (
        <View
        style={{ flex: 1 , backgroundColor: 'cyan'}}

          >
            <StatusBar barStyle="light-content"/>

            <SafeAreaView>
                <Text>HOME</Text>

            </SafeAreaView>
        </View>
    );
}