class Question1Component extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
          isEnter: "未送信",
          params: {
            bucketName: "",
            fileName: ""
          },
          response: null
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {

      var url = "/top/question/1/blogic";
      var bucketName = event.target.form.bucketName.value;
      var fileName = event.target.form.fileName.value;
      fetch(url,
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            param1: bucketName,
            param2: fileName
          })
        }
      ).then(res => res.json())
      .then((result) => {
        this.setState({
          isEnter: "送信",
          response: result.response,
          params: {
            bucketName:  bucketName,
            fileName:  fileName
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
        var bucketName   = {type:"text", id:"bucketName", name:"bucketName", placeholder:"バケット名", class:"form-text "};
        var fileName  = {type:"text", id:"fileName", name:"fileName", placeholder:"from", class:"form-text "};
        var confirmButton = {type:"button", id:"confirmButton", name:"confirmButton", value:"送信"};

      const { error, isEnter, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if(this.state.response == null) {
        return (
            <div id="wrapper" style={{textAlign: 'left'}}>
                <legend>Question1</legend>
                <br />
                状態：未送信
                <br />
                <CardComponent header="AWS S3" cardTitle="ファイルダウンロード" cardText="この画面から送られたバケット名、ファイル名を使用してAWS S3から該当ファイルを取得し、ファイル内容をレスポンスデータとして返すJavaプログラムを実装してください" />
                {/* render()内でパラメータをセットする場合 */}
                <form id={form.id} method={form.method} action={form.action} >
                <fieldset>
                <table className="table table-hover table-striped">
                  <tbody>
                      <tr className="table-light">
                        <th scope="row"><label className="control-label">バケット名</label></th>
                        <td><InputComponent type={bucketName.type} id={bucketName.id} name={bucketName.name} value={this.state.params.bucketName} placeholder={bucketName.placeholder} className={bucketName.class} /></td>
                      </tr>
                      <tr className="table-light">
                        <th scope="row"><label className="control-label">ファイル名</label></th>
                        <td>
                          <InputComponent type={fileName.type} id={fileName.id} name={fileName.name} value={this.state.params.fileName} placeholder={fileName.placeholder} className={fileName.class} />
                        </td>
                      </tr>
                      <tr className="table-light">
                        <th scope="row"><label className="control-label">ファイル内容</label></th>
                        <td>{this.state.response}</td>
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
                <legend>Question1</legend>
                <br />
                状態：送信
                <br />
                <CardComponent header="AWS S3" cardTitle="ファイルダウンロード" cardText="この画面から送られたバケット名、ファイル名を使用してAWS S3から該当ファイルを取得し、ファイル内容をレスポンスデータとして返すJavaプログラムを実装してください" />
                {/* render()内でパラメータをセットする場合 */}
                <table className="table table-hover table-striped">
                  <tbody>
                      <tr className="table-light">
                        <th scope="row"><label className="control-label">バケット名</label></th>
                        <td><InputComponent type={bucketName.type} id={bucketName.id} name={bucketName.name} value={this.state.params.bucketName} placeholder={bucketName.placeholder} className={bucketName.class} /></td>
                      </tr>
                      <tr className="table-light">
                        <th scope="row"><label className="control-label">ファイル名</label></th>
                        <td>
                          <InputComponent type={fileName.type} id={fileName.id} name={fileName.name} value={this.state.params.fileName} placeholder={fileName.placeholder} className={fileName.class} />
                        </td>
                      </tr>
                      <tr className="table-light">
                        <th scope="row"><label className="control-label">ファイル内容</label></th>
                        <td>{this.state.response}</td>
                      </tr>
                  </tbody>
                </table>
            </div>
          );

      }
	}
}
