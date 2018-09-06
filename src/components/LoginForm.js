import React, {Component} from 'react';
import VERIFY_USER from '../Events.js';

export default class LoginForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      nickname: "",
      error:""
    };
  }
  handleSubmit = (e) => {
    e.preventDefult(this.props)
     const {socket} = this.props
     const {nickname} = this.state
     socket.emit(VERIFY_USER, nickname, this.setUser)
  }
  handleChange = (e) => {
    this.setState({nickname:e.target.value})
  }

  render(){
    const { nickname, error } = this.state
    return(
      <div className= "login">
         <form onSubmit={this.handleSubmit} className="login-form">
            <label htmlform="nickname">
                <h2>Got a nickname?</h2>
            </label>
            <input
                 ref={(input)=>{this.textInput = input }}
                 type="text"
                 id="nickname"
                 value={nickname}
                 onChange={this.handleChange}
                 placeholder={'MyCoolUserName'}
                 />
                 <div className="error">{error ? error:null}</div>
         </form>
      </div>
    );
  }
}
