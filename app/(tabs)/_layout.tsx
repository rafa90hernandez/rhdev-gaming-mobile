import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#050505',
          borderTopColor: 'rgba(57,255,20,0.35)',
        },
        tabBarActiveTintColor: '#39ff14',
        tabBarInactiveTintColor: '#777777',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'RHDev Gaming',
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}