import React from "react";
import API from '../../library/API'
// @material-ui/core components
import { withStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import AddIcon from "@material-ui/icons/Add";
import ShowIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from "components/CustomButtons/Button.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};


class StudentList extends React.Component {

  constructor(props) {
    super(props)
    this.state = { students: [], all: [] }
    
    API.configure(props.token)
    API.all(
      'students',
      function(data){
        this.setState({ students: data, all: data })
        this.props.setMessage({ open: true, text: "Students loaded !!", type: "success" })
      }.bind(this),
      function(error){
        console.log(error)
        this.props.setMessage({ open: true, text: "Students not loaded :(", type: "error" })
      }.bind(this)
    )
  }
  
  search(event){
    const lookup = event.target.value.trim().toLowerCase();
    var list = this.state.all
    if(lookup !== ''){
      list = list.filter(function(item){
        return (
          item.first_name.toLowerCase().includes(lookup) || 
          item.last_name.toLowerCase().includes(lookup) ||
          item.email.toLowerCase().includes(lookup)
        )
      }) || []
    }
    
    this.setState({ ...this.state, students: list })
  }
  
  new(){
    this.props.history.push('/students/new');
  }
  
  show(student){
    this.props.history.push('/students/' + student.id, { student });
  }
  
  edit(student){
    this.props.history.push('/students/' + student.id + '/edit', { student });
  }
  
  delete(student){
    API.delete('/students/' + student.id, function(result){
      console.log(result);
    })
  }

  render() {
    const { classes } = this.props
    const { students } = this.state

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <div style={{ float: "left" }}>
                <h4 className={classes.cardTitleWhite}>Students</h4>
                <p className={classes.cardCategoryWhite}>All</p>
              </div>
              <div style={{ float: "right" }}>
                <Button color="warning" aria-label="add" justIcon round onClick={ this.new.bind(this)} >
                  <AddIcon />
                </Button>
                <CustomInput
                  labelText="Search"
                  inputProps={{ onChange: this.search.bind(this) }}
                  formControlProps={{ style: { margin: 0 }, fullWidth: true }}
                />
              </div>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["Name", "Email", "Phone", "Level", "Status", "Active", "Actions"]}
                tableData={
                  students.map(student => {
                    return [
                      student.first_name + " " + student.last_name,
                      student.email,
                      student.phone,
                      student.level.name,
                      student.status,
                      student.active.toString(),
                      <div>
                        <Button color="info" aria-label="show" justIcon round
                                onClick={ this.show.bind(this, student)} >
                          <ShowIcon />
                        </Button>
                        &nbsp;&nbsp;
                        <Button color="primary" aria-label="edit" justIcon round
                                onClick={ this.edit.bind(this, student)} >
                          <EditIcon />
                        </Button>
                        &nbsp;&nbsp;
                        <Button color="danger" aria-label="delete" justIcon round
                                onClick={ this.delete.bind(this, student)} >
                          <DeleteIcon />
                        </Button>
                      </div>
                    ]}
                  )
                }
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(StudentList);
