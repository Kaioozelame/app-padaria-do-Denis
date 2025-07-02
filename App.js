import React from  'react';

import {NavigationContainer}
from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import SecondaryScreen from './screens/SecondaryScreen';
import CafeScreen from './screens/CafeScreen';
import BoloScreen from '.screens/BoloScreen';
import PaoScreen from '.screens/PaoScreen';

const Stack = createStackNavigation();

export default function App ()  {
  return (
    <NavigationContainer>
    <Stack.Navigation InitialRouteName="Home" Component=
    (HomeScreen) Options={{ title:'Bem-vindo'}}/>
    <Stack.Screen Name="Secondary" Component={Secondary} Options= {{title: 'Opções Deliciosas'}}/>
    <Stack.Screen Name="Cafe" Component={CafeScreen} Options={{title: 'Nosso Cafe'}}/>
    <Stack.Screen Name= "Bolo" Component={BoloScreen} Options={{title:'Bolo de chocolate'}}/>
    <Stack.Screen Name="Pao" Component={Paoscreen} Options {{'Pão Caseiro'}}/>
    </Stack.Navigator>
    </NavigationContainer>
      );
}