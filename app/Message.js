import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import io from 'socket.io-client';

const App = () => {
  const [arg1, setArg1] = useState('');
  const [arg2, setArg2] = useState('');
  const [sum, setSum] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io('http://localhost:5000'); // Change to your server address if different

    newSocket.on('connect', () => {
      console.log('connected to socket server');
    });

    newSocket.on('disconnect', () => {
      console.log('disconnected from socket server');
    });

    setSocket(newSocket);

    // Cleanup on component unmount
    return () => {
      newSocket.disconnect();
    };
  }, []);

  const test = () => {
    if (socket) {
      socket.emit('addition', arg1, arg2, (response) => {
        setSum(response.sum);
      });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter first number"
        value={arg1}
        onChangeText={setArg1}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter second number"
        value={arg2}
        onChangeText={setArg2}
        keyboardType="numeric"
      />
      <Button title="Add" onPress={test} />
      {sum !== null && <Text style={styles.result}>Sum: {sum}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;