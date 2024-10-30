import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Contador: {count}</Text>
      <StatusBar style="auto" />

      <TouchableOpacity style ={styles.button} onPress={() => setCount(count + 1)}>
        <Text style= {style.buttonText}>Incrementar</Text>
      </TouchableOpacity>
      <TouchableOpacity style ={styles.button} onPress={() => setCount(count - 1)}>
        <Text style= {style.buttonText}>Decrementar</Text>
      </TouchableOpacity>
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
  button:{
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText:{
    color: 'white',
    textAlign: 'center',
  }
});
