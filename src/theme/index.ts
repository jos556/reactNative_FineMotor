import { DefaultTheme } from 'styled-components/native';

const theme: DefaultTheme = {
  colors: {
    primary: '#4A90E2',
    secondary: '#50E3C2',
    background: '#FFFFFF',
    surface: '#F5F5F5',
    text: '#333333',
    textSecondary: '#666666',
    success: '#4CAF50',
    error: '#F44336',
    warning: '#FFC107',
  },
  typography: {
    h1: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    body: {
      fontSize: 16,
      fontWeight: 'normal',
    },
    caption: {
      fontSize: 14,
      fontWeight: 'normal',
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
  },
};

export default theme; 