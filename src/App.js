import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Count from './Count';
import Login from './Login';
import GameRecord from './GameRecord';
import ModalRecord from './ModalRecord';
import Register from './Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          {/*ここの部分はおいおい消して画面遷移のためのリンクは後に作る*/}
          <nav>
            <ul className="nav justify-content-end">
              <li className='nav-item'>
                <Link to="Register" className="nav-link link-style">登録画面</Link>
              </li>
              <li className="nav-item">
                <Link to='/Login' className="nav-link link-style" >ログイン画面</Link>
              </li>
              <li class="nav-item">
                <Link to="/Count" className="nav-link link-style" >試合記録</Link>
              </li>
              <li className='nav-item'>
                <Link to="GameRecord" className="nav-link link-style">試合結果画面</Link>
              </li>
              <li className='nav-item'>
                <Link to="ModalRecord" className="nav-link link-style">結果入力のためのモーダル</Link>
              </li>
            </ul>
          </nav>
          {/*---------------------------------------------------*/}
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/Count" element={<Count/>} />
            <Route path="/GameRecord" element={<GameRecord />} />
            <Route path="/ModalRecord" element={<ModalRecord />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
