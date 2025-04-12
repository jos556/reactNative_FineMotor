import React, { useEffect } from 'react';
import { Animated, ViewProps } from 'react-native';
import styled from 'styled-components/native';

interface JiggleViewProps extends ViewProps {
  isActive?: boolean;
  children: React.ReactNode;
}

const Container = styled(Animated.View)``;

const JiggleView: React.FC<JiggleViewProps> = ({ 
  isActive = true, 
  children,
  style,
  ...props 
}) => {
  // Create animated values for rotation, scale and opacity
  const rotation = React.useRef(new Animated.Value(-45)).current;
  const scale = React.useRef(new Animated.Value(0)).current;
  const opacity = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isActive) {
      // Create the animation sequence
      Animated.sequence([
        // Initial state (invisible)
        Animated.timing(opacity, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true,
        }),
        Animated.timing(rotation, {
          toValue: -45,
          duration: 0,
          useNativeDriver: true,
        }),
        // Animate to final state
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }),
          Animated.timing(rotation, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
          }),
        ]),
      ]).start();

      return () => {
        opacity.setValue(0);
        scale.setValue(0);
        rotation.setValue(-45);
      };
    }
  }, [isActive, opacity, scale, rotation]);

  const animatedStyle = {
    transform: [
      {
        rotate: rotation.interpolate({
          inputRange: [-45, 0],
          outputRange: ['-45deg', '0deg'],
        }),
      },
      { scale },
    ],
    opacity,
  };

  return (
    <Container style={[animatedStyle, style]} {...props}>
      {children}
    </Container>
  );
};

export default JiggleView; 