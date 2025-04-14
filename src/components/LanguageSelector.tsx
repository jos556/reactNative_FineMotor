import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext';

const Container = styled.View`
  margin: ${props => props.theme.spacing.md}px;
`;

const Button = styled(TouchableOpacity)`
  background-color: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.md}px;
  padding: ${props => props.theme.spacing.md}px;
  flex-direction: row;
  align-items: center;
  elevation: 2;
  shadow-color: ${props => props.theme.colors.text};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
`;

const LanguageText = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.typography.body.fontSize}px;
  margin-left: ${props => props.theme.spacing.md}px;
`;

const Flag = styled.View<{ color: string }>`
  width: 24px;
  height: 24px;
  border-radius: 12px;
  background-color: ${props => props.color};
  border-width: 2px;
  border-color: ${props => props.theme.colors.background};
`;

const LanguageSelector: React.FC = () => {
  const { t } = useTranslation();
  const { currentLanguage, changeLanguage } = useLanguage();

  const languages = [
    { code: 'en', name: t('languages.english'), color: '#1E88E5' },
    { code: 'zh-TW', name: t('languages.traditionalChinese'), color: '#F44336' },
    { code: 'zh-CN', name: t('languages.simplifiedChinese'), color: '#4CAF50' },
    { code: 'es', name: t('languages.spanish'), color: '#FFC107' },
  ];

  return (
    <Container>
      {languages.map((language) => (
        <Button
          key={language.code}
          onPress={() => changeLanguage(language.code)}
          style={{
            backgroundColor: currentLanguage === language.code
              ? language.color + '20'
              : undefined,
          }}
        >
          <Flag color={language.color} />
          <LanguageText>{language.name}</LanguageText>
        </Button>
      ))}
    </Container>
  );
};

export default LanguageSelector; 