import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

type RootStackParamList = {
  TapMaster: undefined;
  DrawingChallenge: undefined;
  RhythmMaster: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.lg}px;
`;

const Title = styled.Text`
  font-size: ${props => props.theme.typography.h1.fontSize}px;
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.lg}px;
  text-align: center;
  font-weight: bold;
`;

const Description = styled.Text`
  font-size: ${props => props.theme.typography.body.fontSize}px;
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.xl}px;
  text-align: center;
  line-height: 24px;
`;

const GameCard = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.lg}px;
  padding: ${props => props.theme.spacing.lg}px;
  margin-bottom: ${props => props.theme.spacing.lg}px;
  elevation: 3;
  shadow-color: ${props => props.theme.colors.text};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.1;
  shadow-radius: 4px;
`;

const GameHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.md}px;
`;

const GameIcon = styled.Image`
  width: 32px;
  height: 32px;
  margin-right: ${props => props.theme.spacing.md}px;
  tint-color: ${props => props.theme.colors.primary};
`;

const GameTitle = styled.Text`
  font-size: 20px;
  color: ${props => props.theme.colors.text};
  font-weight: bold;
  flex: 1;
`;

const GameDescription = styled.Text`
  font-size: ${props => props.theme.typography.body.fontSize}px;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.lg}px;
  line-height: 20px;
`;

const BenefitsContainer = styled.View`
  background-color: ${props => props.theme.colors.primary}15;
  padding: ${props => props.theme.spacing.lg}px;
  border-radius: ${props => props.theme.borderRadius.md}px;
`;

const BenefitsTitle = styled.Text`
  font-size: 16px;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing.md}px;
`;

const BenefitItem = styled.Text`
  font-size: ${props => props.theme.typography.body.fontSize}px;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.xs}px;
  line-height: 20px;
`;

const GameSelectionScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { t } = useTranslation();

  const games = [
    {
      id: 'tap',
      title: t('games.tap.title'),
      icon: require('../assets/tap.png'),
      description: t('games.tap.description'),
      benefits: t('games.tap.benefits', { returnObjects: true }) as string[]
    },
    {
      id: 'drawing',
      title: t('games.drawing.title'),
      icon: require('../assets/color.png'),
      description: t('games.drawing.description'),
      benefits: t('games.drawing.benefits', { returnObjects: true }) as string[]
    },
    {
      id: 'rhythm',
      title: t('games.rhythm.title'),
      icon: require('../assets/metronome.png'),
      description: t('games.rhythm.description'),
      benefits: t('games.rhythm.benefits', { returnObjects: true }) as string[]
    }
  ];

  const handleGamePress = (gameId: string) => {
    switch (gameId) {
      case 'tap':
        navigation.navigate('TapMaster');
        break;
      case 'drawing':
        navigation.navigate('DrawingChallenge');
        break;
      case 'rhythm':
        navigation.navigate('RhythmMaster');
        break;
    }
  };

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>{t('games.title')}</Title>
        <Description>{t('games.description')}</Description>

        {games.map(game => (
          <GameCard key={game.id} onPress={() => handleGamePress(game.id)}>
            <GameHeader>
              <GameIcon source={game.icon} resizeMode="contain" />
              <GameTitle>{game.title}</GameTitle>
            </GameHeader>
            <GameDescription>{game.description}</GameDescription>
            <BenefitsContainer>
              <BenefitsTitle>{t('games.benefits')}</BenefitsTitle>
              {game.benefits.map((benefit: string, index: number) => (
                <BenefitItem key={index}>• {benefit}</BenefitItem>
              ))}
            </BenefitsContainer>
          </GameCard>
        ))}
      </ScrollView>
    </Container>
  );
};

export default GameSelectionScreen; 