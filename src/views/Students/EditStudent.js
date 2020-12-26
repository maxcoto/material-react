import React from "react";
import API from '../../library/API'

// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import avatar from "assets/img/faces/marc.jpg";

import StudentsForm from './StudentsForm.js'

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

class EditStudent extends React.Component {

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

  // onChange(name, value){
  //   this.setState({ student: {...this.state.student, [name]: value } });
  // }
  
  onChange(event){
    const { name, value } = event.target
    this.setState({ student: {...this.state.student, [name]: value } });
  }

  render() {
    const { classes } = this.props
    const { student } = this.state
    if(!student) return null
 
    return(
      <React.Fragment>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Edit Student {student.id}</h4>
                <p className={classes.cardCategoryWhite}>what should go here ?</p>
              </CardHeader>

              <StudentsForm student={student} onChange={this.onChange} />

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
                <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                <h4 className={classes.cardTitle}>Alec Thompson</h4>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves Kanye
                  I love Rick Owens’ bed design but the back is...
                </p>
                <Button color="primary" round>
                  Follow
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </React.Fragment>
    )
  }
}

export default withStyles(styles, { withTheme: true })(EditStudent);


