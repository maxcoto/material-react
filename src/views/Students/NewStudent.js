import React from 'react'
import API from '../../library/API'

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import StudentForm from './StudentForm.js'

import { withStyles } from "@material-ui/core/styles";
import { defaultStudent } from 'variables/general'
import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};


class NewStudent extends React.Component {

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
    API.create('students', this.state, this.onSuccess, this.onFailure)
  }

  onChange(event){
    const { name, value } = event.target
    this.setState({ student: {...this.state.student, [name]: value } });
  }

  render() {
    const { classes } = this.props
    const { student } = this.state
    if(!student) return null
 
    return(
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>New Student!</h4>
            </CardHeader>

            <StudentForm student={student} onChange={this.onChange} />

            <CardFooter>
              <Button color="primary" onClick={this.onClick} >
                Create
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>{student.id}</h6>
              <h4 className={classes.cardTitle}>{student.first_name + " " + student.last_name}</h4>
              <h4 className={classes.cardTitle}>{student.email}</h4>
              <h4 className={classes.cardTitle}>{student.phone}</h4>
              <h4 className={classes.cardTitle}>{student.contact_method}</h4>
              <h4 className={classes.cardTitle}>{student.lead_source}</h4>
              <h4 className={classes.cardTitle}>{student.level.name}</h4>
              <h4 className={classes.cardTitle}>{student.status}</h4>
              <p className={classes.description}>Objectives: {student.objectives}</p>
              <p className={classes.description}>Notes: {student.notes}</p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    )
  }
}

export default withStyles(styles, { withTheme: true })(NewStudent);

