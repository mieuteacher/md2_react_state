import React from 'react'
import {Modal, message} from 'antd'
export default function Table({students, deleteStudent}) {
  return (
    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Tools</th>
    </tr>
  </thead>
  <tbody>
    {
      students.map((student, index) => (
        <tr>
          <th scope="row">{index + 1}</th>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.age}</td>
          <td>
            <button onClick={() => {
              Modal.confirm({
                content: "Bạn có muốn xóa ?",
                onOk: () => {
                  deleteStudent(student.id)
                  message.success("Xóa thành công!")
                }
              })
            }} type="button" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      ))
    }
  </tbody>
</table>

  )
}
