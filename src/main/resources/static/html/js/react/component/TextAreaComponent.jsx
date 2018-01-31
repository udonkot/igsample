class TextAreaComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count:this.props.value.length,
			value:this.props.value
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			count: event.target.value.length,
			value: event.target.value
		});
	}

	render() {
		return (
			<div>
				<textarea className={this.props.class} id={this.props.id} name={this.props.name} value={this.state.value} placeholder={this.props.placeholder} onChange={this.handleChange}  rows={this.props.rows} cols={this.props.cols}/>
				{/* {this.state.count}文字入力されました。 */}
			</div>
		)
	}
}
