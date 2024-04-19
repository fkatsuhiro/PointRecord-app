/*試合結果データ画面*/

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';

class GameRecord extends React.Component {
    render() {
        return (
            <div className='screen-width'>
                <h2>試合結果</h2>
                <div className='row'>
                    <div className='col-6'>
                        <h1>スコア</h1>
                        <div>自分の名前</div>
                    </div>
                    <div className='col-6'>
                        <h1>スコア</h1>
                        <div>相手の名前</div>
                    </div>
                </div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">自分の名前</th>
                            <th scope="col">対戦相手の名前</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1stサーブ</th>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">2ndサーブ</th>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">サービスコース①</th>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">サービスコース②</th>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">サービスコース③</th>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">サービスコース④</th>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">サービスコース⑤</th>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">サービスコース⑥</th>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">リターン返球率</th>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td className='colspan="2"'>ウィニングショット各種</td>
                        </tr>
                        <tr>
                            <th scope="row">サービスエース</th>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">リターンエース</th>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope='row'>ボレー</th>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">フォアハンド</th>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">バックハンド</th>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">ドロップ</th>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">スマッシュ</th>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">相手のミス</th>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row">その他</th>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default GameRecord;