import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, View, Text, StyleSheet, FlatList } from 'react-native';

export default function App() {
  const [entry, setEntry] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const addEntry = () => {
    if (entry.trim().length === 0) return;
    setItems([...items, entry.trim()]);
    setEntry('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Örneğin: Sabah 2 haşlanmış yumurta"
          value={entry}
          onChangeText={setEntry}
        />
        <Button title="Ekle" onPress={addEntry} />
      </View>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    padding: 10,
    borderRadius: 4,
  },
  item: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
});
