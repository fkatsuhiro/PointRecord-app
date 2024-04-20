/*スコア・統計データカウント用コンポーネント*/
import React, { Component } from 'react';
import Modal from 'react-modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import winImage from './images/win.jpg';
import loseImage from './images/lose.jpg';

class OneSetMatch extends React.Component {
    //初期状態
    constructor(props) {
        super(props);
        this.state = {

            /* プレイヤーの名前 */
            PlayerName1: "",
            PlayerName2: "",

            /*Win,Lose表記*/
            WinPlayer1: false,
            LosePlayer1: false,
            WinPlayer2: false,
            LosePlayer2: false,

            //サーバーの状態を選択
            ServerPlayer: null,
            ServerPlayer1: false,
            ServerPlayer2: false,

            //カウント各種
            countplayer1: 0,
            countplayer2: 0,
            gamecount1: 0,
            setcount1: 0,
            gamecount2: 0,
            setcount2: 0,
            totalcount: 0,

            /*各種データ管理*/
            FirstServe: null,
            SecondServe: null,
            ServeCource: null,
            Return: null,
            WinShot: null,

            /*カウントするための変数(Player1)*/
            FirstInCountPlayer1: 0,
            FirstOutCountPlayer1: 0,
            SecondInCountPlayer1: 0,
            SecondOutCountPlayer1: 0,
            ServiceCourseCount1Player1: 0,
            ServiceCourseCount2Player1: 0,
            ServiceCourseCount3Player1: 0,
            ServiceCourseCount4Player1: 0,
            ServiceCourseCount5Player1: 0,
            ServiceCourseCount6Player1: 0,
            ReturnInCountPlayer1: 0,
            ReturnOutCountPlayer1: 0,
            WinShotForeCountPlayer1: 0,
            WinShotBackCountPlayer1: 0,
            WinShotVolleyCountPlayer1: 0,
            WinShotSmashCountPlayer1: 0,
            WinShotDropCountPlayer1: 0,
            WinShotErrorCountPlayer1: 0,
            WinShotServiceCountPlayer1: 0,
            WinShotReturnCountPlayer1: 0,
            WinShotEtcCountPlayer1: 0,

            /*カウントするための変数(Player2)*/
            FirstInCountPlayer2: 0,
            FirstOutCountPlayer2: 0,
            SecondInCountPlayer2: 0,
            SecondOutCountPlayer2: 0,
            ServiceCourseCount1Player2: 0,
            ServiceCourseCount2Player2: 0,
            ServiceCourseCount3Player2: 0,
            ServiceCourseCount4Player2: 0,
            ServiceCourseCount5Player2: 0,
            ServiceCourseCount6Player2: 0,
            ReturnInCountPlayer2: 0,
            ReturnOutCountPlayer2: 0,
            WinShotForeCountPlayer2: 0,
            WinShotBackCountPlayer2: 0,
            WinShotVolleyCountPlayer2: 0,
            WinShotSmashCountPlayer2: 0,
            WinShotDropCountPlayer2: 0,
            WinShotErrorCountPlayer2: 0,
            WinShotServiceCountPlayer2: 0,
            WinShotReturnCountPlayer2: 0,
            WinShotEtcCountPlayer2: 0,

            /*PointWinボタン表示状態*/
            PointWin1: true,
            PointWin2: true,

            /*画面遷移用ボタン表示*/
            /*showButton: false,*/

            /*モーダルの表示*/
            RegisterModal: true,
            showModal: false,

        };

        this.RegisterPlayerName = this.RegisterPlayerName.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleInputName1 = this.handleInputName1.bind(this);
        this.handleInputName2 = this.handleInputName2.bind(this);

    };

    /*サーブのIn率等を出すにはもう少しコードの扱い方を考えた方がいいかも！
    現時点ではゲーム取得毎にサーバーが変更されるコードまでは完成している*/

