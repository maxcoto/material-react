import React from 'react'
import API from '../../library/API'

export default class StudentsList extends React.Component {

  constructor(props) {
    super(props)
    API.configure(props.token)
  }
  
  edit(student){
    this.props.history.push('/students/' + student.id + '/edit', { student });
  }
  
  show(student){
    this.props.history.push('/students/' + student.id, { student });
  }

  render() {
    const { students } = this.props

    return(
      <React.Fragment>
        <table className="container">
          <thead>
            <tr>
              <th><h1>Name</h1></th>
              <th><h1>Email</h1></th>
              <th><h1>Phone</h1></th>
              <th><h1>Level</h1></th>
              <th><h1>Status</h1></th>
              <th><h1></h1></th>
            </tr>
          </thead>
          <tbody>
            { 
              students.map((student, index) => {
                return(
                  <tr style={{ cursor: "pointer" }} key={ student.id }>
                    <td onClick={ this.show.bind(this, student) }>
                      {student.first_name} {student.last_name}
                    </td>
                    <td><a mailto={student.email}>{student.email}</a></td>
                    <td>{ student.phone }</td>
                    <td>{ student.level }</td>
                    <td>{ student.status }</td>
                    <td onClick={ this.edit.bind(this, student) }>
                      Edit
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </React.Fragment>
    )
  }
}



