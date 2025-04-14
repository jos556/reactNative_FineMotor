import React, { useEffect } from 'react';
import { Image, Animated } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import JiggleView from '../components/JiggleView';

const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.background};
  justify-content: center;
  align-items: center;
`;

const Logo = styled(Image)`
  width: 200px;
  height: 200px;
`;

const TextContainer = styled(Animated.View)`
  margin-top: 20px;
`;

const Subtitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colors.text};
`;

const SplashScreen: React.FC = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const textPosition = React.useRef(new Animated.Value(-100)).current;
  const textOpacity = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start text animation after a short delay
    const textAnimation = Animated.parallel([
      Animated.timing(textPosition, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(textOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]);

    // Start text animation after logo animation begins
    setTimeout(() => {
      textAnimation.start();
    }, 200);

    // Navigate to Home screen after animations complete
    const timer = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'MainTabs' }],
      });
    }, 2000);

    return () => {
      clearTimeout(timer);
      textPosition.setValue(-100);
      textOpacity.setValue(0);
    };
  }, [navigation, textPosition, textOpacity]);

  return (
    <Container>
      <JiggleView>
        <Logo 
          source={require('../assets/developmotionlogo.png')}
          resizeMode="contain"
        />
      </JiggleView>
      <TextContainer
        style={{
          transform: [{ translateY: textPosition }],
          opacity: textOpacity,
        }}
      >
        <Subtitle>{t('app.splash.subtitle')}</Subtitle>
      </TextContainer>
    </Container>
  );
};

export default SplashScreen; 