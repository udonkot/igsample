// 登録確認用コンポーネント
class RegistConfirmComponent extends React.Component {
	constructor(props) {
		super(props);
		this.onRegist = this.onRegist.bind(this);
		this.onBackInput = this.onBackInput.bind(this);
	}

	// 登録ボタン押下時のイベント
	// 親コンポーネントへ処理を委譲
	onBackInput() {
		this.props.onBackInput();
	}

	// 戻るボタン押下時のイベント
	// 親コンポーネントへ処理を委譲
	onRegist(event) {
		this.props.onRegist();
	}


	render() {

		// パラメータセット
		var form     = {id:"registForm", action:"#", method:"post"};
		var registButton = {type:"button", id:"registButton", name:"registButton", value:"登録"};
		var backButton = {type:"button", id:"backtButton", name:"backButton", value:"戻る"};

		return(
			<div id="wrapper" style={{textAlign: 'left'}}>
                <legend>作業報告　入力確認</legend>
                <br />
				<form id={form.id} method={form.method} action={form.action} >
                <fieldset>
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                          <th scope="col">項目</th>
                          <th scope="col">入力</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="table-light">
                          <th scope="row"><label className="control-label">ユーザ名</label></th>
                          <td><label htmlFor="userName">{this.props.params.userName}</label></td>
                        </tr>
                        <tr className="table-light">
                          <th scope="row"><label className="control-label">作業期間(From～To)</label></th>
                          <td>
                            <label htmlFor='fromDate'>{this.props.params.fromDate}</label>
                            ～
                            <label htmlFor='userName'>{this.props.params.toDate}</label>
                          </td>
                        </tr>
                        <tr className="table-light">
                          <th scope="row"><label className="control-label">作業内容</label></th>
                          <td><textarea style={{borderWidth: '0',backgroundColor: 'transparent' }} rows="20" cols="100" defaultValue={this.props.params.content} /></td>
                        </tr>
                    </tbody>
                </table>

                <button className="btn btn-primary btn-block" type={registButton.type} id={registButton.id} name={registButton.name} onClick={this.onRegist}>{registButton.value}</button>
                <button className="btn btn-primary btn-block" type={backButton.type} id={backButton.id} name={backButton.name} onClick={this.onBackInput}>{backButton.value}</button>
                </fieldset>
				</form>
			</div>
		);
	}
}