import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../components/LanguageSelector';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
`;

const Header = styled.View`
  padding: ${props => props.theme.spacing.xl}px;
  background-color: ${props => props.theme.colors.primary};
  align-items: center;
`;

const Avatar = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: ${props => props.theme.colors.surface};
  margin-bottom: ${props => props.theme.spacing.md}px;
`;

const UserName = styled.Text`
  color: ${props => props.theme.colors.background};
  font-size: ${props => props.theme.typography.h1.fontSize}px;
  font-weight: ${props => props.theme.typography.h1.fontWeight};
  margin-bottom: ${props => props.theme.spacing.xs}px;
`;

const UserEmail = styled.Text`
  color: ${props => props.theme.colors.background};
  font-size: ${props => props.theme.typography.body.fontSize}px;
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

const MenuItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: ${props => props.theme.spacing.md}px;
  background-color: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.md}px;
  margin-bottom: ${props => props.theme.spacing.sm}px;
`;

const MenuIcon = styled.View`
  width: 24px;
  height: 24px;
  border-radius: ${props => props.theme.borderRadius.sm}px;
  background-color: ${props => props.theme.colors.primary};
  margin-right: ${props => props.theme.spacing.md}px;
`;

const MenuText = styled.Text`
  flex: 1;
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.typography.body.fontSize}px;
`;

const MenuValue = styled.Text`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.typography.body.fontSize}px;
`;

const AchievementGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const AchievementCard = styled.View`
  width: 48%;
  background-color: ${props => props.theme.colors.surface};
  border-radius: ${props => props.theme.borderRadius.md}px;
  padding: ${props => props.theme.spacing.md}px;
  margin-bottom: ${props => props.theme.spacing.md}px;
  align-items: center;
`;

const AchievementIcon = styled.View`
  width: 48px;
  height: 48px;
  border-radius: ${props => props.theme.borderRadius.md}px;
  background-color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.sm}px;
`;

const AchievementTitle = styled.Text`
  color: ${props => props.theme.colors.text};
  font-size: ${props => props.theme.typography.body.fontSize}px;
  font-weight: ${props => props.theme.typography.h2.fontWeight};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xs}px;
`;

const AchievementDate = styled.Text`
  color: ${props => props.theme.colors.textSecondary};
  font-size: ${props => props.theme.typography.caption.fontSize}px;
  text-align: center;
`;

const ProfileScreen: React.FC = () => {
  const { t } = useTranslation();

  const menuItems = [
    { icon: '⚙️', text: '個人設定', value: '' },
    { icon: '🎯', text: '訓練目標', value: '每週3次' },
    { icon: '🔔', text: '通知設定', value: '開啟' },
    { icon: '🌙', text: '深色模式', value: '關閉' },
    { icon: '❓', text: '幫助中心', value: '' },
  ];

  const achievements = [
    {
      id: 1,
      title: '初次見面',
      date: '2024/03/01',
    },
    {
      id: 2,
      title: '練習達人',
      date: '2024/03/15',
    },
    {
      id: 3,
      title: '持之以恆',
      date: '2024/03/28',
    },
    {
      id: 4,
      title: '完美表現',
      date: '2024/04/01',
    },
  ];

  return (
    <Container>
      <Header>
        <Avatar />
        <UserName>John Doe</UserName>
        <UserEmail>john.doe@example.com</UserEmail>
      </Header>
      <ScrollView>
        <Section>
          <SectionTitle>{t('profile.settings')}</SectionTitle>
          {menuItems.map((item, index) => (
            <MenuItem key={index} onPress={() => {}}>
              <MenuIcon />
              <MenuText>{item.text}</MenuText>
              {item.value && <MenuValue>{item.value}</MenuValue>}
            </MenuItem>
          ))}
        </Section>
        <Section>
          <SectionTitle>{t('profile.language')}</SectionTitle>
          <LanguageSelector />
        </Section>
        <Section>
          <SectionTitle>成就</SectionTitle>
          <AchievementGrid>
            {achievements.map(achievement => (
              <AchievementCard key={achievement.id}>
                <AchievementIcon />
                <AchievementTitle>{achievement.title}</AchievementTitle>
                <AchievementDate>{achievement.date}</AchievementDate>
              </AchievementCard>
            ))}
          </AchievementGrid>
        </Section>
      </ScrollView>
    </Container>
  );
};

export default ProfileScreen; 