import React, { useState ,useEffect} from 'react';
import { View, Text, TextInput, Button, StyleSheet,TouchableOpacity } from 'react-native';
import { useDispatch ,useSelector} from 'react-redux';
import { signup } from './action/auth';
import { useNavigation } from '@react-navigation/native';
import * as actionType from './actionTypes';
const initialState = { name: '', email: '', password: '', REpassword: '' };


const RegisterUser = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))); // Assuming you store the user in state.auth.user
  const [formData, setFormData] = useState(initialState);
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
    if (formData.name === '') {
      setErrMsg('Username is required!');
    } else if (formData.email === '') {
      setErrMsg('Please provide your Email!');
    } else if (formData.password.length < 8) {
      setErrMsg('Password length is less than 8');
    } else if (formData.password !== formData.REpassword) {
      setErrMsg('Passwords do not match');
    } else if (!passwordRegex.test(formData.password)) {
      setErrMsg('Password must contain at least one uppercase letter, one lowercase letter, one number, and be at least 8 characters long');
    } else {
      setSuccessMsg(`Welcome ${formData.name}`);
      dispatch(signup(formData));
    }
  };
  useEffect(() => {

    if(user){
      navigation.navigate('Home');
    }

 }, [user]);
  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    setUser(null);
  };
  const Message = () => {
    navigation.navigate('Message');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      {errMsg ? <Text style={styles.error}>{errMsg}</Text> : null}
      {successMsg ? <Text style={styles.success}>{successMsg}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
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
      <TextInput
        style={styles.input}
        placeholder="RE-Password"
        value={formData.REpassword}
        onChangeText={(text) => setFormData({ ...formData, REpassword: text })}
        secureTextEntry
      />
      <Button title="Submit" onPress={handleSubmit}/>
    <Button
    title="LogOut" onPress={logout}
    >
    </Button>
    <Button
    title="Message" onPress={Message}
    >
    </Button>
      <TouchableOpacity style={styles.button}
            
            onPress={() => navigation.navigate('Login')}
            >
                Have an account? Login
            </TouchableOpacity>
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
});

export default RegisterUser;
