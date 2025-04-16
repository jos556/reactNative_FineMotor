import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GameSelectionScreen from '../screens/GameSelectionScreen';
import TapMasterScreen from '../screens/games/TapMasterScreen';
import DrawingChallengeScreen from '../screens/games/DrawingChallengeScreen';
import RhythmMasterScreen from '../screens/games/RhythmMasterScreen';

const Stack = createNativeStackNavigator();

const GameStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="GameSelection" component={GameSelectionScreen} />
      <Stack.Screen name="TapMaster" component={TapMasterScreen} />
      <Stack.Screen name="DrawingChallenge" component={DrawingChallengeScreen} />
      <Stack.Screen name="RhythmMaster" component={RhythmMasterScreen} />
    </Stack.Navigator>
  );
};

export default GameStack; 