    //player1のPointWinがクリックされた場合
    Countplayer1(countplayer1, totalcount) {
        if (this.state.countplayer1 % 4 === 3) {
            if (this.state.gamecount1 % 6 === 5) {
                /*ゲームが上限に達した場合のボタンの処理*/
                this.setState({ PointWin1: false, PointWin2: false, WinPlayer1: true, LosePlayer2: true, showModal: true });
                
                this.setState(prevState => ({
                    countplayer1: prevState.countplayer1 + 1,
                    gamecount1: prevState.gamecount1 + 1,
                    countplayer2: 0,
                    totalcount: prevState.totalcount + 1,
                }));

                if (this.state.ServerPlayer1 === true){
                    this.setState({
                        ServerPlayer1: false,
                        ServerPlayer2: true,
                    });
                }else{
                    this.setState({
                        ServerPlayer1: true,
                        ServerPlayer2:false,
                    })
                }

            } else {
                this.setState(prevState => ({
                    countplayer2: 0,
                    countplayer1: prevState.countplayer1 + 1,
                    gamecount1: prevState.gamecount1 + 1,
                    totalcount: prevState.totalcount + 1
                }));

                if (this.state.ServerPlayer1 === true){
                    this.setState({
                        ServerPlayer1: false,
                        ServerPlayer2: true,
                    });
                }else{
                    this.setState({
                        ServerPlayer1: true,
                        ServerPlayer2:false,
                    })
                }
            }
        } else {
            this.setState(prevState => ({
                countplayer1: prevState.countplayer1 + 1,
                totalcount: prevState.totalcount + 1
            }));
        }

        //FirstServeが選択されている場合の処理
        if (this.state.FirstServe === 1) {

            if (this.state.ServerPlayer1 === true){
                this.setState(prevState => ({
                FirstInCount: prevState.FirstInCount + 1,
                FirstServe: null,
            }));
            }else{
                this.setState(prevState => ({
                    FirstInCountPlayer2: prevState.FirstInCountPlayer2 + 1,
                    FirstServe: null,
                }));
            }

        } else if (this.state.FirstServe === 2) {

            if(this.state.ServerPlayer1 === true){
                this.setState(prevState => ({
                    FirstOutCountPlayer1: prevState.FirstOutCountPlayer1 + 1,
                    FirstServe: null,
                }));
            }else{
                this.setState(prevState => ({
                    FirstOutCountPlayer2: prevState.FirstOutCountPlayer2 + 1,
                    FirstServe: null,
                }));
            }

        }

        //SecondServeが選択されている場合の処理
        if (this.state.SecondServe === 1) {

            if (this.state.ServerPlayer1 === true){
                this.setState(prevState => ({
                    SecondInCountPlayer1: prevState.SecondInCountPlayer1 + 1,
                    SecondServe: null,
                }));
            }else{
                this.setState(prevState => ({
                    SecondInCountPlayer2: prevState.SecondInCountPlayer2 + 1,
                    SecondServe: null,
                }));
            }

        } else if (this.state.SecondServe === 2) {

            if (this.state.ServerPlayer1 === true){
                this.setState(prevState => ({
                    SecondOutCountPlayer1: prevState.SecondOutCountPlayer1 + 1,
                    SecondServe: null,
                }));
            }else{
                this.setState(prevState => ({
                    SecondOutCountPlayer2: prevState.SecondOutCountPlayer2 + 1,
                    SecondServe: null,
                }));
            }

        }

        //ServeCourseが選択されている場合
        if (this.state.ServeCource === 1) {

            if (this.state.ServerPlayer1 === true){
                this.setState(prevState => ({
                    ServiceCourseCount1Player1: prevState.ServiceCourseCount1Player1 + 1,
                    ServeCource: null,
                }));
            }else{
                this.setState(prevState => ({
                    ServiceCourseCount1Player2: prevState.ServiceCourseCount1Player2 + 1,
                    ServeCource: null,
                }));
            }

        } else if (this.state.ServeCource === 2) {
            
            if (this.state.ServerPlayer1 === true){
                this.setState(prevState => ({
                    ServiceCourseCount2Player1: prevState.ServiceCourseCount2Player1 + 1,
                    ServeCource: null,
                }));
            }else{
                this.setState(prevState => ({
                    ServiceCourseCount2Player2: prevState.ServiceCourseCount2Player2 + 1,
                    ServeCource: null,
                }));
            }

        } else if (this.state.ServeCource === 3) {

            if (this.state.ServerPlayer1 === true){
                this.setState(prevState => ({
                    ServiceCourseCount3Player1: prevState.ServiceCourseCount3Player1 + 1,
                    ServeCource: null,
                }));
            }else{
                this.setState(prevState => ({
                    ServiceCourseCount3Player2: prevState.ServiceCourseCount3Player2 + 1,
                    ServeCource: null,
                }));
            }

        } else if (this.state.ServeCource === 4) {

            if (this.state.ServerPlayer1 === true){
                this.setState(prevState => ({
                    ServiceCourseCount4Player1: prevState.ServiceCourseCount4Player1 + 1,
                    ServeCource: null,
                }));
            }else{
                this.setState(prevState => ({
                    ServiceCourseCount4Player2: prevState.ServiceCourseCount4Player2 + 1,
                    ServeCource: null,
                }));
            }

        } else if (this.state.ServeCource === 5) {

            if (this.state.ServerPlayer1 === true){
                this.setState(prevState => ({
                    ServiceCourseCount5Player1: prevState.ServiceCourseCount5Player1 + 1,
                    ServeCource: null,
                }));
            }else{
                this.setState(prevState => ({
                    ServiceCourseCount5Player2: prevState.ServiceCourseCount5Player2 + 1,
                    ServeCource: null,
                }));
            }

        } else if (this.state.ServeCource === 6) {

            if (this.state.ServerPlayer1 === true){
                this.setState(prevState => ({
                    ServiceCourseCount6Player1: prevState.ServiceCourseCount6Player1 + 1,
                    ServeCource: null,
                }));
            }else{
                this.setState(prevState => ({
                    ServiceCourseCount6Player2: prevState.ServiceCourseCount6Player2 + 1,
                    ServeCource: null,
                }));
            }
        }

        //Returnが選択されている場合
        if (this.state.Return === 1) {

            if (this.state.ServerPlayer1 === true){
                this.setState(prevState => ({
                    ReturnInCountPlayer2: prevState.ReturnInCountPlayer2 + 1,
                    Return: null,
                }));
            }else{
                this.setState(prevState => ({
                    ReturnInCountPlayer1: prevState.ReturnInCountPlayer1 + 1,
                    Return: null,
                }));
            }

        } else if (this.state.Return === 2) {

            if (this.state.ServerPlayer1 === true){
                this.setState(prevState => ({
                    ReturnOutCountPlayer2: prevState.ReturnOutCountPlayer2 + 1,
                    Return: null,
                }));
            }else{
                this.setState(prevState => ({
                    ReturnOutCountPlayer1: prevState.ReturnOutCountPlayer1 + 1,
                    Return: null,
                }));
            }

        }

        //WinShotが選択されている場合
        if (this.state.WinShot === 1) {
            this.setState(prevState => ({
                WinShotForeCountPlayer1: prevState.WinShotForeCountPlayer1 + 1,
                WinShot: null,
            }));
        } else if (this.state.WinShot === 2) {
            this.setState(prevState => ({
                WinShotBackCountPlayer1: prevState.WinShotBackCountPlayer1 + 1,
                WinShot: null,
            }));
        } else if (this.state.WinShot === 3) {
            this.setState(prevState => ({
                WinShotVolleyCountPlayer1: prevState.WinShotVolleyCountPlayer1 + 1,
                WinShot: null,
            }));
        } else if (this.state.WinShot === 4) {
            this.setState(prevState => ({
                WinShotSmashCountPlayer1: prevState.WinShotSmashCountPlayer1 + 1,
                WinShot: null,
            }));
        } else if (this.state.WinShot === 5) {
            this.setState(prevState => ({
                WinShotDropCountPlayer1: prevState.WinShotDropCountPlayer1 + 1,
                WinShot: null,
            }));
        } else if (this.state.WinShot === 6) {
            this.setState(prevState => ({
                WinShotErrorCountPlayer1: prevState.WinShotErrorCountPlayer1 + 1,
                WinShot: null,
            }));
        } else if (this.stateWinShot === 7) {
            this.setState(prevState => ({
                WinShotServiceCountPlayer1: prevState.WinShotServiceCountPlayer1 + 1,
                WinShot: null,
            }));
        } else if (this.state.WinShot === 8) {
            this.setState(prevState => ({
                WinShotReturnCountPlayer1: prevState.WinShotReturnCountPlayer1 + 1,
                WinShot: null,
            }));
        } else if (this.state.WinShot === 9) {
            this.setState(prevState => ({
                WinShotEtcCountPlayer1: prevState.WinShotEtcCountPlayer1 + 1,
                WinShot: null,
            }));
        }
    }

