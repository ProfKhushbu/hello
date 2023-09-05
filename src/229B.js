import React from 'react';

const Data = ({ students }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Roll Number</th>
          <th>Test 1 Marks</th>
          <th>Test 2 Marks</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr>
            <td>{student.name}</td>
            <td>{student.rollNumber}</td>
            <td>{student.t1marks}</td>
            <td>{student.t2marks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Data;