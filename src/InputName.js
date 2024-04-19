/*簡易的なニックネーム登録用のコンポーネント*/
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

class InputName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      error: '',
    };
    this.InputChangeName = this.InputChangeName.bind(this);
  }

  InputChangeName(event){
    const NameValue = event.target.value;
    this.setState({ name: NameValue });

    //　名前が10文字以内になるようにアラートを設定する
    if (this.state.name.length >= 10) {
      this.setState({ error: 'Please enter your nickname in ten words!' });
    } /*else if ( this.state.name.length === 0){
      this.setState({ error: 'Please enter your nickname' });
    }*/else {
      this.setState({ error: '' });
    }
  };

  render() {
    const { name, error } = this.state;
    return (
      <div className="row">
        <label className='col-5 default-font-bold' htmlFor="name">{this.props.Name}</label>
        <div className='col-7'>
          <input
            type="name"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.InputChangeName}
            className='form-control'
            placeholder="Enter your name"
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    );
  }
}

export default InputName;