import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';


class InputPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            error: ''
        };
        this.InputPassChange = this.InputPassChange.bind(this);
    }

    InputPassChange(event){
        const newPassword = event.target.value;
        this.setState({ password: newPassword });
        if (newPassword.length >= 4 && newPassword.length <= 8) {
            this.setState({ error: '' });
        } else {
            this.setState({ error: 'Password must be between 4 and 8 characters long.' });
        }
    };

    render() {
        const { password, error } = this.state;
        return (
            <div className='row'>
                <label className='col-5' htmlFor="password">Password:</label>
                <div className='col-7'>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className='form-control'
                        value={this.state.password}
                        onChange={this.InputPassChange}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        );
    }
}

export default InputPassword;
