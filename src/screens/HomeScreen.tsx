import React from 'react';
import styled from 'styled-components/native';

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
`;

const HomeScreen: React.FC = () => {
  return (
    <Container>
      <Title>Welcome to Fine Motor Control Training App</Title>
      <Content>
        This is an application designed to help you improve your fine motor control skills.
        You can enhance your hand coordination through various games and training exercises.
      </Content>
    </Container>
  );
};

export default HomeScreen; 