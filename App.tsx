/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import TrainingScreen from './src/screens/TrainingScreen';
import ProgressScreen from './src/screens/ProgressScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import GameSelectionScreen from './src/screens/GameSelectionScreen';
import TapMasterScreen from './src/screens/games/TapMasterScreen';

// Import components
import TabBar from './src/components/TabBar';

// Import theme
import { theme } from './src/theme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TrainingStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="TrainingList" component={TrainingScreen} />
  </Stack.Navigator>
);

const GameStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GameSelection" component={GameSelectionScreen} />
      <Stack.Screen name="TapMaster" component={TapMasterScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Tab.Navigator
            tabBar={props => <TabBar {...props} />}
            screenOptions={{
              headerShown: false,
            }}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarLabel: 'Home',
              }}
            />
            <Tab.Screen
              name="Training"
              component={TrainingStack}
              options={{
                tabBarLabel: 'Training',
              }}
            />
            <Tab.Screen
              name="Games"
              component={GameStack}
              options={{
                tabBarLabel: 'Games',
              }}
            />
            <Tab.Screen
              name="Progress"
              component={ProgressScreen}
              options={{
                tabBarLabel: 'Progress',
              }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                tabBarLabel: 'Profile',
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
