import React from "react";
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
import TeacherForm from './TeacherForm.js'
import TeacherFields from './TeacherFields.js'

import { withStyles } from "@material-ui/core/styles";
import avatar from "assets/img/faces/marc.jpg";



const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
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

class TeacherEdit extends React.Component {

  constructor(props) {
    super(props)

    this.onSuccess = this.onSuccess.bind(this)
    this.onFailure = this.onFailure.bind(this)

    this.onClick = this.onClick.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = this.props.location.state || { teacher: null }

    API.configure(props.token)
  
    if(!this.state.teacher){
      const id = this.props.location.pathname.split("/")[2]
      API.get('teachers', id,
        function(response){
          this.setState({ teacher: response })
        }.bind(this),
        function(error){
          this.props.notifyError(error)
        }.bind(this)
      )
    }
  }

  onSuccess(response){
    const { id } = response
    this.props.history.push('/teachers/' + id, this.state);
    this.props.notifySuccess("Teacher updated successfully")
  }
  
  onFailure(error){
    console.log(error);
    this.props.notifyError(error)
  }
  
  onClick(){
    API.update('teachers', this.state.teacher.id, this.state, this.onSuccess, this.onFailure)
  }
  
  onChange(event){
    const { name, value } = event.target
    this.setState({ teacher: {...this.state.teacher, [name]: value } });
  }
  
  show(teacher){
    this.props.history.push('/teachers/' + teacher.id, { teacher });
  }

  render() {
    const { classes } = this.props
    const { teacher } = this.state
    if(!teacher) return null
 
    return(
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Edit Teacher {teacher.id}</h4>
              <p className={classes.cardCategoryWhite}>what should go here ?</p>
            </CardHeader>

            <TeacherForm teacher={teacher} onChange={this.onChange} />

            <CardFooter>
              <Button color="primary" onClick={this.onClick}>Update</Button>
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
              <TeacherFields teacher={teacher} />
              <Button color="primary" onClick={this.show.bind(this, teacher)} >
                Show
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    )
  }
}

export default withStyles(styles, { withTheme: true })(TeacherEdit);


