import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/login';
import Home from './src/pages/home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }}/>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;