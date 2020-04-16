import React from 'react';

import './App.css';
import Navbar from './component/Navbar.js';
import 'bootstrap/dist/css/bootstrap.css';
import {withRouter} from 'react-router-dom';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            token : this.props.token,
        }
        
    }
    render(){
        if(cookies.get('email') == null || this.state.token == null){
            this.setState({token:''});
            this.props.history.push('/')
        }
        return(
            <div>
            <Navbar />
            
                Wow
                
            </div>
        )
    }
}
export default withRouter(Home);