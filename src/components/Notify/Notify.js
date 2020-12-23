/*eslint-disable*/
import React from "react";
import PropTypes from "prop-types";
import ErrorIcon from "@material-ui/icons/Close";
import SuccessIcon from "@material-ui/icons/Check";
import Snackbar from "components/Snackbar/Snackbar.js";


class Notify extends React.Component {
  constructor(props) {
    super(props)
    this.state = { display: false }
    
    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
  }
  
  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.show();
    }
  }
  
  hide(){
    if(this.state.display === true){
      this.setState({ display: false })
    }
  }
  
  show(){
    const self = this
    this.setState({ display: true })
    setTimeout(function() {
      self.hide();
    }, 5000);
  }

  render() {
    const { message, type } = this.props
    const { display } = this.state

    const color = type === "error" ? "danger" : "success"
    const icon = type === "error" ? ErrorIcon : SuccessIcon

    console.log(display);

    return (
      <Snackbar
        place="br"
        color={color}
        icon={icon}
        message={message}
        open={display}
        closeNotification={() => this.hide()}
        close
      />
    );
  }
}

Notify.propTypes = {
  type: PropTypes.oneOf(["error", "success"]),
  message: PropTypes.string
};

export default Notify;
