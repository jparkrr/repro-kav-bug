import * as React from 'react';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';

import { Text } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <Text>This content should be vertically centered, but often isn't if freeze is enabled and the user focused an input on the previous tab.</Text>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
