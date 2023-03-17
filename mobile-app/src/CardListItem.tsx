import React, { FC } from 'react';
import { View } from 'react-native';
import { CardItem } from '@vocably/model';
import { SideB } from './SideB';
import { Divider, Text } from 'react-native-paper';
import { SimpleCard } from './SimpleCard';

type CardListItem = FC<{
  card: SimpleCard;
}>;

export const CardListItem: CardListItem = ({ card }) => {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'baseline',
        }}
      >
        <Text style={{ fontSize: 24 }}>{card.source}</Text>
        {card.partOfSpeech && (
          <Text style={{ marginLeft: 8 }}>{card.partOfSpeech}</Text>
        )}
      </View>
      <SideB card={card} />
    </View>
  );
};

export const Separator: FC = () => (
  <Divider style={{ marginTop: 16, marginBottom: 16 }} />
);

export const keyExtractor: (item: CardItem) => string = (item) => item.id;