    //プレーヤー２のPointWinがクリックされた場合
    Countplayer2(countplayer2, totalcount) {
        if (this.state.countplayer2 % 4 === 3) {
            if (this.state.gamecount2 % 6 === 5) {

                /*セットカウントが上限に達した場合のボタンの処理*/
                this.setState({ PointWin1: false, PointWin2: false, LosePlayer1: true, WinPlayer2: true });

                this.setState(prevState => ({
                    countplayer1: 0,
                    countplayer2: prevState.countplayer2 + 1,
                    totalcount: prevState.totalcount + 1
                }));

                if (this.state.ServerPlayer1 === true){
                    this.setState({
                        ServerPlayer1: false,
                        ServerPlayer2: true,
                    });
                }else{
                    this.setState({
                        ServerPlayer1: true,
                        ServerPlayer2:false,
                    })
                }

            } else {
                this.setState(prevState => ({
                    countplayer1: 0,
                    countplayer2: prevState.countplayer2 + 1,
                    gamecount2: prevState.gamecount2 + 1,
                    totalcount: prevState.totalcount + 1
                }));

                if (this.state.ServerPlayer1 === true){
                    this.setState({
                        ServerPlayer1: false,
                        ServerPlayer2: true,
                    });
                }else{
                    this.setState({
                        ServerPlayer1: true,
                        ServerPlayer2:false,
                    })
                }
            }
        } else {
            this.setState(prevState => ({
                countplayer2: prevState.countplayer2 + 1,
                totalcount: prevState.totalcount + 1
            }));
        }

        //FirstServeが選択されている場合の処理
        if (this.state.FirstServe === 1) {

            if (this.state.ServerPlayer1 === true){
                this.setState(prevState => ({
                FirstInCount: prevState.FirstInCount + 1,
                FirstServe: null,
            }));
            }else{
                this.setState(prevState => ({
                    FirstInCountPlayer2: prevState.FirstInCountPlayer2 + 1,
                    FirstServe: null,
                }));
            }

        } else if (this.state.FirstServe === 2) {

            if(this.state.ServerPlayer1 === true){
                this.setState(prevState => ({
                    FirstOutCountPlayer1: prevState.FirstOutCountPlayer1 + 1,
                    FirstServe: null,
                }));
            }else{
                this.setState(prevState => ({
                    FirstOutCountPlayer2: prevState.FirstOutCountPlayer2 + 1,
                    FirstServe: null,
                }));
            }

        }

        //SecondServeが選択されている場合の処理
        if (this.state.SecondServe === 1) {

            if (this.state.ServerPlayer1 === true){
                this.setState(prevState => ({
                    SecondInCountPlayer1: prevState.SecondInCountPlayer1 + 1,
                    SecondServe: null,
                }));
            }else{
                this.setState(prevState => ({
                    SecondInCountPlayer2: prevState.SecondInCountPlayer2 + 1,
                    SecondServe: null,
                }));
            }

        } else if (this.state.SecondServe === 2) {

            if (this.state.ServerPlayer1 === true){
                this.setState(prevState => ({
                    SecondOutCountPlayer1: prevState.SecondOutCountPlayer1 + 1,
                    SecondServe: null,
                }));
            }else{
                this.setState(prevState => ({
                    SecondOutCountPlayer2: prevState.SecondOutCountPlayer2 + 1,
                    SecondServe: null,
                }));
            }

        }

        //ServeCourseが選択されている場合
        if (this.state.ServeCource === 1) {

            if (this.state.ServerPlayer1 === true){
                this.setState(prevState => ({
                    ServiceCourseCount1Player1: prevState.ServiceCourseCount1Player1 + 1,
                    ServeCource: null,
                }));
            }else{
                this.setState(prevState => ({
                    ServiceCourseCount1Player2: prevState.ServiceCourseCount1Player2 + 1,
                    ServeCource: null,
                }));
            }

        } else if (this.state.ServeCource === 2) {
            
            if (this.state.ServerPlayer1 === true){
                this.setState(prevState => ({
                    ServiceCourseCount2Player1: prevState.ServiceCourseCount2Player1 + 1,
                    ServeCource: null,
                }));
            }else{
                this.setState(prevState => ({
                    ServiceCourseCount2Player2: prevState.ServiceCourseCount2Player2 + 1,
                    ServeCource: null,
                }));
            }

        } else if (this.state.ServeCource === 3) {

            if (this.state.ServerPlayer1 === true){
                this.setState(prevState => ({
                    ServiceCourseCount3Player1: prevState.ServiceCourseCount3Player1 + 1,
                    ServeCource: null,
                }));
            }else{
                this.setState(prevState => ({
                    ServiceCourseCount3Player2: prevState.ServiceCourseCount3Player2 + 1,
                    ServeCource: null,
                }));
            }

        } else if (this.state.ServeCource === 4) {

            if (this.state.ServerPlayer1 === true){
                this.setState(prevState => ({
                    ServiceCourseCount4Player1: prevState.ServiceCourseCount4Player1 + 1,
                    ServeCource: null,
                }));
            }else{
                this.setState(prevState => ({
                    ServiceCourseCount4Player2: prevState.ServiceCourseCount4Player2 + 1,
                    ServeCource: null,
                }));
            }

        } else if (this.state.ServeCource === 5) {

            if (this.state.ServerPlayer1 === true){
                this.setState(prevState => ({
                    ServiceCourseCount5Player1: prevState.ServiceCourseCount5Player1 + 1,
                    ServeCource: null,
                }));
            }else{
                this.setState(prevState => ({
                    ServiceCourseCount5Player2: prevState.ServiceCourseCount5Player2 + 1,
                    ServeCource: null,
                }));
            }

        } else if (this.state.ServeCource === 6) {

            if (this.state.ServerPlayer1 === true){
                this.setState(prevState => ({
                    ServiceCourseCount6Player1: prevState.ServiceCourseCount6Player1 + 1,
                    ServeCource: null,
                }));
            }else{
                this.setState(prevState => ({
                    ServiceCourseCount6Player2: prevState.ServiceCourseCount6Player2 + 1,
                    ServeCource: null,
                }));
            }
        }

        //Returnが選択されている場合
        if (this.state.Return === 1) {

            if (this.state.ServerPlayer1 === true){
                this.setState(prevState => ({
                    ReturnInCountPlayer2: prevState.ReturnInCountPlayer2 + 1,
                    Return: null,
                }));
            }else{
                this.setState(prevState => ({
                    ReturnInCountPlayer1: prevState.ReturnInCountPlayer1 + 1,
                    Return: null,
                }));
            }

        } else if (this.state.Return === 2) {

            if (this.state.ServerPlayer1 === true){
                this.setState(prevState => ({
                    ReturnOutCountPlayer2: prevState.ReturnOutCountPlayer2 + 1,
                    Return: null,
                }));
            }else{
                this.setState(prevState => ({
                    ReturnOutCountPlayer1: prevState.ReturnOutCountPlayer1 + 1,
                    Return: null,
                }));
            }

        }

        //WinShotが選択されている場合
        if (this.state.WinShot === 1) {
            this.setState(prevState => ({
                WinShotForeCountPlayer2: prevState.WinShotForeCountPlayer2 + 1,
                WinShot: null,
            }));
        } else if (this.state.WinShot === 2) {
            this.setState(prevState => ({
                WinShotBackCountPlayer2: prevState.WinShotBackCountPlayer2 + 1,
                WinShot: null,
            }));
        } else if (this.state.WinShot === 3) {
            this.setState(prevState => ({
                WinShotVolleyCountPlayer2: prevState.WinShotVolleyCountPlayer2 + 1,
                WinShot: null,
            }));
        } else if (this.state.WinShot === 4) {
            this.setState(prevState => ({
                WinShotSmashCountPlayer2: prevState.WinShotSmashCountPlayer2 + 1,
                WinShot: null,
            }));
        } else if (this.state.WinShot === 5) {
            this.setState(prevState => ({
                WinShotDropCountPlayer2: prevState.WinShotDropCountPlayer2 + 1,
                WinShot: null,
            }));
        } else if (this.state.WinShot === 6) {
            this.setState(prevState => ({
                WinShotErrorCountPlayer2: prevState.WinShotErrorCountPlayer2 + 1,
                WinShot: null,
            }));
        } else if (this.stateWinShot === 7) {
            this.setState(prevState => ({
                WinShotServiceCountPlayer2: prevState.WinShotServiceCountPlayer2 + 1,
                WinShot: null,
            }));
        } else if (this.state.WinShot === 8) {
            this.setState(prevState => ({
                WinShotReturnCountPlayer2: prevState.WinShotReturnCountPlayer2 + 1,
                WinShot: null,
            }));
        } else if (this.state.WinShot === 9) {
            this.setState(prevState => ({
                WinShotEtcCountPlayer2: prevState.WinShotEtcCountPlayer2 + 1,
                WinShot: null,
            }));
        }
    }

