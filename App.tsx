/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { I18nextProvider } from 'react-i18next';
import { LanguageProvider } from './src/contexts/LanguageContext';
import theme from './src/theme';
import i18n from './src/i18n';
import TabBar from './src/components/TabBar';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import TrainingScreen from './src/screens/TrainingScreen';
import GamesScreen from './src/screens/GamesScreen';
import ProgressScreen from './src/screens/ProgressScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <ThemeProvider theme={theme}>
          <SafeAreaProvider>
            <StatusBar barStyle="dark-content" />
            <NavigationContainer>
              <Tab.Navigator
                tabBar={(props) => <TabBar {...props} />}
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
                  component={TrainingScreen}
                  options={{
                    tabBarLabel: 'Training',
                  }}
                />
                <Tab.Screen 
                  name="Games" 
                  component={GamesScreen}
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
          </SafeAreaProvider>
        </ThemeProvider>
      </LanguageProvider>
    </I18nextProvider>
  );
};

export default App;
