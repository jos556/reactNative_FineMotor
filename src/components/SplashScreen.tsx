import React, { useEffect } from 'react';
import { Animated, Dimensions } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
`;

const Logo = styled.Image`
  width: 200px;
  height: 200px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: ${props => props.theme.colors.primary};
  margin-top: 20px;
  font-weight: bold;
`;

interface SplashScreenProps {
  onAnimationComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onAnimationComplete }) => {
  const scaleValue = new Animated.Value(0);
  const opacityValue = new Animated.Value(0);

  useEffect(() => {
    // Scale animation
    Animated.sequence([
      // First show the logo with scaling
      Animated.spring(scaleValue, {
        toValue: 1,
        tension: 20,
        friction: 7,
        useNativeDriver: true,
      }),
      // Then show the title with fade in
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      // Wait for a moment
      Animated.delay(500),
    ]).start(() => {
      // Add a small delay before completing
      setTimeout(onAnimationComplete, 500);
    });
  }, []);

  return (
    <Container>
      <Animated.View
        style={{
          transform: [{ scale: scaleValue }],
        }}
      >
        <Logo source={require('../assets/developmotionlogo.png')} resizeMode="contain" />
      </Animated.View>
      <Animated.Text
        style={[
          {
            fontSize: 24,
            color: '#6200ee',
            marginTop: 20,
            fontWeight: 'bold',
            opacity: opacityValue,
          },
        ]}
      >
        Develop Motion
      </Animated.Text>
    </Container>
  );
};

export default SplashScreen; 