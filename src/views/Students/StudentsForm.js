import React from 'react'

import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import { statuses, levels, leadSources, contactMethods } from 'variables/general'

export default class StudentForm extends React.Component {
  render() {
    const { student, onChange } = this.props
    if(!student) return null
 
    return(
      <React.Fragment>
        <div className="container">
          <CustomInput
            labelText="First Name"
            formControlProps={{ fullWidth: true }}
            inputProps={{ onChange }}
          />
        </div>
      </React.Fragment>
    )
  }
}

// 
// <GenInput
//   label="Last Name"
//   value={student.last_name}
//   type="text"
//   name="last_name"
//   onChange={onChange}
// />
// 
// <GenInput
//   label="Email"
//   value={student.email}
//   type="text"
//   name="email"
//   onChange={onChange}
// />
// 
// <GenInput
//   label="Phone Number"
//   value={student.phone}
//   type="text"
//   name="phone"
//   onChange={onChange}
// />
// 
// <GenSelect
//   label="Contact Method"
//   value={ student.contact_method }
//   values={ contactMethods }
//   name="contact_method"
//   onChange={ onChange }
// />
// 
// <GenSelect
//   label="Lead Source"
//   value={ student.lead_source }
//   values={ leadSources }
//   name="lead_source"
//   onChange={ onChange }
// />
// 
// <GenText
//   label="Objectives"
//   value={student.objectives}
//   type="text"
//   name="objectives"
//   onChange={onChange}
// />
// 
// <GenText
//   label="Notes"
//   value={student.notes}
//   type="text"
//   name="notes"
//   onChange={onChange}
// />
// 
// <GenSelect
//   label="Level"
//   value={student.level}
//   values={ levels }
//   name="level"
//   onChange={onChange}
// />
// 
// <GenSelect
//   label="Status"
//   value={student.status}
//   values={ statuses }
//   name="status"
//   onChange={onChange}
// />

