import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPalette = ({ route }) => {
  const { colors } = route.params;
  return (
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={(item) => item.hexCode}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  titleText: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
});

export default ColorPalette;
