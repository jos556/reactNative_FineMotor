import React from 'react';
import { ScrollView, Dimensions } from 'react-native';
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

const Section = styled.View`
  padding: ${props => props.theme.spacing.md}px;
  margin-bottom: ${props => props.theme.spacing.lg}px;
`;

const SectionTitle = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.typography.h2.fontSize}px;
  font-weight: ${props => props.theme.typography.h2.fontWeight};
  margin-bottom: ${props => props.theme.spacing.md}px;
`;

const StatGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StatCard = styled.View`
  width: 48%;
  background-color: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.md}px;
  padding: ${props => props.theme.spacing.md}px;
  margin-bottom: ${props => props.theme.spacing.md}px;
`;

const StatValue = styled.Text`
  color: ${props => props.theme.colors.primary};
  font-size: ${props => props.theme.typography.h1.fontSize}px;
  font-weight: ${props => props.theme.typography.h1.fontWeight};
  margin-bottom: ${props => props.theme.spacing.xs}px;
`;

const StatLabel = styled.Text`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.typography.caption.fontSize}px;
`;

const ProgressBar = styled.View`
  height: 8px;
  background-color: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.sm}px;
  overflow: hidden;
  margin-bottom: ${props => props.theme.spacing.md}px;
`;

const ProgressFill = styled.View<{ width: string }>`
  height: 100%;
  width: ${props => props.width};
  background-color: ${props => props.theme.colors.primary};
`;

const ActivityList = styled.View`
  background-color: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.md}px;
  overflow: hidden;
`;

const ActivityItem = styled.View`
  padding: ${props => props.theme.spacing.md}px;
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.colors.background};
`;

const ActivityIcon = styled.View`
  width: 40px;
  height: 40px;
  border-radius: ${props => props.theme.borderRadius.sm}px;
  background-color: ${props => props.theme.colors.primary};
  margin-right: ${props => props.theme.spacing.md}px;
`;

const ActivityContent = styled.View`
  flex: 1;
`;

const ActivityTitle = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.typography.body.fontSize}px;
  font-weight: ${props => props.theme.typography.h2.fontWeight};
  margin-bottom: ${props => props.theme.spacing.xs}px;
`;

const ActivityMeta = styled.Text`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.typography.caption.fontSize}px;
`;

const ProgressScreen: React.FC = () => {
  const stats = [
    { label: '總訓練時間', value: '12.5小時' },
    { label: '完成練習', value: '48次' },
    { label: '獲得成就', value: '15個' },
    { label: '當前等級', value: 'Lv.5' },
  ];

  const activities = [
    {
      id: 1,
      title: '完成點擊精度訓練',
      meta: '今天 14:30 • 得分：95',
    },
    {
      id: 2,
      title: '完成軌跡追蹤練習',
      meta: '今天 11:20 • 得分：88',
    },
    {
      id: 3,
      title: '完成手寫練習',
      meta: '昨天 16:45 • 得分：92',
    },
  ];

  return (
    <Container>
      <ScrollView>
        <Header>
          <Title>訓練進度</Title>
        </Header>

        <Section>
          <SectionTitle>本週統計</SectionTitle>
          <StatGrid>
            {stats.map((stat, index) => (
              <StatCard key={index}>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatGrid>
        </Section>

        <Section>
          <SectionTitle>等級進度</SectionTitle>
          <ProgressBar>
            <ProgressFill width="75%" />
          </ProgressBar>
        </Section>

        <Section>
          <SectionTitle>最近活動</SectionTitle>
          <ActivityList>
            {activities.map(activity => (
              <ActivityItem key={activity.id}>
                <ActivityIcon />
                <ActivityContent>
                  <ActivityTitle>{activity.title}</ActivityTitle>
                  <ActivityMeta>{activity.meta}</ActivityMeta>
                </ActivityContent>
              </ActivityItem>
            ))}
          </ActivityList>
        </Section>
      </ScrollView>
    </Container>
  );
};

export default ProgressScreen; 