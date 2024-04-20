import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Count from './Count';
import FourGameMatch from './FourGameMatch';
import EightGameMatch from './EightGameMatch';
import OneSetMatch from './OneSetMatch';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

class App extends React.Component {
  state = {
    buttonsVisible: true // ボタンを最初は表示する
  };

  // ボタンを非表示にする関数
  hideButtons = () => {
    this.setState({ buttonsVisible: false });
  };

  render() {
    return (
      <Router>
        {this.state.buttonsVisible && ( // ボタンが表示されている場合にのみ表示
          <div className='Login-Width Link-Page'>
            <h4 className='under-button position-center'>ゲーム形式を選んでください</h4>
            <div className='Arround-Link'>
              <div className='row'>
                <div className='col-6 position-center Arround-Button'>
                  <Link to="/Count" onClick={this.hideButtons}>
                    <button className='btn btn-light'>3セットマッチ</button>
                  </Link>
                </div>
                <div className='col-6 position-center Arround-Button'>
                  <Link to="/FourGameMatch" onClick={this.hideButtons}>
                    <button className='btn btn-light'>ショートセットマッチ</button>
                  </Link>
                </div>
              </div>
              <div className='row'>
                <div className='col-6 position-center Arround-Button'>
                  <Link to="/OneSetMatch" onClick={this.hideButtons}>
                    <button className='btn btn-light'>1セットマッチ</button>
                  </Link>
                </div>
                <div className='col-6 position-center Arround-Button'>
                  <Link to="/EightGameMatch" onClick={this.hideButtons}>
                    <button className='btn btn-light'>8ゲームプロセットマッチ</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        <Routes>
          <Route path="/Count" element={<Count />} />
          <Route path="/FourGameMatch" element={<FourGameMatch />} />
          <Route path="/EightGameMatch" element={<EightGameMatch />} />
          <Route path="/OneSetMatch" element={<OneSetMatch />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
