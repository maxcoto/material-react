import React from 'react'
import API from '../../library/API'
import Button from "components/CustomButtons/Button.js";
import { defaultStudent } from 'variables/general.js'

export default class ShowStudent extends React.Component {  
  constructor(props) {
    super(props)

    this.state = this.props.location.state || { student: props.student }
  }

  onClick(){
    const { id } = this.state.student
    this.props.history.push('/students/' + id + '/edit', this.state);
  }
  
  render() {
    const { student } = this.state
    return(
      <React.Fragment>
        <h2>Student #{student.id}</h2>
        <div className="container">
          <div>First Name: {student.first_name}</div>
          <div>Last Name: {student.last_name}</div>
          <div>Email: {student.email}</div>
          <div>Phone: {student.phone}</div>
          <div>Contact Method: {student.contact_method}</div>
          <div>Lead Source: {student.lead_source}</div>
          <div>Objectives: {student.objectives}</div>
          <div>Notes: {student.notes}</div>
          <div>Level: {student.level.name}</div>
          <div>Status: {student.status}</div>
        </div>
        
        <Button
          justIcon={window.innerWidth > 959}
          simple={!(window.innerWidth > 959)}
          aria-label="IDK"
          onClick={this.onClick.bind(this)}
        >
          Edit
        </Button>
      </React.Fragment>
    )
  }
}

