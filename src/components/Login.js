import React from 'react';

/**
 * A login component.
 * 
 * It will render a login form.
 * 
 * @author Sylwia Krupa | w18015597
 */
class Login extends React.Component {

render() {
  return (
    <div>
       <input
         type='text' 
         placeholder='email'
         value={this.props.email}
         onChange={this.props.handleEmail}
       />
       <input
         type='password' 
         placeholder='password'
         value={this.props.password}
         onChange={this.props.handlePassword}
       />
      <button onClick={this.props.handleLoginClick}>Log in</button>
    </div>
  );
}
}

export default Login;