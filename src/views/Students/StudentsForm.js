import React from 'react'

import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomSelect from "components/CustomSelect/CustomSelect.js";

import Button from "components/CustomButtons/Button.js";
import CardBody from "components/Card/CardBody.js";

import { statuses, levels, leadSources, contactMethods } from 'variables/general'


export default class StudentForm extends React.Component {
  render() {
    const { student, onChange } = this.props
    if(!student) return null
 
   console.log("chloe:", student);
 
    return(
      <CardBody>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="First Name"
              id="first_name"
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                value: student.first_name,
                name: "first_name"
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Last Name"
              id="last_name"
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: "last_name",
                value: student.last_name
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Email"
              id="email"
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                name: "email",
                value: student.email
              }}
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomInput
              labelText="Phone"
              id="phone"
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                value: student.phone,
                name: "phone"
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomSelect
              labelText="Contact Method"
              id="contact_method"
              formControlProps={{ fullWidth: true }}
              values={ contactMethods }
              onChange={onChange}
              inputProps={{
                name: "contact_method",
                value: student.contact_method
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomSelect
              labelText="Lead Source"
              id="lead_source"
              formControlProps={{ fullWidth: true }}
              values={ leadSources }
              onChange={onChange}
              inputProps={{
                name: "lead_source",
                value: student.lead_source
              }}
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <CustomSelect
              labelText="Level"
              id="level"
              formControlProps={{ fullWidth: true }}
              values={ levels }
              onChange={onChange}
              inputProps={{
                name: "level",
                value: student.level
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <CustomSelect
              labelText="Status"
              id="status"
              formControlProps={{ fullWidth: true }}
              values={ statuses }
              onChange={onChange}
              inputProps={{
                name: "status",
                value: student.status
              }}
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="Objectives"
              id="objectives"
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                multiline: true,
                rows: 5,
                name: "objectives",
                value: student.objectives || ""
              }}
            />
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <CustomInput
              labelText="Notes"
              id="notes"
              formControlProps={{ fullWidth: true }}
              inputProps={{
                onChange,
                multiline: true,
                rows: 5,
                name: "notes",
                value: student.notes || ""
              }}
            />
          </GridItem>
        </GridContainer>
      </CardBody>
    )
  }
}


