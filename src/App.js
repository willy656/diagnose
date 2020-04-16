import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home';
import {BrowserRouter, Switch, Route, Link, useHistory, withRouter} from 'react-router-dom';
import Login from './login'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      email : '',
      password : '',
      token : '',
    }
    
    this.onChangeText = this.onChangeText.bind(this)
    
  }
  onChangeText(key,value){
    
    this.setState({[key]: value});
  }
  render(){
    return (
      <div>
        <BrowserRouter>
            <Route path="/" exact={true}>
              <Login email={this.state.email} token={this.state.token} password={this.state.password} onChangeText={this.onChangeText} onLogin={this.login} onLocate={this.gologin}></Login>
            </Route>
            <Route path="/home">
              <Home token={this.state.token} />
            </Route>
         

        </BrowserRouter>
      </div>
    )
  }
}


export default App;
