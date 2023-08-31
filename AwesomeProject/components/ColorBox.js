import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };

  return (
    <View style={[styles.box, boxColor]}>
      <Text style={styles.text}>{colorName}: {hexCode}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColorBox;
