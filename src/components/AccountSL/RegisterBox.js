import React from 'react';
import './loginstyle.scss';
import './timerstyle.scss';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
const phoneRegex = RegExp(/^\d{3}\d{3}\d{4}$/);

const formValid = ({formErrors, ...rest}) => { // ...rest is the username , password, email, phonenumber
  let valid=true;
  // validates form errors beign empty.
  Object.values(formErrors).forEach(val => {val.length > 0 && (valid=false)});
  // validate the form was filled out.
  Object.values(rest).forEach(val => {val === null && (valid = false);});
  return valid;  
}; 

export default class RegisterBox extends React.Component{   
  
  constructor(props){
    super(props);
    this.state={
      username:null,
      email:null,
      phonenum:null,
      password:null,      
      //loggedin:false,
      formErrors:{
        username:"",
        email:"",
        phonenum:"",
        password:""
      },      
    };    
  } 
  
    // Control comes here after the submit value is pressed.
    handleSubmit = e => {           
      e.preventDefault(); // Prevents the page from going to next page when the submit button is pressed, before the page is validated.         
      if(formValid(this.state)){
          console.log(`
            --Submitting--
            UserName : ${this.state.username}
            Email : ${this.state.email}
            Phone Number: ${this.state.phonenum}
            Password: ${this.state.password}
          `);            
      }else{
            console.error("Form Invalid - Display Error Message");
          }        
      };
    
    // continously adds the value to formErrors array in set state as the input field is typed.
    handleChange = e => {
      e.preventDefault(); // Prevents the page from going to next page when the submit button is pressed, before the page is validated.
      const {name,value}=e.target;
      let formErrors = this.state.formErrors;

      switch(name){
        case 'username': 
            formErrors.username = 
              value.length <3  ? 
              "minimum 3 characters required": 
              "";
              break;
        case 'email':
            formErrors.email =
              emailRegex.test(value) ? 
              '': 
              "invalid email address";
              break;
        case 'phonenum': 
            formErrors.phonenum = 
              phoneRegex.test(value) ? 
              "": 
              "invalid phone number";
              break;
        case 'password': 
            formErrors.password = 
              value.length <6 ? 
              "minimum 6 characters required": 
              "";
              break;
        default:
          break;
      }
      this.setState({formErrors, [name]:value}, () => console.log(this.state));
    };
    
    
    render(){           
      const {formErrors} = this.state;
      return(
        <div className="inner-container">
        <div className="header">
          Sign up
        </div>
        <div className="box">    
        <form onSubmit={this.handleSubmit} noValidate>           
            <div className="input-group">           
              <label htmlFor="username">Username</label>              
              <input type="text" 
                     name="username"                       
                     className="login-input" 
                     placeholder="username"
                     noValidate
                     onChange={this.handleChange}
               />    
               {formErrors.username.length>0 && (<span className='errorMessage'>{formErrors.username}</span>)}          
            </div>
            <br/>    

            <div className="input-group">            
            <label htmlFor="email">Email</label>              
              <input type="email"
                     name="email" 
                     className="login-input" 
                     placeholder="email"
                     noValidate
                     onChange={this.handleChange}
              /> 
              {formErrors.email.length>0 && (<span className='errorMessage'>{formErrors.email}</span>)}               
            </div>
            <br/>

            <div className="input-group">
              <label htmlFor="phonenum">Phone No:</label>              
              <input type="number" 
                     name="phonenum" 
                     className="login-input" 
                     placeholder="phone number"
                     noValidate
                     onChange={this.handleChange}
              />
              {formErrors.phonenum.length>0 && (<span className='errorMessage'>{formErrors.phonenum}</span>)}  
            </div>
            <br/>

            <div className="input-group">
              <label htmlFor="password">Password</label>              
              <input type="password" 
                     name="password" 
                     className="login-input" 
                     placeholder="password"
                     noValidate
                     onChange={this.handleChange}
              />
              {formErrors.password.length>0 && (<span className='errorMessage'>{formErrors.password}</span>)}  
            </div>
            <br/>      
            <button type="submit" className="login-btn">Sign up</button>
            </form>         
          </div>                  
        </div>    
      )
    }
  }
