import React, { useEffect, useCallback, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ColorPreview from '../components/ColorPreview';

const Home = ({ navigation }) => {
  const [colorPalettes, setColorPalettes] = useState([]);

  const fetchColorPalettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );
    if (result.ok) {
      const palettes = await result.json();
      setColorPalettes(palettes);
    }
  }, []);

  useEffect(() => {
    fetchColorPalettes();
  }, [fetchColorPalettes]);

  return (
    <FlatList
      style={styles.container}
      data={colorPalettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <ColorPreview
          onHandlePress={() => {
            navigation.navigate('ColorPalette', item);
          }}
          colorPalette={item}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
});

export default Home;
