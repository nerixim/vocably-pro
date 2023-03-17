import React, { FC, useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { IconButton, useTheme } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
  },
});

type SearchInput = FC<{
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
}>;

export const SearchInput: SearchInput = ({
  value,
  placeholder,
  onChange,
  onSubmit,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          borderWidth: 2,
          borderColor: isFocused
            ? theme.colors.primary
            : theme.colors.outlineVariant,
          borderRadius: theme.roundness,
        },
      ]}
    >
      <TextInput
        style={{
          flex: 1,
          paddingLeft: 8,
          color: theme.colors.onBackground,
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        autoCapitalize={'none'}
        onChangeText={onChange}
        placeholder={placeholder}
        returnKeyType={'search'}
        onSubmitEditing={() => onSubmit(value)}
      />
      {value && (
        <IconButton
          icon={'close-circle'}
          iconColor={theme.colors.secondary}
          onPress={() => onChange('')}
        />
      )}
      <IconButton
        icon={'magnify'}
        mode="contained"
        onPress={() => onSubmit(value)}
        disabled={value === ''}
      />
    </View>
  );
};
