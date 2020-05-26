import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from '../../redux/actions/userActions'
import "./Login.component.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username:'',
      password:'',
      submitted: false,
      isLoading:false
    };
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit =  this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    
    event.preventDefault();
    this.setState({ submitted: true });
    const { username, password } = this.state;
    if (username && password) {
        this.props.login({username:username, password:password});
    }
  }


  handleChange(event){
    
    const{ name, value} = event.target;
    this.setState({[name]:value});
    
  }


  componentDidMount() {
  }
  
  render() {
    //const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;
    return (
      <div className="container top-buffer">
        <div className="row auth-wrapper">
          <div className="col-md-6 col-md-offset-3 auth-inner">
            <form name="form" onSubmit={this.handleSubmit}>
              <h3>Sign In</h3>

              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username" 
                  value={username} 
                  placeholder="Enter username"
                  onChange={this.handleChange}
                />
                 {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password" 
                  value={password}
                  autoComplete="on"
                  onChange={this.handleChange}
                />
                {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
              </div>

              <button  className="btn btn-primary btn-block">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    isLoading:state.user.isLoading,
    user:state.user.user
  }
}

const mapDispatchToProps = (dispatch) =>({
  login: (args) => dispatch(login(args))
})



export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);
