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

import Link from '@material-ui/core/Link';
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
    this.state = { students: [] }
    
    API.configure(props.token)
    API.all(
      'students',
      function(data){ this.setState({ students: data }) }.bind(this),
      function(error){ console.log(error); }
    )
  }
  
  edit(student){
    this.props.history.push('/students/' + student.id + '/edit', { student });
  }
  
  show(student){
    this.props.history.push('/students/' + student.id, { student });
  }

  render() {
    const { classes } = this.props
    const { students } = this.state

    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Students</h4>
              <p className={classes.cardCategoryWhite}>All</p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={["Name", "Email", "Phone", "Level", "Status", "Active", "Actions"]}
                tableData={
                  students.map(student => {
                    return [
                      <Link href="#" onClick={ this.show.bind(this, student) }>
                        {student.first_name + " " + student.last_name}
                      </Link>,
                      student.email,
                      student.phone,
                      student.level.name,
                      student.status,
                      student.active.toString(),
                      <div>
                        <Button color="primary" aria-label="edit" justIcon round onClick={ this.edit.bind(this, student)} >
                          <EditIcon />
                        </Button>
                        &nbsp;&nbsp;
                        <Button color="danger" aria-label="delete" justIcon round>
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
