import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Orders from './components/orders'

import React, { Component } from 'react'
import homepage from './components/homepage';
import orderDetails from './components/orderDetails';

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={'/'}>
        <Switch>
          <Route exact path='/' component={homepage} />
          <Route exact path='/orders' component={Orders} />
          <Route exact path='/orders/:order_id' component={orderDetails} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
