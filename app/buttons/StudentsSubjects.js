import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { addSubjectNewMark } from '../action/student';

const initialState = { subjectNewMark: '' };

const StudentsSubjects = ({ route }) => {
  const dispatch = useDispatch();
  const { student } = route.params;
  const [marks, setMarks] = useState(initialState);

  const handleUpdateMark = (subjectId) => {
    if (marks.subjectNewMark !== '') {
      dispatch(addSubjectNewMark(subjectId, marks));
      // Reset marks after updating
      // setMarks(initialState);
    } else {
      console.warn('Please enter a valid mark');
      // Handle validation or feedback as needed
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Subjects</Text>
      <Text>Name: {student.name}</Text>
      <Text>Email: {student.email}</Text>
      <View style={styles.subjectsContainer}>
        {/* Conditional rendering to avoid mapping over undefined */}
        {student.subject && student.subject.map((subject, index) => (
          <View key={index} style={styles.subjectRow}>
            <Text style={styles.dataCell}>{subject.subjectName}</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter new mark"
              value={marks.subjectNewMark}
              onChangeText={(text) =>
                setMarks({ ...marks, subjectNewMark: text })
              }
            />
            <Text>
                {
                    subject.subjectNewMark

                }
            </Text>
            <Button
              title="Update Mark"
              onPress={() => handleUpdateMark(subject.subjectID)}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subjectsContainer: {
    marginTop: 20,
    width: '100%',
  },
  subjectRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dataCell: {
    flex: 1,
    fontSize: 16,
    padding: 5,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
});

export default StudentsSubjects;
