import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import * as actionType from './actionTypes';
import { useNavigation } from '@react-navigation/native';
import StudentChat from './chat/StudentChat'
const StudentTable = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const navigation = useNavigation();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    setUser(null);
    navigation.navigate('Login');
  };

  return (
  <>
  
     <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>User Details</Text>
      <Text>ID: {user._id}</Text>
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Is Admin: {user.isAdmin ? 'Yes' : 'No'}</Text>
      <Text>Is Active: {user.isActive ? 'Yes' : 'No'}</Text>
      
      <Text style={styles.header}>Subjects</Text>
      <FlatList
        data={user.subject}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.subjectItem}>
            <Text>Subject Name: {item.subjectName}</Text>
            <Text>Subject past Mark: {item.subjectPassMark}</Text>
            <Text>Subject New Mark: {item.subjectNewMark}</Text>
          </View>
        )}
        
      >

      </FlatList>
      <StudentChat/>
      
      {/* <Button title="Logout" onPress={logout} /> */}
    </ScrollView>
   
  </>
 
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subjectItem: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
});

export default StudentTable;
