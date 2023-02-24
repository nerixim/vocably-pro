import { FC, useContext } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LookUpScreen } from './LookUpScreen';
import { LanguagesContext } from './languages/LanguagesContainer';
import { WelcomeStack } from './WelcomeStack';
import { DeckStack } from './DeckStack';

const Tabs = createMaterialBottomTabNavigator();

type TabsNavigator = FC<{}>;

export const TabsNavigator: TabsNavigator = () => {
  const { selectedLanguage } = useContext(LanguagesContext);
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="DeckScreen"
        options={{
          title: 'Deck',
          tabBarIcon: ({ color }) => (
            <Icon name="card-multiple-outline" color={color} size={24} />
          ),
        }}
        component={selectedLanguage === '' ? WelcomeStack : DeckStack}
      />
      <Tabs.Screen
        name="LookUp"
        component={LookUpScreen}
        options={{
          title: 'Look up',
          tabBarIcon: ({ color }) => (
            <Icon name="translate" color={color} size={24} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};
