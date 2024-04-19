import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

class InputEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      error: '',
    };
    this.InputChange = this.InputChange.bind(this);
  }

  InputChange(event){
    const inputValue = event.target.value;
    this.setState({ email: inputValue });

    // @マークが含まれていない場合に注意を表示する
    if (!inputValue.includes('@')) {
      this.setState({ error: 'Please enter a valid email address.' });
    } else {
      this.setState({ error: '' });
    }
  };

  render() {
    const { email, error } = this.state;
    return (
      <div className="row">
        <label className='col-5 default-font-bold' htmlFor="email">Email:</label>
        <div className='col-7'>
          <input
            type="email"
            id="email"
            name="email"
            value={this.state.email}
            onChange={this.InputChange}
            className='form-control'
            placeholder="Enter your email"
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
  }
}

export default InputEmail;