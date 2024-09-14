import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createSubject } from '../action/student';
import { useNavigation } from '@react-navigation/native';

const initialState = { name: '', password: '' };

const ButtonTow = () => {
  const [formData, setFormData] = useState(initialState);
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSubmit = () => {
   
    if (formData.subjectName === '') {
      setErrMsg('subjectName is required!');
    } else if (formData.subjectMin === '') {
      setErrMsg('subjectMin is required!');
    } else {
      setErrMsg('');
      setSuccessMsg(`Subject ${formData.subjectName} has added`);
        dispatch(createSubject(formData));
        navigation.navigate('Admin');
  
    }
  };
 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Subject</Text>
      {errMsg ? <Text style={styles.error}>{errMsg}</Text> : null}
      {successMsg ? <Text style={styles.success}>{successMsg}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="subjectName"
        value={formData.subjectName}
        onChangeText={(text) => setFormData({ ...formData, subjectName: text })}
      />
    <TextInput
  style={styles.input}
  placeholder="subjectMin"
  value={formData.subjectMin}
  keyboardType="numeric"
  onChangeText={(text) => {
    const numericText = text.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    setFormData({ ...formData, subjectMin: numericText });
  }}
/>
      <Button title="Create Subject" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  error: {
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
  success: {
    color: 'green',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
    alignItems: 'center',
  },
});

export default ButtonTow;
