import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {withRouter} from 'react-router-dom';
import Navbar from './component/Navbar.js'
import Cookies from 'universal-cookie';
const cookies = new Cookies();
  class Login extends React.Component{
    
    constructor(props){
      super(props)
      this.handleChange = this.handleChange.bind(this);
      this.handleClick = this.handleClick.bind(this);
    
      if(cookies.get('email') != null){
          this.props.history.push('/home')
      }
    }
    handleChange(e){
      this.props.onChangeText(e.target.id, e.target.value);
    }
    handleClick(){
        

      let token;
      var details = {
        'email': this.props.email,
        'password':this.props.password
      }
      var formBody = [];
      for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      formBody = formBody.join("&");
      console.log(formBody);
      fetch("http://127.0.0.1:8000/api/login",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formBody
      }).then(response => response.json()).then((data)=> {this.props.onChangeText('token',data.success.token);token = data.success.token;cookies.set('email', this.props.email, { path: '/' });this.props.history.push('/home')});
    }
    render(){
      
      return(
        <div>
        <Navbar></Navbar>
        <div className="container" style={{marginTop:'80px'}}>
          <div className="card mx-auto" style={{width: '30%',marginTop: '20%',borderRadius: '10px'}}>
            <div className="card-body">
              <center><h3>Login</h3></center>
              <div className="form-group">
                <label>Email</label>
                <input type="email" onChange={this.handleChange} className="form-control" id="email" placeholder="Email" value={this.props.email} />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" onChange={this.handleChange} className="form-control" id="password" placeholder="Password" value={this.props.password} />
              </div>
              <input type="button" onClick={this.handleClick} value="Login" className="btn btn-info" />
            </div>
          </div>
        </div>
        </div>
  
      )
    }
  }
export default withRouter(Login);