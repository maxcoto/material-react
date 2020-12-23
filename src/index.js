import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import HttpsRedirect from 'react-https-redirect'
import { Router } from "react-router-dom";
import store, { history } from './redux/store'
import sentry from "library/raven/sentry"

import App from './App'
import Admin from "layouts/Admin.js";
import "assets/css/material-dashboard-react.css?v=1.9.0";


// import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(  
  <Provider store={store}>
    <HttpsRedirect>
      <Router history={history}>
        <App />
      </Router>
    </HttpsRedirect>
  </Provider>,
  document.getElementById('root')
);


// if(process.env.NODE_ENV !== 'production') { registerServiceWorker() }

// <Switch>
//   <Route path="/admin" component={Admin} />
//   <Redirect from="/" to="/admin/dashboard" />
// </Switch>


