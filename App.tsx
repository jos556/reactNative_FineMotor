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
import GamesScreen from './src/screens/GamesScreen';
import ProgressScreen from './src/screens/ProgressScreen';
import ProfileScreen from './src/screens/ProfileScreen';

// Import components
import TabBar from './src/components/TabBar';

// Import theme
import theme from './src/theme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TrainingStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="TrainingList" component={TrainingScreen} />
    {/* Add more training-related screens here */}
  </Stack.Navigator>
);

const GamesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="GamesList" component={GamesScreen} />
    {/* Add more game-related screens here */}
  </Stack.Navigator>
);

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <Tab.Navigator
            tabBar={(props) => <TabBar {...props} />}
            screenOptions={{
              headerShown: false,
            }}
          >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Training" component={TrainingStack} />
            <Tab.Screen name="Games" component={GamesStack} />
            <Tab.Screen name="Progress" component={ProgressScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
