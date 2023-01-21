import { FC, useContext } from 'react';
import { View, StyleSheet, FlatList, ListRenderItem } from 'react-native';
import { Text, useTheme, Button } from 'react-native-paper';
import { DeckContext } from './DeckContainer';
import { NavigationProp } from '@react-navigation/native';
import { byDate } from '@vocably/sulna';
import { mainPadding } from './styles';
import { CardItem } from '@vocably/model';
import { CardListItem, keyExtractor, Separator } from './CardListItem';
import { EmptyCardsList } from './EmptyCardsList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    padding: mainPadding,
  },
  editPanel: {
    paddingLeft: mainPadding,
    paddingRight: mainPadding,
    paddingTop: mainPadding,
    paddingBottom: mainPadding * 2,
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
  },
});

const renderItem: ListRenderItem<CardItem> = ({ item }) => (
  <CardListItem card={item} />
);

type Dashboard = FC<{
  navigation: NavigationProp<any>;
}>;

export const Dashboard: Dashboard = ({ navigation }) => {
  const { deck } = useContext(DeckContext);
  const cards = deck.cards.sort(byDate).slice(0, 7);
  const theme = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        flex: 1,
      }}
    >
      <View style={[styles.container]}>
        {cards.length > 0 && (
          <View style={styles.contentContainer}>
            <View style={{ alignSelf: 'stretch' }}>
              <Button
                style={{
                  marginBottom: 24,
                }}
                labelStyle={{
                  fontSize: 18,
                }}
                mode={'contained'}
                onPress={() => navigation.navigate('Study')}
              >
                Practice
              </Button>
            </View>
            <FlatList
              style={{ width: '100%' }}
              ItemSeparatorComponent={Separator}
              data={cards}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
              scrollEnabled={false}
            />
          </View>
        )}
        {cards.length === 0 && (
          <EmptyCardsList>
            <Text>Cards list is empty</Text>
          </EmptyCardsList>
        )}
        <View
          style={[
            styles.editPanel,
            {
              backgroundColor: theme.colors.background,
            },
          ]}
        >
          <Text
            style={{ fontSize: 18 }}
            onPress={() => navigation.navigate('EditDeck')}
          >
            <Text
              style={{
                textDecorationLine: 'underline',
                color: theme.colors.primary,
              }}
            >
              Edit deck
            </Text>{' '}
            ({deck.cards.length})
          </Text>
        </View>
      </View>
    </View>
  );
};
