// useThemeColorStore.ts
import { create } from 'zustand';
import { ThemeColorType } from '../@types/ThemeColorType';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ThemeColorStore = {
    themeColor: ThemeColorType;
    isDarkMode: boolean;  
    isLightMode: boolean; 
    setThemeColor: (themeColor: ThemeColorType) => void;
    toggleThemeColor: () => void;
};

export const useThemeColorStore = create<ThemeColorStore>()(
    persist(
        (set) => ({
            themeColor: 'light',
            isDarkMode: false,  
            isLightMode: true,  
            setThemeColor: (newThemeColor: ThemeColorType) => {
                set({
                    themeColor: newThemeColor,
                    isDarkMode: newThemeColor === 'dark',
                    isLightMode: newThemeColor === 'light',
                });
            },
            toggleThemeColor: () => {
                set((state: ThemeColorStore) => {
                    const newThemeColor = state.themeColor === 'light' ? 'dark' : 'light';
                    return {
                        themeColor: newThemeColor,
                        isDarkMode: newThemeColor === 'dark',
                        isLightMode: newThemeColor === 'light',
                    };
                });
            },
        }),
        {
            name: 'theme-color',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