    //player1のカウントの表示を整える
    Player1() {
        if (this.state.countplayer1 % 4 === 0) {
            return 0
        } else if (this.state.countplayer1 % 4 === 1) {
            return 15
        } else if (this.state.countplayer1 % 4 === 2) {
            return 30
        } else if (this.state.countplayer1 % 4 === 3) {
            return 40
        }
    }

    //player2のカウント表示を整える
    Player2() {
        if (this.state.countplayer2 % 4 === 0) {
            return 0
        } else if (this.state.countplayer2 % 4 === 1) {
            return 15
        } else if (this.state.countplayer2 % 4 === 2) {
            return 30
        } else if (this.state.countplayer2 % 4 === 3) {
            return 40
        }
    }

    /*初期サーバーの選択*/
    handleServer1() {
        this.setState({
            ServerPlayer1: true,
            ServerPlayer2: false,
        });
    };

    handleServer2() {
        this.setState({
            ServerPlayer1: false,
            ServerPlayer2: true,
        })
    };

    /*各項目のボタンが一つしか選択できないようにする設定*/
    ClickFirstServe(buttonId) {
        if (this.state.FirstServe !== buttonId) {
            this.setState({ FirstServe: buttonId });
        } else {
            this.setState({ FirstServe: null });
        }
    };

    ClickSecondServe(buttonId) {
        if (this.state.SecondServe !== buttonId) {
            this.setState({ SecondServe: buttonId });
        } else {
            this.setState({ SecondServe: null });
        }
    }

    ClickServeCource(buttonId) {
        if (this.state.ServeCource !== buttonId) {
            this.setState({ ServeCource: buttonId });
        } else {
            this.setState({ ServeCource: null });
        }
    }

    ClickReturn(buttonId) {
        if (this.state.Return !== buttonId) {
            this.setState({ Return: buttonId });
        } else {
            this.setState({ Return: null });
        }
    }

    ClickWinShot(buttonId) {
        if (this.state.WinShot !== buttonId) {
            this.setState({ WinShot: buttonId });
        } else {
            this.setState({ WinShot: null });
        }
    }

    /*プレイヤー名を登録してモーダルが閉じる仕組み*/
    RegisterPlayerName() {
        this.setState({ RegisterModal: false })
    }

    handleInputName1(PlayerName1) {
        this.setState({ name1: PlayerName1.target.value });
    }

