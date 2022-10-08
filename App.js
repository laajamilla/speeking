import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import * as Speech from 'expo-speech';

export default function App() {

  const [ userText, setUserText ] = useState('')

  const textToVoice = () => {
    console.log('painettu')
    const thingToSay = userText;
    Speech.speak(thingToSay);
    setUserText('');
    console.log(Speech.maxSpeechInputLength);
  }

  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        onChangeText={text => setUserText(text)}
        value={userText}
        placeholder='write here'
      ></TextInput>
      <Button
        title='press to hear text'
        onPress={textToVoice}
      ></Button>
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
  input: {
    heigh: 20,
    width: 155,
    borderWidth: 1,
    borderColor: 'yellow',
    padding: 2,
    backgroundColor: 'yellow',
    color: 'blue',
    margin: 12
  }
});
