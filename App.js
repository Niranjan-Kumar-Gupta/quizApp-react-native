import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyStack from './navigation'

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
       <MyStack />
    </NavigationContainer>
   
  )
}

export default App
