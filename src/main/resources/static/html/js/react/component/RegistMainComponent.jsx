// 登録制御用コンポーネント
class RegistMainComponent extends React.Component {
	// コンストラクタ
	constructor(props) {
		super(props);
		this.onConfirm = this.onConfirm.bind(this);
		this.onRegist = this.onRegist.bind(this);
		this.onBackInput = this.onBackInput.bind(this);
        this.onBackHome = this.onBackHome.bind(this);
		this.state= {
			params: {
				userName : '',
				fromDate : '',
				toDate   : '',
				content  : ''
			},
			type: 'input',
			title: '登録画面'
		};

	}

	// ブラウザの戻る対応
	componentDidMount() {
		// history.pushStateで履歴制御しているので、
		// それに応するonpopstateイベントに対して戻るボタンの処理を当てている。
		//
		// ReactRouterのhistoryを使うとコンストラクタが呼ばれるためステートが初期化されてしまう。。
		// 解決策は見つかっていないが何かしらのケアが必要。
		window.onpopstate = this.onBackInput;
	}

	// 確認ボタン押下時のイベント
	onConfirm(params) {
	   // for debug
	   // alert('子コンポーネントの確認ボタンが押されました');
		var {BrowserRouter, Route, Link} = window.ReactRouterDOM;
		history.pushState(null,null,'/top/hokoku/regist/confirm');
		this.setState({
			params: {
				userName: params.userName,
                fromDate: params.fromDate,
                toDate: params.toDate,
                content: params.content
			},
			type: 'confirm',
			title: '登録確認画面'
		});
	}

	// 登録ボタン押下時のイベント
	onRegist() {
	   // for debug
	   // alert('子コンポーネントの登録ボタンが押されました' );

		var test;

		var url = "/top/hokoku/regist/blogic";
		fetch(url, {
	       method: 'post',
  	       headers: {
  	         'Content-Type': 'application/json'
  	       },
  	       body: JSON.stringify({
  	         userName: this.state.params.userName,
  	         fromDate: this.state.params.fromDate,
             toDate: this.state.params.toDate,
             content: this.state.params.content
  	       })
		}).then(res => {
	       return res.json();
		}).then(json => {
		  // for debug
		  // alert('msg=' + json.msg);

		})


		history.pushState(null,null,'/top/hokoku/regist/complete');
		this.setState({
			type: 'complete',
			title: '登録完了画面'
		});
	}

    // 戻るボタン押下時のイベント
    onBackInput() {
       // for debug
       // alert('戻ります');
        history.pushState(null,null,'/top/houkoku/regist');
        this.setState({
            type: 'input'
        });
    }

	// 戻るボタン押下時のイベント
	onBackHome() {
	   // for debug
	   // alert('戻ります');
		history.pushState(null,null,'/top');
		this.setState({
			type: 'home'
		});
	}

	render() {

		switch(this.state.type) {
		case 'input' :
			{/* 登録フォーム画面 */}
			return(
			    <RegistFormComponent title={this.state.title} params={this.state.params} onConfirm={this.onConfirm} ref='registForm'/>
			);
		case 'confirm' :
			{/* 登録確認画面 */}
			return(
                <RegistConfirmComponent title={this.state.title} params={this.state.params} onRegist={this.onRegist} onBackInput={this.onBackInput}/>
			);
		case 'complete' :
			{/* 登録完了画面 */}
			return(
				<RegistCompletedComponent title={this.state.title} params={this.state.params}  onBackHome={this.onBackHome}/>
			);
        case 'home' :
            {/* ホーム画面 */}
             return(
                  <HomeComponent />
             );
		default :
		}
	}
}