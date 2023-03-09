import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScren from './HomeScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component={Main} name="Main" options={{headerShown:false}} />
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={Books} name="Books" />
        <Stack.Screen component={Movies} name="Movies" />
        
      </Stack.Navigator>
  
    </NavigationContainer>
  );

}

const Main = ({navigation}: {navigation:any}) => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#CEBDC6'}}>
    <View>
      <Text style={{fontSize: 30, fontWeight: 'bold', color:'#2e003e' }}>Bomo</Text>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{backgroundColor: '#3d2352', padding: 20, width: '90%', borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between'  }} >
      <Text style={{fontWeight: 'bold', fontSize: 18, color: '#fff'}}>Let's Start</Text>
    </TouchableOpacity>
    </SafeAreaView>
  );
}


const Home = ({navigation}: {navigation:any}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems:'center', backgroundColor: '#CEBDC6'}}>
      <Text>
        Home Screen
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Books')} style={{backgroundColor: '#3d2352', padding: 5, width: '10%', borderRadius: 2, flexWrap: 'wrap',alignItems:'flex-end', alignContent:'flex-end', marginLeft:350, marginBottom: 700 }}/>
    </View>
  )
}
//function HomeScreen({navigation}: {navigation:any}) {
  //return (
    //<View style={{flex: 1, justifyContent: 'center', alignItems:'center', backgroundColor: '#CEBDC6'}}>
      //<Text>
        //Home Screen
      //</Text>
      //<TouchableOpacity onPress={() => navigation.navigate('Books')} style={{backgroundColor: '#3d2352', padding: 5, width: '10%', borderRadius: 2, flexWrap: 'wrap',alignItems:'flex-end', alignContent:'flex-end', marginLeft:350, marginBottom: 700 }}/>
    //</View>
  //)
//}

const Books = ({navigation}: {navigation:any}) => {
  return(
    <SafeAreaView style={{flex: 1, justifyContent:'center', alignItems: 'center', backgroundColor:'#CEBDC6'}}>
      <Text>Books Page</Text>
      <TouchableOpacity onPress={() => navigation.navigate(Movies)} style={{backgroundColor: '#3d2352', padding: 5, width: '10%', borderRadius: 2, flexWrap: 'wrap',alignItems:'flex-end', alignContent:'flex-end', marginLeft:350, marginBottom: 700 }}></TouchableOpacity>
    </SafeAreaView>
  )
}

const Movies = () => {
  return(
    <SafeAreaView style={{flex: 1, justifyContent:'center', alignItems: 'center', backgroundColor: '#CEBDC6'}}>
      <Text>Movies Page</Text>
      
    </SafeAreaView>
  )
}





export default App;