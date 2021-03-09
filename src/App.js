import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


import AddStudent from './components/AddStudent';
import StudentDetails from './components/StudentDetails'

function App() {

  
    const [students, setStudents] = useState([
        {
            id: '16',
            name: 'Mayur',
            email: 'abc@gmail.com',
            number: 1234564,
            details: 'good guy'
        },
    
        {
            id: '51',
            name: 'Sourabh',
            email: 'abc@gmail.com',
            number: 1234564,
            details: 'good guy'
        },
    
        {
            id: '13',
            name: 'Pashya',
            email: 'abc@gmail.com',
            number: 1234564,
            details: 'good guy'
        },
    ])

    const [editName, SetEditName] = useState([ ]);

    // edit data
    const editStudent = ( student ) => {
      console.log(student);
      const newStudentIndex = students.findIndex(stu => stu.id === student.id);
   
      const newStudentsList = students;
      newStudentsList[newStudentIndex] = student;
      setStudents(newStudentsList)
    }


    // delete student
    const deleteStudent = (id) => {
      setStudents(students.filter(student => student.id !== id))
    }

    // add student
    const addStudent = (student) => {
      const newStudent = {id:students.length + 1, ...student }
      setStudents([ ...students, newStudent ])
    }

    // edit student
    const editIdHandler = (index) => {
      const data = ([students[index]]);
      SetEditName(data);
      console.log(data, "string"); 
    }
    
  
    return (
        <div className="container">
          <h1>Student Details</h1>  
            <div className="card">
              <div className="card-body">
                <AddStudent onAddStudent={addStudent}/>
                {students.length > 0 ? 
                  <StudentDetails 
                    editName={editName}
                    editStudent={(e) => editStudent(e)}
                    oneditclick={editIdHandler}
                    students={students} 
                    onDelete={deleteStudent}/> : 
                    "No student record found"}
              </div>
            </div>  
        </div>
    );
    }

export default App;
