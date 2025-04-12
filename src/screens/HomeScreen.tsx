import React, { useState } from 'react';
import styled from 'styled-components/native';
import JiggleView from '../components/JiggleView';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  padding: ${props => props.theme.spacing.lg}px;
`;

const Title = styled.Text`
  font-size: ${props => props.theme.typography.h1.fontSize}px;
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.lg}px;
`;

const Content = styled.Text`
  font-size: ${props => props.theme.typography.body.fontSize}px;
  color: ${props => props.theme.colors.text};
  margin-bottom: ${props => props.theme.spacing.xl}px;
`;

const IconGrid = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: ${props => props.theme.spacing.lg}px;
`;

const IconContainer = styled.View`
  width: 80px;
  height: 80px;
  margin: ${props => props.theme.spacing.md}px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 15px;
`;

const HomeScreen: React.FC = () => {
  const [isJiggling, setIsJiggling] = useState(true);

  const icons = Array(6).fill(0); // Create 6 demo icons

  return (
    <Container>
      <Title>Welcome to Fine Motor Control Training App</Title>
      <Content>
        This is an application designed to help you improve your fine motor control skills.
        You can enhance your hand coordination through various games and training exercises.
      </Content>
      
      <IconGrid>
        {icons.map((_, index) => (
          <JiggleView key={index} isActive={isJiggling}>
            <IconContainer />
          </JiggleView>
        ))}
      </IconGrid>
    </Container>
  );
};

export default HomeScreen; 