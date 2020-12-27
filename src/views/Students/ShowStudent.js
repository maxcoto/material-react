import React from 'react'
import API from '../../library/API'

import Button from "components/CustomButtons/Button.js";
import { withStyles } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";

import avatar from "assets/img/faces/marc.jpg";

const styles = {};

class ShowStudent extends React.Component {  
  constructor(props) {
    super(props)

    this.state = this.props.location.state || { student: null }

    API.configure(props.token)
  
    if(!this.state.student){
      const id = this.props.location.pathname.split("/")[2]
      API.get('students', id,
        function(response){
          this.setState({ student: response })
        }.bind(this),
        function(error){
          this.props.notifyError(error)
        }.bind(this)
      )
    }
  }
  
  componentDidMount(newProps){
    console.log("this:", this.props.computedMatch);
  }

  onClick(){
    const { id } = this.state.student
    this.props.history.push('/students/' + id + '/edit', this.state);
  }

  render() {
    const { classes } = this.props
    const { student } = this.state
    if(!student) return null
    
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
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
              <h4 className={classes.cardTitle}>{student.level}</h4>
              <h4 className={classes.cardTitle}>{student.status}</h4>
              <p className={classes.description}>Objectives: {student.objectives}</p>
              <p className={classes.description}>Notes: {student.notes}</p>
              <Button color="primary" onClick={this.onClick.bind(this)} >
                Edit
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    )
  }
}

export default withStyles(styles, { withTheme: true })(ShowStudent);
