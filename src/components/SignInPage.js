import React, {Component} from 'react';
import {Token} from '../requests/tokens';

class SignInPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      errors: []
    };

    this.createToken = this.createToken.bind(this);
  }

  handleChange (name) {
    return event => {
      const {currentTarget} = event;
      this.setState({[name]: currentTarget.value});
    };
  }

  createToken (event) {
    event.preventDefault();
    const {onSignIn = () => {}} = this.props;
    const {email, password} = this.state;
    Token
      .create({email, password})
      .then(data => {
        if (!data.error) {
          const {jwt} = data;
          localStorage.setItem('jwt', jwt);
          this.props.history.push('/');
          onSignIn();
          this.setState({email: "", password: "", errors: []});
        } else {
          this.setState({
            errors: [{message: 'Invalid username or password!'}]
          });
        }
      });
  }

  _renderErrors () {
    const {errors} = this.state;

    return errors.length > 0 ? (
      <p>
        { errors.map(e => e.message).join(', ') }
      </p>
    ) : (
      null
    );
  }

  render () {
    return (
      <main
        className="SignInPage"
        style={{
          padding: '0 20px'
        }}
      >
        <h2>Sign In</h2>
        <form onSubmit={this.createToken}>
          { this._renderErrors() }
          <div>
            <label htmlFor='email'>Email</label> <br />
            <input
              onChange={this.handleChange('email')}
              type='email'
              id='email'
              name='email'
            />
          </div>

          <div>
            <label htmlFor='password'>Password</label> <br />
            <input
              onChange={this.handleChange('password')}
              type='password'
              id='password'
              name='password'
            />
          </div>

          <div>
            <input type='submit' value='Sign In'/>
          </div>
        </form>
      </main>
    )
  }
}

export {SignInPage};
