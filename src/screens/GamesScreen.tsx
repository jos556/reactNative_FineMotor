import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

const Header = styled.View`
  padding: ${props => props.theme.spacing.lg}px;
  background-color: ${props => props.theme.colors.background};
`;

const Title = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.typography.h1.fontSize}px;
  font-weight: ${props => props.theme.typography.h1.fontWeight};
`;

const GameList = styled.View`
  padding: ${props => props.theme.spacing.md}px;
`;

const GameCard = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.lg}px;
  margin-bottom: ${props => props.theme.spacing.md}px;
  overflow: hidden;
`;

const GameImage = styled.View`
  height: 160px;
  background-color: ${props => props.theme.colors.primary};
`;

const GameContent = styled.View`
  padding: ${props => props.theme.spacing.md}px;
`;

const GameTitle = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.typography.h2.fontSize}px;
  font-weight: ${props => props.theme.typography.h2.fontWeight};
  margin-bottom: ${props => props.theme.spacing.xs}px;
`;

const GameDescription = styled.Text`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.typography.body.fontSize}px;
  margin-bottom: ${props => props.theme.spacing.md}px;
`;

const GameStats = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StatContainer = styled.View`
  align-items: center;
`;

const StatValue = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.typography.h2.fontSize}px;
  font-weight: ${props => props.theme.typography.h2.fontWeight};
`;

const StatLabel = styled.Text`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.typography.caption.fontSize}px;
  margin-top: ${props => props.theme.spacing.xs}px;
`;

const GamesScreen: React.FC = () => {
  const { t } = useTranslation();
  const games = [
    {
      id: 1,
      title: t('games.categories.speed'),
      description: t('games.description'),
      players: 2345,
      highScore: 9876,
      level: 5,
    },
    {
      id: 2,
      title: t('games.categories.accuracy'),
      description: t('games.description'),
      players: 1987,
      highScore: 8765,
      level: 3,
    },
    {
      id: 3,
      title: t('games.categories.coordination'),
      description: t('games.description'),
      players: 3456,
      highScore: 12345,
      level: 4,
    },
  ];

  return (
    <Container>
      <Header>
        <Title>{t('games.title')}</Title>
      </Header>
      <ScrollView>
        <GameList>
          {games.map(game => (
            <GameCard key={game.id}>
              <GameImage />
              <GameContent>
                <GameTitle>{game.title}</GameTitle>
                <GameDescription>{game.description}</GameDescription>
                <GameStats>
                  <StatContainer>
                    <StatValue>{game.players}</StatValue>
                    <StatLabel>Players</StatLabel>
                  </StatContainer>
                  <StatContainer>
                    <StatValue>{game.highScore}</StatValue>
                    <StatLabel>High Score</StatLabel>
                  </StatContainer>
                  <StatContainer>
                    <StatValue>{game.level}</StatValue>
                    <StatLabel>Level</StatLabel>
                  </StatContainer>
                </GameStats>
              </GameContent>
            </GameCard>
          ))}
        </GameList>
      </ScrollView>
    </Container>
  );
};

export default GamesScreen; 