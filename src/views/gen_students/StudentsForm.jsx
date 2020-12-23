import React from 'react'
import GenInput from '../utils/form/GenInput'
import GenSelect from '../utils/form/GenSelect'
import GenText from '../utils/form/GenText'
import { statuses, levels, leadSources, contactMethods } from '../utils/constants'

export default class StudentForm extends React.Component {
  render() {
    const { student, onChange } = this.props
    if(!student) return null
 
    return(
      <React.Fragment>
        <div className="container">
          <GenInput
            label="First Name"
            value={student.first_name}
            type="text"
            name="first_name"
            onChange={onChange}
          />
          
          <GenInput
            label="Last Name"
            value={student.last_name}
            type="text"
            name="last_name"
            onChange={onChange}
          />
          
          <GenInput
            label="Email"
            value={student.email}
            type="text"
            name="email"
            onChange={onChange}
          />
          
          <GenInput
            label="Phone Number"
            value={student.phone}
            type="text"
            name="phone"
            onChange={onChange}
          />
          
          <GenSelect
            label="Contact Method"
            value={ student.contact_method }
            values={ contactMethods }
            name="contact_method"
            onChange={ onChange }
          />
          
          <GenSelect
            label="Lead Source"
            value={ student.lead_source }
            values={ leadSources }
            name="lead_source"
            onChange={ onChange }
          />
          
          <GenText
            label="Objectives"
            value={student.objectives}
            type="text"
            name="objectives"
            onChange={onChange}
          />

          <GenText
            label="Notes"
            value={student.notes}
            type="text"
            name="notes"
            onChange={onChange}
          />
          
          <GenSelect
            label="Level"
            value={student.level}
            values={ levels }
            name="level"
            onChange={onChange}
          />
          
          <GenSelect
            label="Status"
            value={student.status}
            values={ statuses }
            name="status"
            onChange={onChange}
          />
        </div>
      </React.Fragment>
    )
  }
}

