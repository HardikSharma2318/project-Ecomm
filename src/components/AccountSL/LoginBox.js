import React from 'react';
import './loginstyle.scss';
import './timerstyle.scss';

export default class LoginBox extends React.Component{
  
    constructor(props){
      super(props)
      this.state={ }; 
    }

    submitLogin(){
  
    }

    render(){
      return(
        <div className="inner-container">
        <div className="header">
         Login
        </div>
          <div className="box">
          <form onSubmit={this.handleChange} noValidate>
            <div className="input-group">
            
              <label htmlFor="username">Username</label>              
              <input type="text" 
                     name="username" 
                     className="login-input" 
                     placeholder="username"                         
              />
            </div>
            <br/>

            <div className="input-group">
              <label htmlFor="password">Password</label>              
              <input type="password" 
                     name="password" 
                     className="login-input" 
                     placeholder="password"                        
              />
            </div>
            <br/>
            <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Login</button>
            </form>
          </div>      
        </div>
      )
    }
  }
