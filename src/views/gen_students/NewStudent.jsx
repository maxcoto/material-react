import React from 'react'
import API from '../../library/API'
import GenButton from '../utils/form/GenButton'
import StudentsForm from './StudentsForm'
import { defaultStudent } from '../utils/constants'

export default class NewStudent extends React.Component {

  constructor(props) {
    super(props)

    this.state = { student: defaultStudent }

    this.onSuccess = this.onSuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)

    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)

    API.configure(props.token)
  }

  onSuccess(response){
    const { id } = response
    this.props.history.push('/students/' + id, { id });
  }
  
  onFailure(error){
    console.log(error);
  }
  
  onClick(){
    API.create('/students', this.state, this.onSuccess, this.onFailure)
  }

  onChange(name, value){
    this.setState({ student: {...this.state.student, [name]: value } });
  }

  render() {
    const { student } = this.state
    if(!student) return null
 
    console.log(student);
 
    return(
      <React.Fragment>
        <h2>New Student!</h2>
        <StudentsForm student={student} onChange={this.onChange}  />
        <GenButton label="Create" onClick={this.onClick} />
      </React.Fragment>
    )
  }
}

