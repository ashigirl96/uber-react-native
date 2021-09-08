import React, { useState, VFC } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import registerRootComponent from 'expo/build/launch/registerRootComponent'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
    backgroundColor: '#ff0000',
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

const App: VFC = () => {
  const [counter, setCounter] = useState(0)
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Text style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          Count {counter}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color="#ffffff"
          onPress={() => setCounter((c) => c + 1)}
          title="Press Me"
        />
      </View>
    </View>
  )
}

export default App

registerRootComponent(App)
