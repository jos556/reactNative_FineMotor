import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      surface: string;
      text: string;
      textSecondary: string;
      success: string;
      error: string;
      warning: string;
    };
    typography: {
      h1: {
        fontSize: number;
        fontWeight: string;
      };
      h2: {
        fontSize: number;
        fontWeight: string;
      };
      body: {
        fontSize: number;
        fontWeight: string;
      };
      caption: {
        fontSize: number;
        fontWeight: string;
      };
    };
    spacing: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
    };
    borderRadius: {
      sm: number;
      md: number;
      lg: number;
    };
  }
} 