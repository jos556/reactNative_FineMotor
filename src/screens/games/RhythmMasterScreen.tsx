import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.lg}px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: ${props => props.theme.typography.h1.fontSize}px;
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.lg}px;
  text-align: center;
  font-weight: bold;
`;

const RhythmMasterScreen: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t('games.rhythm.title')}</Title>
      {/* Game implementation will go here */}
    </Container>
  );
};

export default RhythmMasterScreen; 