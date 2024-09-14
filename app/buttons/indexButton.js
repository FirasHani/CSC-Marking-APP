import React ,{useState}from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();

  const handlePress = (buttonNumber) => {
    console.log(`Button ${buttonNumber} pressed!`);
  };

  const createUser = () => {
    navigation.navigate('ButtonOne');
  };
  const createSubject = () => {
    navigation.navigate('ButtonTow');
  };
  const addSubjectNewMark = () => {
    navigation.navigate('ButtonThree');
  };
  const addSubjectToStudent = () => {
    navigation.navigate('ButtonFour');
  };
  return (
    <View style={styles.container}>
      <Button title="Create Student" onPress={createUser} />
      <Button title="Create Subject" onPress={createSubject} />
      <Button title="Add Subject To Student" onPress={addSubjectToStudent} />
      <Button title="Add Mark" onPress={addSubjectNewMark} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
