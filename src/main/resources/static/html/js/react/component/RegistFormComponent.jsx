// 登録用コンポーネント
class RegistFormComponent extends React.Component {
	constructor(props) {
		super(props);
		this.onConfirm = this.onConfirm.bind(this);
	}

	// 確認ボタン押下時のイベント
	// 親コンポーネントへ入力パラメータを渡して処理を委譲
	onConfirm(event) {
	   // for debug
	   // alert(event.target.form.content.value);

		var params = {
			userName : event.target.form.userName.value,
            fromDate : event.target.form.fromDate.value,
            toDate : event.target.form.toDate.value,
            content : event.target.form.content.value
		};
		this.props.onConfirm(params);
	}

	render() {

        // パラメータセット
        var form     = {id:"registForm", action:"#", method:"post"};
        var userName   = {type:"text", id:"userName", name:"userName", placeholder:"ユーザ名", class:"form-text "};
        var fromDate   = {type:"text", id:"fromDate", name:"fromDate", placeholder:"from", class:"form-text "};
        var toDate     = {type:"text", id:"toDate", name:"toDate", placeholder:"to", class:"form-text "};
        var content    = {type:"text", id:"content", name:"content", placeholder:"", class:"form-control", rows:"20", cols:"100"};
        var confirmButton = {type:"button", id:"confirmButton", name:"confirmButton", value:"確認"};

        return(
            <div id="wrapper" style={{textAlign: 'left'}}>
                <legend>作業報告　入力</legend>
                <br />
                {/* render()内でパラメータをセットする場合 */}
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
                          <td><InputComponent type={userName.type} id={userName.id} name={userName.name} value={this.props.params.userName} placeholder={userName.placeholder} className={userName.class} /></td>
                        </tr>
                        <tr className="table-light">
                          <th scope="row"><label className="control-label">作業期間(From～To)</label></th>
                          <td>
                            <InputComponent type={fromDate.type} id={fromDate.id} name={fromDate.name} value={this.props.params.fromDate} placeholder={fromDate.placeholder} className={fromDate.class} />
                            ～
                            <InputComponent type={toDate.type} id={toDate.id} name={toDate.name} value={this.props.params.toDate} placeholder={toDate.placeholder} className={toDate.class}/>
                          </td>
                        </tr>
                        <tr className="table-light">
                          <th scope="row"><label className="control-label">作業内容</label></th>
                          <td><TextAreaComponent cols={content.cols} className={content.class} id={content.id} rows={content.rows} value={this.props.params.content} /></td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn btn-primary btn-block" type={confirmButton.type} id={confirmButton.id} name={confirmButton.name} onClick={this.onConfirm}>{confirmButton.value}</button>
                </fieldset>
                </form>
            </div>
        );
	}
}