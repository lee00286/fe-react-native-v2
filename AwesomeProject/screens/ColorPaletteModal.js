import React, { useCallback, useState } from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { COLORS } from '../constants/colors';
import ColorScheme from '../components/ColorScheme';

const ColorPaletteModal = ({ navigation }) => {
  const [paletteName, setPaletteName] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);

  const handleSubmit = useCallback(() => {
    if (!paletteName) {
      Alert.alert('Please enter a palette name');
    } else if (selectedColors.length < 3) {
      Alert.alert('Please add at least 3 colors');
    } else {
      const newColorPalette = {
        paletteName,
        colors: selectedColors,
      };
      navigation.navigate('Home', { newColorPalette });
    }
  }, [paletteName, selectedColors, navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Name of your color palette</Text>
      <TextInput
        style={styles.input}
        onChangeText={setPaletteName}
        value={paletteName}
      />
      <FlatList
        data={COLORS}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => (
          <ColorScheme
            item={item}
            selectedColors={selectedColors}
            onSelectColors={(colors) => setSelectedColors(colors)}
          />
        )}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: 'teal',
    borderRadius: 5,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'grey',
  },
  text: {
    marginBottom: 10,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});

export default ColorPaletteModal;
