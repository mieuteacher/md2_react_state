import React, {useState} from 'react'
import { randomId } from '@mieuteacher/meomeojs'
import Table from './Table'
export default function ComB() {
    const [students, setStudents] = useState([
        {
            id: randomId(),
            name: "Phước",
            age: 30
        },
        {
            id: randomId(),
            name: "Phương",
            age: 30
        }
    ]);
    
    function deleteStudent(studentId) {
        let tempStudents = [...students];
        tempStudents = tempStudents.filter(student => student.id != studentId);
        setStudents(tempStudents)
    }
  return (
    <div>
        <Table students={students} deleteStudent={deleteStudent}></Table>
    </div>
  )
}

// function useStateFake(initValue) {
//     return [initValue, (newValue) => {
//             initValue = newValue
//     }]
// }