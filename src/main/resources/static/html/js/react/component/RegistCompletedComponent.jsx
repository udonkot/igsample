// 登録完了用コンポーネント
class RegistCompletedComponent extends React.Component {
	constructor(props) {
		super(props);
		this.onBackHome = this.onBackHome.bind(this);
	}

	onBackHome() {
		this.props.onBackHome();
	}

	render() {

		// パラメータセット
        var form     = {id:"registForm", action:"#", method:"post"};
		var backButton = {type:"button", id:"backtButton", name:"backButton", value:"ホームに戻る"};
		return(
			<div id="wrapper" style={{textAlign: 'left'}}>
				<legend>作業報告　入力完了</legend>
				<br />
				登録完了しました。
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
				<br />
				<button type={backButton.type} id={backButton.id} name={backButton.name} onClick={this.onBackHome}>{backButton.value}</button>
				</fieldset>
				</form>
			</div>
		);
	}
}