import { Tabs } from 'expo-router';
import { useColorScheme } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import Colors from '../../constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              // @ts-ignore
              name="home-sharp"
              size={20}
              color={focused ? 'blue' : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Buscar',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              // @ts-ignore
              name="search-sharp"
              size={20}
              color={focused ? 'blue' : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Carrinho',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              // @ts-ignore
              name="cart-sharp"
              size={20}
              color={focused ? 'blue' : "black"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              // @ts-ignore
              name="menu-sharp"
              size={20}
              color={focused ? 'blue' : "black"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
