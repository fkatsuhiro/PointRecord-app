/*各種モーダル*/
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class ModalRecord extends React.Component {
  render() {
    const { setcount1, setcount2 } = this.props; 
    return (
      <div className="modal" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div className='row'>
                <div className='col-6'>
                  <div>Win</div>
                  <img src='./images/win.jpg' />
                  <div>自分の名前</div>
                  {setcount1}
                </div>
                <div className='col-6'>
                  <div>Lose</div>
                  <img src='./images/lose.jpg'/>
                  <div>相手の名前</div>
                  {setcount2}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">試合結果</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalRecord;