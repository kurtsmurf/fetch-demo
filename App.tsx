import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [response, setResponse] = useState('')

  const fetchAnAnswer = () => {
    fetch("https://yesno.wtf/api")
      .then(response => response.answer)
      .then(setResponse)
  }

  useEffect(fetchAnAnswer, []) 

  return (
    <View style={styles.container}>
      <Text>{response}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
