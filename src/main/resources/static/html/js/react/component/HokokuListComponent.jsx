// 登録制御用コンポーネント
class HokokuListComponent extends React.Component {
	// コンストラクタ
	constructor(props) {
		super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
	}

	componentDidMount() {

      var lists;
      var len

      var url = "/top/hokoku/list/blogic";
      fetch(url, {
         method: 'get',
         dataType: 'json'
      }).then(res => res.json())
      .then((result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )

    }

	render() {

      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
        <div id="wrapper" style={{textAlign: 'left'}}>
            <legend>作業報告　一覧</legend>
            <br />
            {/* render()内でパラメータをセットする場合 */}
            <table className="table table-hover table-striped">
                <thead>
                    <tr>
                      <th scope="col">ユーザ名</th>
                      <th scope="col">作業開始日</th>
                      <th scope="col">作業終了日</th>
                      <th scope="col">作業内容</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                      <tr>
                        <td>{item.userName}</td>
                        <td>{item.fromDate}</td>
                        <td>{item.toDate}</td>
                        <td>
                          <textarea style={{borderWidth: '0',backgroundColor: 'transparent' }} rows="20" cols="100" defaultValue={item.content} />
                        </td>
                      </tr>
                    ))}

                </tbody>
            </table>
        </div>
        );
      }
    }
}