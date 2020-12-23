import React from 'react'
import API from '../../library/API'
import GenButton from '../utils/form/GenButton'
import StudentsForm from './StudentsForm'

export default class EditStudent extends React.Component {

  constructor(props) {
    super(props)

    this.state = this.props.location.state || { student: props.student }

    this.onSuccess = this.onSuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)

    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)

    API.configure(props.token)
  }

  onSuccess(response){
    const { id } = response
    this.props.history.push('/students/' + id, this.state);
  }
  
  onFailure(error){
    console.log(error);
  }
  
  onClick(){
    API.update('/students/', this.state.student.id, this.state, this.onSuccess, this.onFailure)
  }

  onChange(name, value){
    this.setState({ student: {...this.state.student, [name]: value } });
  }

  render() {
    const { student } = this.state
    if(!student) return null
 
    return(
      <React.Fragment>
        <h2>Student #{student.id}</h2>
        <StudentsForm student={student} onChange={this.onChange}  />
        <GenButton label="Update" onClick={this.onClick} />
      </React.Fragment>
    )
  }
}

