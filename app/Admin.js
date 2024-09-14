import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Button, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import * as actionType from './actionTypes';
import { useNavigation } from '@react-navigation/native';
import { showAllStudent, editStudent as editStudentAction, deleteStudent as deleteStudentAction } from './action/student';
import IndexButton from './buttons/indexButton'
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


  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    setUser(null);
    navigation.navigate('Login');
  };

  const startEditing = (id) => {
    setEditStudentId(id);
  };

  const cancelEditing = () => {
    setEditStudentId(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteStudentAction(id));
  };
  const StudentChat=()=>{
    navigation.navigate('StudentChat');
  }

  return (
    <View style={styles.container}>
        <IndexButton/>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>Student Name</Text>
        <Text style={styles.headerCell}>Email</Text>
        <Text style={styles.headerCell}>Edit</Text>
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
                <Button title="Edit" onPress={() => startEditing(item?._id)} />
                <Button title="Delete" onPress={() => handleDelete(item?._id)} />
              </>
            )}
          </View>
        ))}
      </ScrollView>
      <Button title='StudentChat' onPress={StudentChat}/>
      <Button title="LogOut" onPress={logout} />
    </View>
  );
};

const Input = ({ id, cancelEditing }) => {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editStudentAction(formData, id));
    cancelEditing();
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Name"
        value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
      />
      <TextInput
        placeholder="Email"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
      />
         <TextInput
        placeholder="Is Active"
        value={formData.isActive}
        onChangeText={(text) => setFormData({ ...formData, isActive: text })}
      />
      <Button title="Save" onPress={handleEdit} />
      <Button title="Cancel" onPress={cancelEditing} />
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