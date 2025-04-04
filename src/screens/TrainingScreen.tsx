import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

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

const Grid = styled.View`
  padding: ${props => props.theme.spacing.md}px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ExerciseCard = styled.TouchableOpacity`
  width: 48%;
  background-color: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.md}px;
  padding: ${props => props.theme.spacing.md}px;
  margin-bottom: ${props => props.theme.spacing.md}px;
`;

const ExerciseIcon = styled.View`
  width: 60px;
  height: 60px;
  border-radius: ${props => props.theme.borderRadius.md}px;
  background-color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.md}px;
`;

const ExerciseTitle = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.typography.body.fontSize}px;
  font-weight: ${props => props.theme.typography.h2.fontWeight};
  margin-bottom: ${props => props.theme.spacing.xs}px;
`;

const ExerciseDescription = styled.Text`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.typography.caption.fontSize}px;
`;

const DifficultyBadge = styled.View<{ level: 'easy' | 'medium' | 'hard' }>`
  background-color: ${props => {
    switch (props.level) {
      case 'easy':
        return props.theme.colors.success;
      case 'medium':
        return props.theme.colors.warning;
      case 'hard':
        return props.theme.colors.error;
      default:
        return props.theme.colors.primary;
    }
  }};
  padding: ${props => props.theme.spacing.xs}px ${props => props.theme.spacing.sm}px;
  border-radius: ${props => props.theme.borderRadius.sm}px;
  align-self: flex-start;
  margin-top: ${props => props.theme.spacing.sm}px;
`;

const DifficultyText = styled.Text`
  color: ${props => props.theme.colors.background};
  font-size: ${props => props.theme.typography.caption.fontSize}px;
  font-weight: bold;
`;

const TrainingScreen: React.FC = () => {
  const exercises = [
    {
      id: 1,
      title: '點擊精度',
      description: '提升手指點擊的準確性',
      difficulty: 'easy' as const,
    },
    {
      id: 2,
      title: '軌跡追蹤',
      description: '練習手指的平穩移動',
      difficulty: 'medium' as const,
    },
    {
      id: 3,
      title: '手寫練習',
      description: '提升書寫能力',
      difficulty: 'medium' as const,
    },
    {
      id: 4,
      title: '多點觸控',
      description: '訓練多指協調能力',
      difficulty: 'hard' as const,
    },
    {
      id: 5,
      title: '節奏控制',
      description: '提升動作節奏感',
      difficulty: 'medium' as const,
    },
    {
      id: 6,
      title: '壓力控制',
      description: '練習觸控壓力控制',
      difficulty: 'hard' as const,
    },
  ];

  return (
    <Container>
      <ScrollView>
        <Header>
          <Title>訓練項目</Title>
        </Header>
        <Grid>
          {exercises.map(exercise => (
            <ExerciseCard key={exercise.id} onPress={() => {}}>
              <ExerciseIcon />
              <ExerciseTitle>{exercise.title}</ExerciseTitle>
              <ExerciseDescription>{exercise.description}</ExerciseDescription>
              <DifficultyBadge level={exercise.difficulty}>
                <DifficultyText>
                  {exercise.difficulty === 'easy' ? '簡單' :
                   exercise.difficulty === 'medium' ? '中等' : '困難'}
                </DifficultyText>
              </DifficultyBadge>
            </ExerciseCard>
          ))}
        </Grid>
      </ScrollView>
    </Container>
  );
};

export default TrainingScreen; 