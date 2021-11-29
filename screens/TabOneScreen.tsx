import * as React from 'react';
import { ScrollView, StyleSheet, TextInput } from 'react-native';
import { enableFreeze } from 'react-native-screens';

import { Text } from '../components/Themed';
import { RootTabScreenProps } from '../types';

enableFreeze();

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <ScrollView contentContainerStyle={styles.container}
      keyboardShouldPersistTaps='handled'
    >
      <Text style={styles.title}>Tab One</Text>
      <Text>Focus and unfocus the input (make sure to enable the keyboard in the simulator), then switch to Tab Two.</Text>
      <TextInput style={styles.input} value='text input' />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 5,
    margin: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
