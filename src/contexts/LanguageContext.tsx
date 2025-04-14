import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface LanguageContextType {
  currentLanguage: string;
  changeLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  console.log('LanguageProvider mounted with initial language:', currentLanguage);

  const changeLanguage = async (language: string) => {
    console.log('Changing language to:', language);
    try {
      await AsyncStorage.setItem('@language', language);
      console.log('Language saved to AsyncStorage');
      await i18n.changeLanguage(language);
      console.log('i18n language changed');
      setCurrentLanguage(language);
      console.log('Context language updated');
    } catch (error) {
      console.error('Error saving language:', error);
    }
  };

  useEffect(() => {
    const loadSavedLanguage = async () => {
      try {
        const savedLanguage = await AsyncStorage.getItem('@language');
        console.log('Loaded saved language:', savedLanguage);
        if (savedLanguage) {
          await i18n.changeLanguage(savedLanguage);
          console.log('Changed i18n language to saved language');
          setCurrentLanguage(savedLanguage);
          console.log('Updated context language to saved language');
        }
      } catch (error) {
        console.error('Error loading language:', error);
      }
    };

    loadSavedLanguage();

    // 監聽語言變化
    const handleLanguageChange = (lng: string) => {
      console.log('Language changed in context:', lng);
      console.log('Current i18n language:', i18n.language);
      setCurrentLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 