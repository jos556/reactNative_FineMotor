import React from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styled from 'styled-components/native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const TabBarContainer = styled.View`
  flex-direction: row;
  height: 60px;
  background-color: ${props => props.theme.colors.surface};
  border-top-width: 1px;
  border-top-color: ${props => props.theme.colors.textSecondary};
`;

const TabItem = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

interface TabIconProps {
  isActive: boolean;
}

const TabIcon = styled(Image)<TabIconProps>`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  tint-color: ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.textSecondary};
`;

const TabText = styled.Text<{ isActive: boolean }>`
  font-size: 12px;
  color: ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.textSecondary};
`;

type IconKey = 'home' | 'training' | 'games' | 'progress' | 'profile';

// 預先導入所有圖標
const icons: Record<IconKey, any> = {
  home: require('../assets/home.png'),
  training: require('../assets/triaining.png'),
  games: require('../assets/games.png'),
  progress: require('../assets/progress.png'),
  profile: require('../assets/profile.png'),
};

const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <TabBarContainer>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const label = typeof options.tabBarLabel === 'string' 
          ? options.tabBarLabel 
          : typeof options.title === 'string' 
            ? options.title 
            : route.name;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const getIconSource = () => {
          const iconKey = route.name.toLowerCase() as IconKey;
          console.log('Looking for icon:', iconKey);
          console.log('Available icons:', Object.keys(icons));
          
          if (icons[iconKey]) {
            console.log('Found icon for:', iconKey);
            return icons[iconKey];
          }
          
          console.warn(`No icon found for route: ${route.name}`);
          return null;
        };

        const iconSource = getIconSource();

        return (
          <TabItem
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {iconSource && (
              <TabIcon
                source={iconSource}
                isActive={isFocused}
              />
            )}
            <TabText isActive={isFocused}>{label}</TabText>
          </TabItem>
        );
      })}
    </TabBarContainer>
  );
};

export default TabBar; 