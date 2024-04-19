import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import InputEmail from './InputEmail';
import InputPassword from './InputPassword';

class Login extends React.Component {
    render(){
        return(
            <div className='Login-Width'>
                <h2 className='center-to-left Login-Title'>ログイン</h2>
                <div className='under-button-space'>
                    < InputEmail/>
                </div>
                < InputPassword/>
                <div className='Login-Title right'>Email,PassWordを忘れた方は<a>こちら</a></div>
                <div className='position-center'>
                    <button type="button" className="btn btn-primary default-font-bold">Login</button>
                </div>
            </div>
        );
    }
}

export default Login;