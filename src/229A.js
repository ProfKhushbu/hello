import React from 'react';
import StudentTable from './229B';

function App() {
  const students = [
    {
      name: 'Student 1',
      rollNumber: '001',
      t1marks: 19,
      t2marks: 25,
    },
    {
      name: 'Student 2',
      rollNumber: '002',
      t1marks: 20,
      t2marks: 24,
    },
  ];

  return (
    <div className="App">
      <h1>Student Information</h1>
      <StudentTable students={students} />
    </div>
  ) }
export default App;