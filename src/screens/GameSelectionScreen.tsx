import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

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
  width: 40px;
  height: 40px;
  margin-right: ${props => props.theme.spacing.md}px;
`;

const GameTitle = styled.Text`
  font-size: ${props => props.theme.typography.h2.fontSize}px;
  color: ${props => props.theme.colors.text};
  font-weight: bold;
`;

const GameDescription = styled.Text`
  font-size: ${props => props.theme.typography.body.fontSize}px;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.md}px;
  line-height: 20px;
`;

const GameBenefits = styled.View`
  background-color: ${props => props.theme.colors.primary}20;
  padding: ${props => props.theme.spacing.md}px;
  border-radius: ${props => props.theme.borderRadius.md}px;
`;

const BenefitsTitle = styled.Text`
  font-size: ${props => props.theme.typography.body.fontSize}px;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
  margin-bottom: ${props => props.theme.spacing.xs}px;
`;

const BenefitsList = styled.Text`
  font-size: ${props => props.theme.typography.caption.fontSize}px;
  color: ${props => props.theme.colors.textSecondary};
  line-height: 18px;
`;

const GameSelectionScreen: React.FC = () => {
  const navigation = useNavigation();

  const games = [
    {
      id: 'tap',
      title: 'Tap Master',
      icon: require('../assets/tap.png'),
      description: 'A fast-paced game that challenges your reaction time and finger coordination. Tap the dots as they appear, but be careful - some dots require different actions!',
      benefits: [
        'Improves reaction time and hand-eye coordination',
        'Enhances fine motor control and finger dexterity',
        'Trains selective attention and decision-making skills',
        'Develops proprioception (body awareness) in fingers'
      ]
    },
    {
      id: 'drawing',
      title: 'Drawing Challenge',
      icon: require('../assets/color.png'),
      description: 'Test your precision and control by following patterns and creating shapes. This game helps develop steady hand movements and spatial awareness.',
      benefits: [
        'Enhances hand stability and control',
        'Improves spatial awareness and coordination',
        'Develops visual-motor integration',
        'Strengthens proprioceptive feedback'
      ]
    },
    {
      id: 'metronome',
      title: 'Rhythm Master',
      icon: require('../assets/metronome.png'),
      description: 'Follow the rhythm and tap in sync with the beat. This game helps develop timing, coordination, and rhythmic awareness.',
      benefits: [
        'Improves timing and rhythm perception',
        'Enhances bilateral coordination',
        'Develops auditory-motor integration',
        'Strengthens proprioceptive timing'
      ]
    }
  ];

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Fine Motor Training Games</Title>
        <Description>
          These games are designed to improve your fine motor control, hand-eye coordination, and proprioception through engaging and challenging exercises.
        </Description>

        {games.map(game => (
          <GameCard
            key={game.id}
            onPress={() => navigation.navigate(game.id === 'tap' ? 'TapMaster' : game.title)}
          >
            <GameHeader>
              <GameIcon source={game.icon} />
              <GameTitle>{game.title}</GameTitle>
            </GameHeader>
            <GameDescription>{game.description}</GameDescription>
            <GameBenefits>
              <BenefitsTitle>Training Benefits:</BenefitsTitle>
              <BenefitsList>
                {game.benefits.map((benefit, index) => (
                  `• ${benefit}\n`
                ))}
              </BenefitsList>
            </GameBenefits>
          </GameCard>
        ))}
      </ScrollView>
    </Container>
  );
};

export default GameSelectionScreen; 