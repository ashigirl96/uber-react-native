import React, { VFC } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

const App: VFC = () => {
  return (
      <ScrollView style={styles.container}>
        <Text>Some text</Text>
        <View>
          <Text>Some more text</Text>
          <Image source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png"}} style={{ width: 200, height: 200 }} />
        </View>
        <TextInput
          style={{
            height: 80,
            borderColor: "green",
            borderWidth: 1,
          }}
          />
      </ScrollView>
  );
}


export default App