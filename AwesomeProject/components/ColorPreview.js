import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ColorPreview = ({ onHandlePress, colorPalette }) => {
  const { paletteName, colors } = colorPalette;

  return (
    <TouchableOpacity onPress={onHandlePress} style={styles.container}>
      <Text style={styles.text}>{paletteName}</Text>
      <FlatList
        horizontal
        style={styles.colorList}
        data={colors?.length > 5 ? colors.slice(0, 5) : colors ?? []}
        keyExtractor={(item) => item.hexCode}
        renderItem={({ item }) => (
          <View style={[{ backgroundColor: item.hexCode }, styles.box]} />
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    marginRight: 10,
    width: 50,
    height: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  colorList: {
    flexDirection: 'row',
  },
  text: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default ColorPreview;
