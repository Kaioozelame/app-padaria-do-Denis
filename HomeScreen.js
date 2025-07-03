import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './screens/homescreen';

import SecondaryScreen from './SecondaryScreen';

import CafeScreen from './CafeScreen';

import PaoScreen from './PaoScreen';

const Stack= createStackNavigator()

export default function App() {
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'/>
    <Stack.Screen name='home' component={HomeScreen} options={{title: 'Bem-vindo'}}/>
    <Stack.Screen name='Secondary' component={SecondaryScreen} options={{title: 'Opções Delíciosas'}}/>
    <Stack.Screen name= 'Cafe' component={CafeScreen} options={{title:'Nosso Cardápio'}}
   <Stack.Screen name='Bolo' component={BoloScreen} options= {{title:'Bolo de Chocolate'}}/>
    <Stack.Screen name='Pao' component={PaoScreen} options= {{title:'Pão Caseiro quentinho'}}/>
    <Stack.Navigator>
    </NavigationContainer>
  )
}