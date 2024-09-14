import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from './action/auth';
import { useNavigation } from '@react-navigation/native';

const initialState = { name: '', password: '' };

const Login = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [formData, setFormData] = useState(initialState);
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSubmit = () => {
   
    if (formData.email === '') {
      setErrMsg('email is required!');
    } else if (formData.password === '') {
      setErrMsg('Password is required!');
    } else {
      setErrMsg('');
      setSuccessMsg(`Welcome ${formData.email}`);
     dispatch(signin(formData));
    //  navigation.navigate('Home');
  
    }
  };
 
//   if(user){
//     navigation.navigate('Home');
// }
  
// console.log(user)
   useEffect(() => {
    if(user){
      if(user.isAdmin){
        navigation.navigate('Admin');
      }
      
    else if(user.isActive){
      navigation.navigate('Home');
    }
    else{
      setErrMsg("user is not active")
    }
    }
 }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {errMsg ? <Text style={styles.error}>{errMsg}</Text> : null}
      {successMsg ? <Text style={styles.success}>{successMsg}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="email"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={formData.password}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
        secureTextEntry
      />
        <TouchableOpacity style={styles.button}
            
            onPress={() => navigation.navigate('Register')}
            >
                Have an account? Register
            </TouchableOpacity>
      <Button title="Submit" onPress={handleSubmit} />
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

export default Login;
