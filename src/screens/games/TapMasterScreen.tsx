import React, { useState, useEffect, useCallback } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.lg}px;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.lg}px;
`;

const TimerText = styled.Text`
  font-size: ${props => props.theme.typography.h2.fontSize}px;
  color: ${props => props.theme.colors.text};
`;

const ScoreText = styled.Text`
  font-size: ${props => props.theme.typography.h2.fontSize}px;
  color: ${props => props.theme.colors.text};
`;

const GameArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Dot = styled.TouchableOpacity<{ color: string }>`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${props => props.color};
  position: absolute;
`;

const GameOverModal = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const GameOverContent = styled.View`
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.lg}px;
  border-radius: ${props => props.theme.borderRadius.md}px;
  width: 80%;
`;

const GameOverTitle = styled.Text`
  font-size: ${props => props.theme.typography.h1.fontSize}px;
  color: ${props => props.theme.colors.text};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.md}px;
`;

const GameOverText = styled.Text`
  font-size: ${props => props.theme.typography.body.fontSize}px;
  color: ${props => props.theme.colors.text};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.md}px;
`;

const RestartButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.spacing.md}px;
  border-radius: ${props => props.theme.borderRadius.md}px;
  align-items: center;
`;

const RestartButtonText = styled.Text`
  color: ${props => props.theme.colors.background};
  font-size: ${props => props.theme.typography.body.fontSize}px;
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
  const [timeLeft, setTimeLeft] = useState(20);
  const [score, setScore] = useState(0);
  const [dots, setDots] = useState<Dot[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [lastTapTime, setLastTapTime] = useState<number | null>(null);
  const [averageReactionTime, setAverageReactionTime] = useState<number>(0);
  const [tapCount, setTapCount] = useState<number>(0);

  const generateDot = useCallback(() => {
    const types: DotType[] = ['green', 'red', 'yellow'];
    const type = types[Math.floor(Math.random() * types.length)];
    const x = Math.random() * (300 - 50);
    const y = Math.random() * (500 - 50);
    const id = Date.now();
    
    setDots(prev => [...prev, { id, type, x, y, createdAt: Date.now() }]);
  }, []);

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
              <GameOverTitle>遊戲結束</GameOverTitle>
              <GameOverText>最終分數: {score}</GameOverText>
              <GameOverText>平均反應時間: {averageReactionTime.toFixed(2)}ms</GameOverText>
              <RestartButton onPress={handleRestart}>
                <RestartButtonText>再玩一次</RestartButtonText>
              </RestartButton>
            </GameOverContent>
          </GameOverModal>
        )}
      </GameArea>
    </Container>
  );
};

export default TapMasterScreen; 