    handleInputName2(PlayerName2) {
        this.setState({ name2: PlayerName2.target.value });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    render() {
        /*並んでいるボタンのスタイルを割り当てる*/
        const button1 = {
            borderRadius: '5px 0 0 0',
        };
        const button2 = {
            borderRadius: '0',
        };
        const button3 = {
            borderRadius: '0 5px 0 0',
        };
        const button4 = {
            borderRadius: '0 0 0 5px',
        };
        const button5 = {
            borderRadius: '0 0 5px 0',
        };

        /*各種データの定義*/
        const { FirstServe, SecondServe, ServeCource, Return, WinShot, PointWin1, PointWin2,
            WinPlayer1, WinPlayer2, LosePlayer1, LosePlayer2, name1, name2, ServerPlayer1, 
            ServerPlayer2, FirstInCountPlayer1, FirstInCountPlayer2 , FirstOutCountPlayer1, 
            FirstOutCountPlayer2, SecondInCountPlayer1, SecondInCountPlayer2, SecondOutCountPlayer1, 
            SecondOutCountPlayer2, ServiceCourseCount1Player1, ServiceCourseCount2Player1, ServiceCourseCount3Player1, 
            ServiceCourseCount4Player1, ServiceCourseCount5Player1, ServiceCourseCount6Player1, ServiceCourseCount1Player2,
            ServiceCourseCount2Player2, ServiceCourseCount3Player2, ServiceCourseCount4Player2, ServiceCourseCount5Player2, 
            ServiceCourseCount6Player2, ReturnInCountPlayer1, ReturnInCountPlayer2, ReturnOutCountPlayer1 ,ReturnOutCountPlayer2,
            WinShotForeCountPlayer1, WinShotForeCountPlayer2, WinShotBackCountPlayer1, WinShotBackCountPlayer2, WinShotDropCountPlayer1, WinShotDropCountPlayer2,WinShotErrorCountPlayer1,WinShotErrorCountPlayer2, WinShotSmashCountPlayer1, WinShotSmashCountPlayer2,
            WinShotEtcCountPlayer1, WinShotEtcCountPlayer2, WinShotReturnCountPlayer1, WinShotReturnCountPlayer2, WinShotServiceCountPlayer1,WinShotServiceCountPlayer2, WinShotVolleyCountPlayer1,WinShotVolleyCountPlayer2,
             } = this.state;

        /*出力結果計算用コード*/
        const ProbabilityFirstInPlayer1 = Math.floor( ( FirstInCountPlayer1 / (FirstInCountPlayer1 + FirstOutCountPlayer1 ) * 100 ));
        const ProbabilityFirstInPlayer2 = Math.floor( ( FirstInCountPlayer2 / ( FirstInCountPlayer2 + FirstOutCountPlayer2 ) * 100 ));

        const ProbabilitySecondInPlayer1 = Math.floor( ( SecondInCountPlayer1 / ( SecondInCountPlayer1 + SecondOutCountPlayer1 ) * 100 ));
        const ProbabilitySecondInPlayer2 = Math.floor( ( SecondInCountPlayer2 / ( SecondInCountPlayer2 + SecondOutCountPlayer2 ) * 100 ));

        /*サービスコース*/
            /* Player1 */
        const ProbabilityServeCource1Player1 = Math.floor( ( ServiceCourseCount1Player1 / ( ServiceCourseCount1Player1 + ServiceCourseCount2Player1 + ServiceCourseCount3Player1 + ServiceCourseCount4Player1 + ServiceCourseCount5Player1 + ServiceCourseCount6Player1 )) * 100 );
        const ProbabilityServeCource2Player1 = Math.floor( ( ServiceCourseCount2Player1 / ( ServiceCourseCount1Player1 + ServiceCourseCount2Player1 + ServiceCourseCount3Player1 + ServiceCourseCount4Player1 + ServiceCourseCount5Player1 + ServiceCourseCount6Player1 )) * 100 );
        const ProbabilityServeCource3Player1 = Math.floor( ( ServiceCourseCount3Player1 / ( ServiceCourseCount1Player1 + ServiceCourseCount2Player1 + ServiceCourseCount3Player1 + ServiceCourseCount4Player1 + ServiceCourseCount5Player1 + ServiceCourseCount6Player1 )) * 100 );
        const ProbabilityServeCource4Player1 = Math.floor( ( ServiceCourseCount4Player1 / ( ServiceCourseCount1Player1 + ServiceCourseCount2Player1 + ServiceCourseCount3Player1 + ServiceCourseCount4Player1 + ServiceCourseCount5Player1 + ServiceCourseCount6Player1 )) * 100 );
        const ProbabilityServeCource5Player1 = Math.floor( ( ServiceCourseCount5Player1 / ( ServiceCourseCount1Player1 + ServiceCourseCount2Player1 + ServiceCourseCount3Player1 + ServiceCourseCount4Player1 + ServiceCourseCount5Player1 + ServiceCourseCount6Player1 )) * 100 );
        const ProbabilityServeCource6Player1 = Math.floor( ( ServiceCourseCount6Player1 / ( ServiceCourseCount1Player1 + ServiceCourseCount2Player1 + ServiceCourseCount3Player1 + ServiceCourseCount4Player1 + ServiceCourseCount5Player1 + ServiceCourseCount6Player1 )) * 100 );

            /* Player2 */
        const ProbabilityServeCource1Player2 = Math.floor( ( ServiceCourseCount1Player2 / ( ServiceCourseCount1Player2 + ServiceCourseCount2Player2 + ServiceCourseCount3Player2 + ServiceCourseCount4Player2 + ServiceCourseCount5Player2 + ServiceCourseCount6Player2 )) * 100 );
        const ProbabilityServeCource2Player2 = Math.floor( ( ServiceCourseCount2Player2 / ( ServiceCourseCount1Player2 + ServiceCourseCount2Player2 + ServiceCourseCount3Player2 + ServiceCourseCount4Player2 + ServiceCourseCount5Player2 + ServiceCourseCount6Player2 )) * 100 );
        const ProbabilityServeCource3Player2 = Math.floor( ( ServiceCourseCount3Player2 / ( ServiceCourseCount1Player2 + ServiceCourseCount2Player2 + ServiceCourseCount3Player2 + ServiceCourseCount4Player2 + ServiceCourseCount5Player2 + ServiceCourseCount6Player2 )) * 100 );
        const ProbabilityServeCource4Player2 = Math.floor( ( ServiceCourseCount4Player2 / ( ServiceCourseCount1Player2 + ServiceCourseCount2Player2 + ServiceCourseCount3Player2 + ServiceCourseCount4Player2 + ServiceCourseCount5Player2 + ServiceCourseCount6Player2 )) * 100 );
        const ProbabilityServeCource5Player2 = Math.floor( ( ServiceCourseCount5Player2 / ( ServiceCourseCount1Player2 + ServiceCourseCount2Player2 + ServiceCourseCount3Player2 + ServiceCourseCount4Player2 + ServiceCourseCount5Player2 + ServiceCourseCount6Player2 )) * 100 );
        const ProbabilityServeCource6Player2 = Math.floor( ( ServiceCourseCount6Player2 / ( ServiceCourseCount1Player2 + ServiceCourseCount2Player2 + ServiceCourseCount3Player2 + ServiceCourseCount4Player2 + ServiceCourseCount5Player2 + ServiceCourseCount6Player2 )) * 100 );

        /* リターン返球率 */
        const ProbabilityReturnPlayer1 = Math.floor( ( ReturnInCountPlayer1 / ( ReturnInCountPlayer1 + ReturnOutCountPlayer1 ) ) * 100 );
        const ProbabilityReturnPlayer2 = Math.floor( ( ReturnInCountPlayer2 / ( ReturnInCountPlayer2 + ReturnOutCountPlayer2 ) ) * 100 );

        /* WinShot合計 */
        const WinShotTotalPlayer1 = WinShotForeCountPlayer1 + WinShotBackCountPlayer1 + WinShotDropCountPlayer1 + WinShotVolleyCountPlayer1 + WinShotSmashCountPlayer1 + WinShotErrorCountPlayer1 + WinShotServiceCountPlayer1 + WinShotReturnCountPlayer1 + WinShotEtcCountPlayer1;
        const WinShotTotalPlayer2 = WinShotForeCountPlayer2 + WinShotBackCountPlayer2 + WinShotDropCountPlayer2 + WinShotVolleyCountPlayer2 + WinShotSmashCountPlayer2 + WinShotErrorCountPlayer2 + WinShotServiceCountPlayer2 + WinShotReturnCountPlayer2 + WinShotEtcCountPlayer2;

        /* WinShot各種確率 */
        const ProbabilityWinShotForePlayer1 = Math.floor( ( WinShotForeCountPlayer1 / WinShotTotalPlayer1 ) * 100 );
        const ProbabilityWinShotForePlayer2 = Math.floor( ( WinShotForeCountPlayer2 / WinShotTotalPlayer2 ) * 100 );
        const ProbabilityWinShotBackPlayer1 = Math.floor( ( WinShotBackCountPlayer1 / WinShotTotalPlayer1 ) * 100 );
        const ProbabilityWinShotBackPlayer2 = Math.floor( ( WinShotBackCountPlayer2 / WinShotTotalPlayer2 ) * 100 );
        const ProbabilityWinShotDropPlayer1 = Math.floor( ( WinShotDropCountPlayer1 / WinShotTotalPlayer1 ) * 100 );
        const ProbabilityWinShotDropPlayer2 = Math.floor( ( WinShotDropCountPlayer2 / WinShotTotalPlayer2 ) * 100 );
        const ProbabilityWinShotSmashPlayer1 = Math.floor( ( WinShotSmashCountPlayer1 / WinShotTotalPlayer1 ) * 100 );
        const ProbabilityWinShotSmashPlayer2 = Math.floor( ( WinShotSmashCountPlayer2 / WinShotTotalPlayer2 ) * 100 );
        const ProbabilityWinShotVolleyPlayer1 = Math.floor( ( WinShotVolleyCountPlayer1 / WinShotTotalPlayer1 ) * 100 );
        const ProbabilityWinShotVolleyPlayer2 = Math.floor( ( WinShotVolleyCountPlayer2 / WinShotTotalPlayer2 ) * 100 );
        const ProbabilityWinShotServicePlayer1 = Math.floor( ( WinShotServiceCountPlayer1 / WinShotTotalPlayer1 ) * 100 );
        const ProbabilityWinShotServicePlayer2 = Math.floor( ( WinShotServiceCountPlayer2 / WinShotTotalPlayer2 ) * 100 );
        const ProbabilityWinShotReturnPlayer1 = Math.floor( ( WinShotReturnCountPlayer1 / WinShotTotalPlayer1 ) * 100 );
        const ProbabilityWinShotReturnPlayer2 = Math.floor( ( WinShotReturnCountPlayer2 / WinShotTotalPlayer2 ) * 100 );
        const ProbabilityWinShotErrorPlayer1 = Math.floor( ( WinShotErrorCountPlayer1 / WinShotTotalPlayer1 ) * 100 );
        const ProbabilityWinShotErrorPlayer2 = Math.floor( ( WinShotErrorCountPlayer2 / WinShotTotalPlayer2 ) * 100 );
        const ProbabilityWinShotEtcPlayer1 = Math.floor( ( WinShotEtcCountPlayer1 / WinShotTotalPlayer1 ) * 100 );
        const ProbabilityWinShotEtcPlayer2 = Math.floor( ( WinShotEtcCountPlayer2 / WinShotTotalPlayer2 ) * 100 );


        return (
            <div>
                <Modal isOpen={this.state.RegisterModal} contentLabel="Start Modal">
                    <div className='Login-Width'>
                        <h2 className='center-to-left Login-Title'>Register Your Information!</h2>
                        <div className='row under-button-space'>
                            <label className='col-5 default-font-bold' htmlFor="name1">自分の名前</label>
                            <div className='col-7'>
                                <input
                                    type="name"
                                    id="name"
                                    name="name"
                                    value={this.state.name1}
                                    onChange={this.handleInputName1}
                                    className='form-control'
                                    placeholder="Enter your name"
                                />
                            </div>
                        </div>
                        <div className='row under-button-space'>
                            <label className='col-5 default-font-bold' htmlFor="name2">相手の名前</label>
                            <div className='col-7'>
                                <input
                                    type="name"
                                    id="name"
                                    name="name"
                                    value={this.state.name2}
                                    onChange={this.handleInputName2}
                                    className='form-control'
                                    placeholder="Enter your name"
                                />
                            </div>
                        </div>
                        <h5>Check the server for first game!</h5>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" checked={ServerPlayer1} onClick={() => this.handleServer1()}/>
                                <label className="form-check-label">
                                    あなた
                                </label>
                        </div>
                        <div className="form-check under-button-space">
                            <input className="form-check-input" type="checkbox" checked={ServerPlayer2} onClick={() => this.handleServer2()}/>
                                <label className="form-check-label">
                                    対戦相手
                                </label>
                        </div>
                        <div className='position-center Login-Title'>
                            <button className='btn btn-primary default-font-bold' onClick={this.RegisterPlayerName}>Register</button>
                        </div>
                    </div>
                </Modal>
                {/*以下動いているかのテスト用のコード
                <div className='default-font-bold'>
                    TotalCount: {this.state.totalcount}<br />FirstInCount: {this.state.FirstInCount}<br />FirstOutCount: {this.state.FirstOutCount}
                    <br />SecondInCount: {this.state.SecondInCount}<br />SecondOutCount: {this.state.SecondOutCount}<br />
                    Serve1: {this.state.ServiceCourseCount1}<br />Serve2: {this.state.ServiceCourseCount2}<br />Serve3: {this.state.ServiceCourseCount3}
                    <br />Serve4: {this.state.ServiceCourseCount4}<br />Serve5: {this.state.ServiceCourseCount5}
                    <br />Serve6: {this.state.ServiceCourseCount6}<br />ReturnIn: {this.state.ReturnInCount}
                    <br />RetutnOut: {this.state.ReturnOutCount}<br />WinFore: {this.state.WinShotForeCount}
                    <br />WinBack: {this.state.WinShotBackCount}<br />WinVolley: {this.state.WinShotVolleyCount}
                    <br />WinSmash: {this.state.WinShotSmashCount}<br />WinDrop: {this.state.WinShotDrop}
                    <br />WinError: {this.state.WinShotError}<br />WinServe: {this.state.WinShotServiceCount}
                    <br />WinReturn: {this.state.WinShotReturnCount}<br />WinEtc: {this.state.WinShotEtcCount}<br />
                </div>*/}
                <div className='screen-width'>
                    <div className='row'>
                        {/*player1*/}
                        <div className='col-6'>
                            {/*得点のカウント*/}
                            <div className='name'>{name1}</div>

                            {/*スコア表示の部分*/}
                            <div className='score-poket' >
                                <div>Score ( Game - Point )</div>
                                <div className='score'> {this.state.gamecount1} - {this.Player1()}</div>
                            </div>
                        </div>

                        {/*player2*/}
                        <div className='col-6'>
                            {/*得点のカウント*/}
                            <div className='name'>{name2}</div>

                            <div className='score-poket'>
                                <div>Score ( Game - Point )</div>
                                <div className='score'> {this.state.gamecount2} - {this.Player2()}</div>
                            </div>
                        </div>
                    </div>

                    { /*各種データ選択*/}
                    <div className='row'>
                        <div className='col-md-4 default-font-bold center-to-left under-button-space'>1stサーブ:</div>
                        <div className='col-md-8 row under-button-space'>
                            <div className='col-6'>
                                <button className={`btn btn-secondary button-style col-6 ${FirstServe === 1 ? 'FirstServe' : ''}`} onClick={() => this.ClickFirstServe(1)}>In</button>
                            </div>
                            <div className='col-6'>
                                <button className={`btn btn-secondary button-style col-6 ${FirstServe === 2 ? 'FirstServe' : ''}`} onClick={() => this.ClickFirstServe(2)}>Out</button>
                            </div>
                            {/*idの状態を返す*/}
                            {/*<div>idを返す</div>
                            {this.state.FirstServe}*/}
                            {/*この後実装したいのはこのfirstサーブでid=2が選択された時にしたのブロックを表示する機能を実装したい*/}
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-4 default-font-bold center-to-left under-button-space'>2ndサーブ:</div>
                        <div className='col-md-8 row under-button-space'>
                            <div className='col-6'>
                                <button className={`btn btn-secondary button-style col-6 ${SecondServe === 1 ? 'SecondServe' : ''}`} onClick={() => this.ClickSecondServe(1)}>In</button>
                            </div>
                            <div className='col-6'>
                                <button className={`btn btn-secondary button-style col-6 ${SecondServe === 2 ? 'SecondServe' : ''}`} onClick={() => this.ClickSecondServe(2)}>Out</button>
                            </div>
                            {/*<div>idを返す</div>
                            {this.state.SecondServe}*/}
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-4 default-font-bold center-to-left under-button-space'>サービスコース:</div>
                        <div className='col-md-8 row under-button-space'>
                            <button className={`btn btn-secondary button-style col-4 ${ServeCource === 1 ? 'ServeCource' : ''}`} style={button1} onClick={() => this.ClickServeCource(1)}>&#9312;</button>
                            <button className={`btn btn-secondary button-style col-4 ${ServeCource === 2 ? 'ServeCource' : ''}`} style={button2} onClick={() => this.ClickServeCource(2)}>&#9313;</button>
                            <button className={`btn btn-secondary button-style col-4 ${ServeCource === 3 ? 'ServeCource' : ''}`} style={button3} onClick={() => this.ClickServeCource(3)}>&#9314;</button>
                            <button className={`btn btn-secondary button-style col-4 ${ServeCource === 4 ? 'ServeCource' : ''}`} style={button4} onClick={() => this.ClickServeCource(4)}>&#9315;</button>
                            <button className={`btn btn-secondary button-style col-4 ${ServeCource === 5 ? 'ServeCource' : ''}`} style={button2} onClick={() => this.ClickServeCource(5)}>&#9316;</button>
                            <button className={`btn btn-secondary button-style col-4 ${ServeCource === 6 ? 'ServeCource' : ''}`} style={button5} onClick={() => this.ClickServeCource(6)}>&#9317;</button>
                            <div className='right'>サービスコースの番号に関しての詳細は<a>こちら</a></div>
                            {/*<div>idを返す</div>
                            {this.state.ServeCource}*/}
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-4 default-font-bold center-to-left under-button-space'>リターン返球:</div>
                        <div className='col-md-8 row under-button-space'>
                            <div className='col-6'>
                                <button className={`btn btn-secondary button-style col-6 ${Return === 1 ? 'Return' : ''} `} onClick={() => this.ClickReturn(1)}>In</button>
                            </div>
                            <div className='col-6'>
                                <button className={`btn btn-secondary button-style col-6 ${Return === 2 ? 'Return' : ''} `} onClick={() => this.ClickReturn(2)}>Out</button>
                            </div>
                            {/*<div>idを返す</div>
                            {this.state.Return}*/}
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-4 default-font-bold center-to-left under-button-space'>ウィニングショット:</div>
                        <div className='col-md-8 row under-button-space'>
                            <button className={`btn btn-secondary button-style col-4 ${WinShot === 1 ? 'WinShot' : ''}`} style={button1} onClick={() => this.ClickWinShot(1)}>フォアハンド</button>
                            <button className={`btn btn-secondary button-style col-4 ${WinShot === 2 ? 'WinShot' : ''}`} style={button2} onClick={() => this.ClickWinShot(2)}>バックハンド</button>
                            <button className={`btn btn-secondary button-style col-4 ${WinShot === 3 ? 'WinShot' : ''}`} style={button3} onClick={() => this.ClickWinShot(3)}>ボレー</button>
                            <button className={`btn btn-secondary button-style col-4 ${WinShot === 4 ? 'WinShot' : ''}`} style={button2} onClick={() => this.ClickWinShot(4)}>スマッシュ</button>
                            <button className={`btn btn-secondary button-style col-4 ${WinShot === 5 ? 'WinShot' : ''}`} style={button2} onClick={() => this.ClickWinShot(5)}>ドロップ</button>
                            <button className={`btn btn-secondary button-style col-4 ${WinShot === 6 ? 'WinShot' : ''}`} style={button2} onClick={() => this.ClickWinShot(6)}>相手のミス</button>
                            <button className={`btn btn-secondary button-style col-4 ${WinShot === 7 ? 'WinShot' : ''}`} style={button4} onClick={() => this.ClickWinShot(7)}>サービスエース</button>
                            <button className={`btn btn-secondary button-style col-4 ${WinShot === 8 ? 'WinShot' : ''}`} style={button2} onClick={() => this.ClickWinShot(8)}>リターンエース</button>
                            <button className={`btn btn-secondary button-style col-4 ${WinShot === 9 ? 'WinShot' : ''}`} style={button5} onClick={() => this.ClickWinShot(9)}>その他</button>
                            {/*<div>idを返す</div>
                            {this.state.WinShot}*/}
                        </div>
                    </div>

                    {/*PointWinボタン*/}
                    <div className='row over-pointwin'>
                        <div className='col-6'>
                            <div className='position-center'>
                                {PointWin1 && <button className='btn btn-secondary default-font-bold' onClick={() => this.Countplayer1()} > Point Win </button>}
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='position-center'>
                                {PointWin2 && <button className='btn btn-secondary default-font-bold' onClick={() => this.Countplayer2()}> Point Win </button>}
                            </div>
                        </div>
                    </div>
                </div>
                {/*カウントが完了した場合に出現するボタン*/}
                {/*<div >
                    {showButton && <button className='btn btn-primary default-font-bold position-center' >試合結果</button>}
                </div>*/}

                <Modal isOpen={this.state.showModal} contentLabel="Result Modal" >
                    <div className='row'>
                        <h2 className='col-6 position-center'>{WinPlayer1 && <div>Win</div>} {LosePlayer1 && <div>Lose</div>}</h2>
                        <h2 className='col-6 position-center'>{WinPlayer2 && <div>Win</div>} {LosePlayer2 && <div>Lose</div>}</h2>
                    </div>
                    <div>
                        <div className='row'>
                            <div className='col-6'>
                                <img className='Win_Lose position-center' src={winImage} alt='Win' />
                            </div>
                            <div className='col-6'>
                                <img className='Win_Lose position-center' src={loseImage} alt='Lose' />
                            </div>
                        </div>
                        <div className='row'>
                            <h3 className='col-6 position-center'>{name1}</h3>
                            <h3 className='col-6 position-center'>{name2}</h3>
                        </div>
                        <div className='row'>
                            <h2 className='col-6'>{this.state.gamecount1}</h2>
                            <h2 className='col-6'>{this.state.gamecount2}</h2>
                        </div>
                        <table className="table table-bordered screen-width">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">{name1}(%)</th>
                                    <th scope="col">{name2}(%)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1stサーブ</th>
                                    <td>{ProbabilityFirstInPlayer1}</td>
                                    <td>{ProbabilityFirstInPlayer2}</td>
                                </tr>
                                <tr>
                                    <th scope="row">2ndサーブ</th>
                                    <td>{ProbabilitySecondInPlayer1}</td>
                                    <td>{ProbabilitySecondInPlayer1}</td>
                                </tr>
                                <tr>
                                    <th scope="row">サービスコース①</th>
                                    <td>{ProbabilityServeCource1Player1}</td>
                                    <td>{ProbabilityServeCource1Player2}</td>
                                </tr>
                                <tr>
                                    <th scope="row">サービスコース②</th>
                                    <td>{ProbabilityServeCource2Player1}</td>
                                    <td>{ProbabilityServeCource2Player2}</td>
                                </tr>
                                <tr>
                                    <th scope="row">サービスコース③</th>
                                    <td>{ProbabilityServeCource3Player1}</td>
                                    <td>{ProbabilityServeCource3Player2}</td>
                                </tr>
                                <tr>
                                    <th scope="row">サービスコース④</th>
                                    <td>{ProbabilityServeCource4Player1}</td>
                                    <td>{ProbabilityServeCource4Player2}</td>
                                </tr>
                                <tr>
                                    <th scope="row">サービスコース⑤</th>
                                    <td>{ProbabilityServeCource5Player1}</td>
                                    <td>{ProbabilityServeCource5Player2}</td>
                                </tr>
                                <tr>
                                    <th scope="row">サービスコース⑥</th>
                                    <td>{ProbabilityServeCource6Player1}</td>
                                    <td>{ProbabilityServeCource6Player2}</td>
                                </tr>
                                <tr>
                                    <th scope="row">リターン返球率</th>
                                    <td>{ProbabilityReturnPlayer1}</td>
                                    <td>{ProbabilityReturnPlayer2}</td>
                                </tr>
                                <tr>
                                    <th scope="row"></th>
                                    <td className='colspan="2"'>ウィニングショット各種</td>
                                </tr>
                                <tr>
                                    <th scope="row">サービスエース</th>
                                    <td>{ProbabilityWinShotServicePlayer1}</td>
                                    <td>{ProbabilityWinShotServicePlayer2}</td>
                                </tr>
                                <tr>
                                    <th scope="row">リターンエース</th>
                                    <td>{ProbabilityWinShotReturnPlayer1}</td>
                                    <td>{ProbabilityWinShotReturnPlayer2}</td>
                                </tr>
                                <tr>
                                    <th scope='row'>ボレー</th>
                                    <td>{ProbabilityWinShotVolleyPlayer1}</td>
                                    <td>{ProbabilityWinShotVolleyPlayer2}</td>
                                </tr>
                                <tr>
                                    <th scope="row">フォアハンド</th>
                                    <td>{ProbabilityWinShotForePlayer1}</td>
                                    <td>{ProbabilityWinShotForePlayer2}</td>
                                </tr>
                                <tr>
                                    <th scope="row">バックハンド</th>
                                    <td>{ProbabilityWinShotBackPlayer1}</td>
                                    <td>{ProbabilityWinShotBackPlayer2}</td>
                                </tr>
                                <tr>
                                    <th scope="row">ドロップ</th>
                                    <td>{ProbabilityWinShotDropPlayer1}</td>
                                    <td>{ProbabilityWinShotDropPlayer2}</td>
                                </tr>
                                <tr>
                                    <th scope="row">スマッシュ</th>
                                    <td>{ProbabilityWinShotSmashPlayer1}</td>
                                    <td>{ProbabilityWinShotSmashPlayer2}</td>
                                </tr>
                                <tr>
                                    <th scope="row">相手のミス</th>
                                    <td>{ProbabilityWinShotErrorPlayer1}</td>
                                    <td>{ProbabilityWinShotErrorPlayer2}</td>
                                </tr>
                                <tr>
                                    <th scope="row">その他</th>
                                    <td>{ProbabilityWinShotEtcPlayer1}</td>
                                    <td>{ProbabilityWinShotEtcPlayer2}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='position-center'>
                            <button className='btn btn-primary default-font-bold' onClick={this.handleCloseModal}>閉じる</button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default OneSetMatch;