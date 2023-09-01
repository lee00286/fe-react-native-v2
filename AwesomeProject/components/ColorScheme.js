import React, { useCallback } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

const ColorScheme = ({ item, selectedColors, onSelectColors }) => {
  const handleValueChange = useCallback(
    (value, color) => {
      if (value === true) {
        // Select color
        onSelectColors((colors) => [...colors, color]);
      } else {
        // Deselect color
        onSelectColors((colors) =>
          colors.filter(
            (selectedColor) => color.colorName !== selectedColor.colorName,
          ),
        );
      }
    },
    [onSelectColors],
  );

  return (
    <View style={styles.container}>
      <Text>{item.colorName}</Text>
      <Switch
        value={
          !!selectedColors.find((color) => color.colorName === item.colorName)
        }
        onValueChange={(selected) => {
          handleValueChange(selected, item);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
});

export default ColorScheme;
