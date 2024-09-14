import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Button, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as actionType from '../actionTypes';
import { useNavigation } from '@react-navigation/native';
import { showAllStudent } from '../action/student';
const initialState = { name: '', email: '' };

const YourComponent = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const data = useSelector((state) => state.student);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [editStudentId, setEditStudentId] = useState(null);
  useEffect(() => {
    dispatch(showAllStudent());
    
 }, []);
 console.log(user)

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    setUser(null);
    navigation.navigate('Login');
  };
  const test=user?.email
  const EnterChat=(item,user)=>{
    navigation.navigate('ChatRoom', { item,test });
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>Student Name</Text>
        <Text style={styles.headerCell}>Email</Text>
        <Text style={styles.headerCell}>Enter Chat Room</Text>
      </View>
      <ScrollView>
        {data?.map((item, index) => (
          <View key={index} style={styles.dataRow}>
            {editStudentId === item?._id ? (
              <Input id={item?._id} cancelEditing={cancelEditing} />
            ) : (
              <>
                <Text style={styles.dataCell}>{item?.name}</Text>
                <Text style={styles.dataCell}>{item?.email}</Text>
                <Text style={styles.dataCell}>{item?.subject?.subjectName}</Text>
                <Button
                  title="Enter Chat"
                  onPress={() => EnterChat(item?.email)}
                />
                
              </>
            )}
          </View>
        ))}
      </ScrollView>
      <Button title="LogOut" onPress={logout} />
    </View>
  );
};

  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    headerRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#000',
      paddingBottom: 8,
      marginBottom: 8,
    },
    headerCell: {
      flex: 1,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    dataRow: {
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      paddingVertical: 8,
    },
    dataCell: {
      flex: 1,
      textAlign: 'center',
    },
  });
  
  export default YourComponent;