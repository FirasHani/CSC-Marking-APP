import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { showAllStudent, showSubject, addSubjectToStudent } from '../action/student';

const ButtonFour = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.student);
  const subjects = useSelector((state) => state.subject);
  const [editStudentId, setEditStudentId] = useState('');
  const [selectedSubjectId, setSelectedSubjectId] = useState('');

  useEffect(() => {
    dispatch(showAllStudent());
    dispatch(showSubject());
  }, []);

  const handleAddSubjectToStudent = (studentId) => {
    setEditStudentId(studentId);
    console.log("test 1"+studentId)
  };

  const handleDispatch = (subjectId) => {
    console.log("test 2"+subjectId)
      dispatch(addSubjectToStudent(subjectId, editStudentId));
   
  
  };

  const logout = () => {
    // Implement your logout logic here
  };

  return (
    <View style={styles.container}>
      {/* Table 1: Students */}
      <View style={styles.tableContainer}>
        <Text style={styles.tableTitle}>Students</Text>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>Student Name</Text>
          <Text style={styles.headerCell}>Email</Text>
          <Text style={styles.headerCell}>Actions</Text>
        </View>
        <ScrollView>
          {students.map((student, index) => (
            <View key={index} style={styles.dataRow}>
              <Text style={styles.dataCell}>{student?.name}</Text>
              <Text style={styles.dataCell}>{student?.email}</Text>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => handleAddSubjectToStudent(student?.email)}>
                <Text style={styles.buttonText}>Add Subject</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Table 2: Subjects */}
      <View style={styles.tableContainer}>
        <Text style={styles.tableTitle}>Subjects</Text>
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>Subject Name</Text>
          <Text style={styles.headerCell}>Subject ID</Text>
          <Text style={styles.headerCell}>Actions</Text>
        </View>
        <ScrollView>
          {subjects[0]?.map((subject, index) => (
            <View key={index} style={styles.dataRow}>
              <Text style={styles.dataCell}>{subject?.subjectName}</Text>
              <Text style={styles.dataCell}>{subject?._id}</Text>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => handleDispatch(subject?._id)}>
                <Text style={styles.buttonText}>Add to Student</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>

      {/* Logout Button */}
      <Button title="Log Out" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  tableContainer: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
  },
  tableTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
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
    alignItems: 'center',
  },
  dataCell: {
    flex: 1,
    textAlign: 'center',
  },
  actionButton: {
    backgroundColor: '#007bff',
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default ButtonFour;
