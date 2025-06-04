import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, TextInput, Button, StyleSheet, FlatList, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const [entry, setEntry] = useState('');
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const load = async () => {
      const json = await AsyncStorage.getItem('entries');
      if (json) setItems(JSON.parse(json));
    };
    load();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('entries', JSON.stringify(items));
  }, [items]);

  const addEntry = () => {
    if (!entry.trim()) return;
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
