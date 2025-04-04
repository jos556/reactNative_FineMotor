import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

const Header = styled.View`
  padding: ${props => props.theme.spacing.lg}px;
  background-color: ${props => props.theme.colors.primary};
`;

const Title = styled.Text`
  color: ${props => props.theme.colors.background};
  font-size: ${props => props.theme.typography.h1.fontSize}px;
  font-weight: ${props => props.theme.typography.h1.fontWeight};
`;

const Subtitle = styled.Text`
  color: ${props => props.theme.colors.background};
  font-size: ${props => props.theme.typography.body.fontSize}px;
  margin-top: ${props => props.theme.spacing.xs}px;
  opacity: 0.8;
`;

const Section = styled.View`
  padding: ${props => props.theme.spacing.lg}px;
`;

const SectionTitle = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.typography.h2.fontSize}px;
  font-weight: ${props => props.theme.typography.h2.fontWeight};
  margin-bottom: ${props => props.theme.spacing.md}px;
`;

const Card = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.md}px;
  padding: ${props => props.theme.spacing.md}px;
  margin-bottom: ${props => props.theme.spacing.md}px;
  flex-direction: row;
  align-items: center;
`;

const CardIcon = styled.View`
  width: 48px;
  height: 48px;
  border-radius: ${props => props.theme.borderRadius.sm}px;
  background-color: ${props => props.theme.colors.primary};
  margin-right: ${props => props.theme.spacing.md}px;
`;

const CardContent = styled.View`
  flex: 1;
`;

const CardTitle = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.typography.body.fontSize}px;
  font-weight: ${props => props.theme.typography.h2.fontWeight};
`;

const CardDescription = styled.Text`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.typography.caption.fontSize}px;
  margin-top: ${props => props.theme.spacing.xs}px;
`;

const HomeScreen: React.FC = () => {
  return (
    <Container>
      <ScrollView>
        <Header>
          <Title>精細動作訓練</Title>
          <Subtitle>提升您的手部控制能力</Subtitle>
        </Header>

        <Section>
          <SectionTitle>今日推薦</SectionTitle>
          <Card onPress={() => {}}>
            <CardIcon />
            <CardContent>
              <CardTitle>點擊精度訓練</CardTitle>
              <CardDescription>通過有趣的遊戲提升手指精確度</CardDescription>
            </CardContent>
          </Card>
          <Card onPress={() => {}}>
            <CardIcon />
            <CardContent>
              <CardTitle>軌跡追蹤練習</CardTitle>
              <CardDescription>練習手指的平穩移動能力</CardDescription>
            </CardContent>
          </Card>
        </Section>

        <Section>
          <SectionTitle>進階練習</SectionTitle>
          <Card onPress={() => {}}>
            <CardIcon />
            <CardContent>
              <CardTitle>手寫練習</CardTitle>
              <CardDescription>提升書寫能力和筆劃控制</CardDescription>
            </CardContent>
          </Card>
          <Card onPress={() => {}}>
            <CardIcon />
            <CardContent>
              <CardTitle>多點觸控協調</CardTitle>
              <CardDescription>訓練多指協調能力</CardDescription>
            </CardContent>
          </Card>
        </Section>
      </ScrollView>
    </Container>
  );
};

export default HomeScreen; 