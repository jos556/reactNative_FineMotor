import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, ImageStyle } from 'react-native';
import styled from 'styled-components/native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

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

const TabIconContainer = styled.View`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  justify-content: center;
  align-items: center;
`;

const TabText = styled.Text<{ isActive: boolean }>`
  font-size: 12px;
  color: ${props => props.isActive ? props.theme.colors.primary : props.theme.colors.textSecondary};
`;

// 預先導入所有圖標
const icons = {
  home: require('../assets/home.png'),
  training: require('../assets/training.png'),
  games: require('../assets/games.png'),
  progress: require('../assets/progress.png'),
  profile: require('../assets/profile.png'),
};

const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const { t, i18n } = useTranslation();
  const { currentLanguage } = useLanguage();
  const [labels, setLabels] = useState<Record<string, string>>({});

  console.log('TabBar rendering with language:', currentLanguage);

  // 更新標籤
  const updateLabels = () => {
    console.log('Updating tab labels for language:', currentLanguage);
    const newLabels: Record<string, string> = {};
    state.routes.forEach(route => {
      const label = t(`tabs.${route.name.toLowerCase()}`);
      console.log(`Tab ${route.name} label:`, label);
      newLabels[route.name] = label;
    });
    setLabels(newLabels);
  };

  // 初始化和監聽語言變化
  useEffect(() => {
    console.log('TabBar mounted with language:', currentLanguage);
    updateLabels();

    const handleLanguageChange = () => {
      console.log('Language changed in TabBar:', i18n.language);
      updateLabels();
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n, currentLanguage, state.routes]);

  const getIconSource = (routeName: string) => {
    const iconKey = routeName.toLowerCase();
    return icons[iconKey as keyof typeof icons] || null;
  };

  return (
    <TabBarContainer>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;
        const label = labels[route.name] || t(`tabs.${route.name.toLowerCase()}`);

        console.log(`Rendering tab ${route.name} with label:`, label);

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

        const iconSource = getIconSource(route.name);
        const iconStyle: ImageStyle = {
          width: 24,
          height: 24,
          tintColor: isFocused ? '#007AFF' : '#8E8E93',
        };

        return (
          <TabItem
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <TabIconContainer>
              {iconSource && (
                <Image
                  source={iconSource}
                  style={iconStyle}
                  resizeMode="contain"
                />
              )}
            </TabIconContainer>
            <TabText isActive={isFocused}>{label}</TabText>
          </TabItem>
        );
      })}
    </TabBarContainer>
  );
};

export default TabBar; 