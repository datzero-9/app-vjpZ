import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Text } from 'react-native';
import Home from './component/Home/Home'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import Cart from './component/Cart/Cart'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import EvilIcons from '@expo/vector-icons/EvilIcons';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

const MyStack = () => {
  const params = { param1: 'Hello', param2: 'World' };
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-sharp';
          } else if (route.name === 'Login') {
            iconName = focused ? 'person-outline' : 'person-circle-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart-outline' : 'cart-sharp';
          } else if (route.name === 'Register') {
            iconName = focused ? 'aperture-outline' : 'aperture-sharp';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen
          options={{ headerShown: false }}
          name="Register"
          component={Register} />
        <Tab.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
          initialParams={params} />

        <Tab.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login} />

        <Tab.Screen
          options={{ headerShown: false }}
          name="Cart"
          component={Cart} />

        

      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
