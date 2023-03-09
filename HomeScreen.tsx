import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, } from 'react-native';

export default function Home() {
    return (
        <SafeAreaView style={{flex: 1, justifyContent:'center'}}>
            <ScrollView>
                <Text>New Arrivals Page</Text>
            </ScrollView>
        </SafeAreaView>
    )
}