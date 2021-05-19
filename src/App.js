import React, { Component } from 'react';
import Login from './views/login';

import 'bootswatch/dist/flatly/bootstrap.css';
import './custom.css';

export default class App extends Component {

  render() {
    return (
     <div>
       <Login/>
     </div>
    )
  }
}
