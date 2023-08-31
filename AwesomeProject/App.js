import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.titleText}>Here are some boxes of different colours</Text>
        <View style={[styles.box, styles.cyan]}>
          <Text style={styles.boxText}>Cyan: #2aa198</Text>
        </View>
        <View style={[styles.box, styles.blue]}>
          <Text style={styles.boxText}>Blue: #268bd2</Text>
        </View>
        <View style={[styles.box, styles.magenta]}>
          <Text style={styles.boxText}>Magenta: #d33682</Text>
        </View>
        <View style={[styles.box, styles.orange]}>
          <Text style={styles.boxText}>Orange: #cb4b16</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
  titleText: {
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  safeArea: {
    flex: 2,
  },
});

export default App;
