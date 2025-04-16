import React, { useState, useEffect, useCallback } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.lg}px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: ${props => props.theme.colors.text};
  text-align: center;
  font-weight: bold;
  padding: ${props => props.theme.spacing.md}px;
`;

const TimerText = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.colors.text};
`;

const ScoreText = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.colors.text};
`;

const GameArea = styled.View`
  flex: 1;
  position: relative;
  background-color: ${props => props.theme.colors.background};
`;

const Dot = styled.TouchableOpacity<{ color: string }>`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${props => props.color};
  position: absolute;
  justify-content: center;
  align-items: center;
`;

const GameOverModal = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  justify-content: center;
  align-items: center;
`;

const GameOverContent = styled.View`
  background-color: ${props => props.theme.colors.surface};
  padding: ${props => props.theme.spacing.xl}px;
  border-radius: ${props => props.theme.borderRadius.lg}px;
  width: 80%;
  align-items: center;
`;

const GameOverTitle = styled.Text`
  font-size: 24px;
  color: ${props => props.theme.colors.text};
  font-weight: bold;
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.lg}px;
`;

const GameOverText = styled.Text`
  font-size: 18px;
  color: ${props => props.theme.colors.text};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.md}px;
`;

const ButtonContainer = styled.View`
  width: 100%;
  margin-top: ${props => props.theme.spacing.lg}px;
`;

const Button = styled.TouchableOpacity<{ variant?: 'primary' | 'secondary' }>`
  background-color: ${props => props.variant === 'secondary' ? props.theme.colors.surface : props.theme.colors.primary};
  padding: ${props => props.theme.spacing.md}px;
  border-radius: ${props => props.theme.borderRadius.md}px;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.md}px;
  width: 100%;
  border: ${props => props.variant === 'secondary' ? `2px solid ${props.theme.colors.primary}` : 'none'};
`;

const ButtonText = styled.Text<{ variant?: 'primary' | 'secondary' }>`
  color: ${props => props.variant === 'secondary' ? props.theme.colors.primary : props.theme.colors.surface};
  font-size: 16px;
  font-weight: bold;
`;

type DotType = 'green' | 'red' | 'yellow';

interface Dot {
  id: number;
  type: DotType;
  x: number;
  y: number;
  createdAt: number;
}

const TapMasterScreen: React.FC = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState(20);
  const [score, setScore] = useState(0);
  const [dots, setDots] = useState<Dot[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [lastTapTime, setLastTapTime] = useState<number | null>(null);
  const [averageReactionTime, setAverageReactionTime] = useState<number>(0);
  const [tapCount, setTapCount] = useState<number>(0);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const gameAreaHeight = windowHeight - 200; // Adjust for header and padding

  const generateDot = useCallback(() => {
    const types: DotType[] = ['green', 'red', 'yellow'];
    const type = types[Math.floor(Math.random() * types.length)];
    
    // Adjust the positioning to stay within visible bounds
    const x = Math.random() * (windowWidth - 80); // Account for dot size
    const y = Math.random() * (gameAreaHeight - 80); // Account for dot size
    
    const id = Date.now();
    setDots(prev => [...prev, { id, type, x, y, createdAt: Date.now() }]);
  }, [windowWidth, gameAreaHeight]);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setGameOver(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      const dotInterval = setInterval(() => {
        generateDot();
      }, 1000);

      return () => {
        clearInterval(timer);
        clearInterval(dotInterval);
      };
    }
  }, [timeLeft, gameOver, generateDot]);

  const handleDotPress = (dot: Dot) => {
    const now = Date.now();
    const reactionTime = now - dot.createdAt;
    
    if (dot.type === 'green') {
      setScore(prev => prev + 10);
      setTapCount(prev => prev + 1);
      setAverageReactionTime(prev => (prev * (tapCount) + reactionTime) / (tapCount + 1));
    } else if (dot.type === 'red') {
      setScore(prev => Math.max(0, prev - 5));
    } else if (dot.type === 'yellow') {
      setScore(prev => prev + 15);
      setTapCount(prev => prev + 1);
      setAverageReactionTime(prev => (prev * (tapCount) + reactionTime) / (tapCount + 1));
    }

    setDots(prev => prev.filter(d => d.id !== dot.id));
  };

  const handleRestart = () => {
    setTimeLeft(20);
    setScore(0);
    setDots([]);
    setGameOver(false);
    setLastTapTime(null);
    setAverageReactionTime(0);
    setTapCount(0);
  };

  return (
    <Container>
      <Title>{t('games.tap.title')}</Title>
      <Header>
        <TimerText>時間: {timeLeft}秒</TimerText>
        <ScoreText>分數: {score}</ScoreText>
      </Header>

      <GameArea>
        {dots.map(dot => (
          <Dot
            key={dot.id}
            color={
              dot.type === 'green' ? '#4CAF50' :
              dot.type === 'red' ? '#F44336' :
              '#FFC107'
            }
            style={{ left: dot.x, top: dot.y }}
            onPress={() => handleDotPress(dot)}
          />
        ))}

        {gameOver && (
          <GameOverModal>
            <GameOverContent>
              <GameOverTitle>遊戲結束！</GameOverTitle>
              <GameOverText>最終分數: {score}</GameOverText>
              <GameOverText>平均反應時間: {averageReactionTime.toFixed(2)}ms</GameOverText>
              <ButtonContainer>
                <Button onPress={handleRestart}>
                  <ButtonText>再玩一次</ButtonText>
                </Button>
                <Button 
                  variant="secondary" 
                  onPress={() => navigation.navigate('GameSelection')}
                >
                  <ButtonText variant="secondary">返回遊戲選單</ButtonText>
                </Button>
              </ButtonContainer>
            </GameOverContent>
          </GameOverModal>
        )}
      </GameArea>
    </Container>
  );
};

export default TapMasterScreen; 