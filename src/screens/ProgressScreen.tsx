import React from 'react';
import { ScrollView, Dimensions } from 'react-native';
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
  justify-content: center;
  align-items: center;
`;

const ActivityIconText = styled.Text`
  font-size: 20px;
`;

const ActivityContent = styled.View`
  flex: 1;
`;

const ActivityTitle = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.typography.body.fontSize}px;
  font-weight: 500;
`;

const ProgressScreen: React.FC = () => {
  const { t } = useTranslation();
  const stats = [
    { label: t('progress.stats.accuracy'), value: '85%', progress: '85%' },
    { label: t('progress.stats.speed'), value: '72%', progress: '72%' },
    { label: t('progress.stats.consistency'), value: '91%', progress: '91%' },
  ];

  const activities = [
    { title: t('progress.charts.daily'), icon: '📊' },
    { title: t('progress.charts.weekly'), icon: '📈' },
    { title: t('progress.charts.monthly'), icon: '📉' },
  ];

  return (
    <Container>
      <Header>
        <Title>{t('progress.title')}</Title>
      </Header>
      <ScrollView>
        <Section>
          <SectionTitle>{t('progress.description')}</SectionTitle>
          <StatGrid>
            {stats.map((stat, index) => (
              <StatCard key={index}>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
                <ProgressBar>
                  <ProgressFill width={stat.progress} />
                </ProgressBar>
              </StatCard>
            ))}
          </StatGrid>
        </Section>

        <Section>
          <SectionTitle>{t('progress.charts.title')}</SectionTitle>
          <ActivityList>
            {activities.map((activity, index) => (
              <ActivityItem key={index}>
                <ActivityIcon>
                  <ActivityIconText>{activity.icon}</ActivityIconText>
                </ActivityIcon>
                <ActivityContent>
                  <ActivityTitle>{activity.title}</ActivityTitle>
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