class Question2Component extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
          isEnter: "未送信",
          uploadFile: [],
          response: null
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(evnet) {
//      var uploadFile = event.target.files;
//      this.setState({
//        uploadFile: uploadFile
//      });

    }

    onSubmit(event) {

      var url = "/top/question/2/blogic";

      var formData = new FormData();
      formData.append('file', event.target.form.uploadFile.files[0]);
alert("start ajax");
      fetch(url,
        {
          method: 'post',
          body: formData
        }
      ).then(res => res.json())
      .then((result) => {
        this.setState({
          isEnter: "送信",
          response: result.response,
          params: {
            uploadFile:  uploadFile
          }
        });
      },
      (error) => {
        this.setState({
          isEnter: "エラー",
          error
        });
      });

    }

	render() {

        // パラメータセット
        var form     = {id:"questionForm", action:"#", method:"post"};
        var uploadFile  = {type:"file", id:"uploadFile", name:"uploadFile", placeholder:"", class:"form-text "};
        var confirmButton = {type:"button", id:"confirmButton", name:"confirmButton", value:"送信"};

      const { error, isEnter, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if(this.state.response == null) {
        return (
            <div id="wrapper" style={{textAlign: 'left'}}>
                <legend>Question2</legend>
                <br />
                状態：未送信
                <br />
                <CardComponent header="AWS S3 + DynamoDB" cardTitle="csvアップロード＋インポート" cardText="この画面から送られたファイルを使用してAWS S3へアップロードし、csvデータをDynamoDBのテーブルへ登録するJavaプログラムを実装してください" />
                {/* render()内でパラメータをセットする場合 */}
                <form id={form.id} method={form.method} action={form.action} >
                <fieldset>
                <table className="table table-hover table-striped">
                  <tbody>
                      <tr className="table-light">
                        <th scope="row"><label className="control-label">ファイルパス</label></th>
                        <td>
                          <input type={uploadFile.type} id={uploadFile.id} name={uploadFile.name} onChange={this.onChange} className={uploadFile.class} />
                        </td>
                      </tr>
                  </tbody>
                </table>
                <button className="btn btn-primary btn-block" type={confirmButton.type} id={confirmButton.id} name={confirmButton.name} onClick={this.onSubmit}>{confirmButton.value}</button>
                </fieldset>
                </form>
            </div>
          );
      } else {
        return (
            <div id="wrapper" style={{textAlign: 'left'}}>
                <legend>Question2</legend>
                <br />
                状態：送信
                <br />
                <CardComponent header="AWS S3 + DynamoDB" cardTitle="csvアップロード＋インポート" cardText="この画面から送られたファイルを使用してAWS S3へアップロードし、csvデータをDynamoDBのテーブルへ登録するJavaプログラムを実装してください" />
                {/* render()内でパラメータをセットする場合 */}
                <table className="table table-hover table-striped">
                  <tbody>
                      <tr className="table-light">
                        <th scope="row"><label className="control-label">ファイルパス</label></th>
                        <td>
                          <InputComponent type={fileName.type} id={fileName.id} name={fileName.name} value={this.state.params.fileName} placeholder={fileName.placeholder} className={fileName.class} />
                        </td>
                      </tr>
                      <tr className="table-light">
                        <th scope="row"><label className="control-label">結果</label></th>
                        <td>{this.state.response}</td>
                      </tr>
                  </tbody>
                </table>
            </div>
          );

      }
	}
}
