import { FC } from 'react';
import { View, ListRenderItem, SectionList, Pressable } from 'react-native';
import { NavigationProp, Route } from '@react-navigation/native';
import { Appbar, Divider, Text, useTheme } from 'react-native-paper';
import { createLanguageList, LanguageListItem } from './createLanguageList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const createItem =
  (onSelect: (language: string) => void): ListRenderItem<LanguageListItem> =>
  ({ item }) => {
    const theme = useTheme();
    return (
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? theme.colors.inversePrimary
              : theme.colors.background,
          },
          { padding: 16 },
        ]}
        onPress={() => onSelect(item.key)}
      >
        <Text style={{ fontSize: 16 }}>
          {item.selected && (
            <>
              <Icon name="check" />{' '}
            </>
          )}
          {item.label}
        </Text>
      </Pressable>
    );
  };

type LanguageSelectorScreen = FC<{
  navigation: NavigationProp<any>;
  route: Route<
    string,
    {
      title: string;
      selected: string;
      preferred: string[];
      onSelect: (language: string) => void;
    }
  >;
}>;

export const LanguageSelectorScreen: LanguageSelectorScreen = ({
  route,
  navigation,
}) => {
  const { title, selected, preferred, onSelect } = route.params;
  const theme = useTheme();
  return (
    <View
      style={{
        height: '100%',
        backgroundColor: theme.colors.background,
      }}
    >
      <Appbar.Header statusBarHeight={0}>
        <Appbar.Content title={title} />
        <Appbar.Action icon="close" onPress={() => navigation.goBack()} />
      </Appbar.Header>
      <SectionList
        sections={createLanguageList({ selected })}
        renderItem={createItem(onSelect)}
        renderSectionHeader={({ section: { title } }) => (
          <Text
            style={{
              padding: 16,
              fontWeight: 'bold',
              backgroundColor: theme.colors.background,
            }}
          >
            {title}
          </Text>
        )}
        ItemSeparatorComponent={Divider}
      />
    </View>
  );
};
