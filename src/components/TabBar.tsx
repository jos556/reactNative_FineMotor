import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import theme from '../theme';

const TabBarContainer = styled.View`
  flex-direction: row;
  height: 60px;
  background-color: ${props => props.theme.colors.background};
  border-top-width: 1px;
  border-top-color: ${props => props.theme.colors.surface};
`;

const TabItem = styled.TouchableOpacity<{ active: boolean }>`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing.sm}px;
`;

const TabText = styled.Text<{ active: boolean }>`
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.textSecondary};
  font-size: ${props => props.theme.typography.caption.fontSize}px;
  margin-top: ${props => props.theme.spacing.xs}px;
`;

const TabIcon = styled.View<{ active: boolean }>`
  width: 24px;
  height: 24px;
  background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.textSecondary};
  border-radius: ${props => props.theme.borderRadius.sm}px;
`;

const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <TabBarContainer>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

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

        return (
          <TabItem
            key={route.key}
            active={isFocused}
            onPress={onPress}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
          >
            <TabIcon active={isFocused} />
            <TabText active={isFocused}>{label}</TabText>
          </TabItem>
        );
      })}
    </TabBarContainer>
  );
};

export default TabBar; 