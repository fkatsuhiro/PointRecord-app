import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import InputName from './InputName';
import { Link } from 'react-router-dom';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'initial',
            error: '',
        };
    }

    handleNameChange(name){
        this.setState({ name });
    };

    render(){
        const { name, error } = this.state;
        return(
            <div className='Login-Width'>
                <h2 className='center-to-left Login-Title'>登録</h2>
                <div className='under-button-space'>
                    < InputName Name="自分の名前" onNameChange={this.handleNameChange}/>
                </div>
                <div className='under-button-space'>
                    < InputName Name="相手の名前" onNameChange={this.handleNameChange}/>
                </div>
                {error === '' && (
                    <Link to={`/Count?name=${name}`} className='position-center'>
                        <button disabled={error !== ''} type="button" className="btn btn-primary default-font-bold">Register</button>
                    </Link>
                )}
            </div>
        );
    }
}

export default Register;