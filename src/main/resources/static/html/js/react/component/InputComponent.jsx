class InputComponent extends React.Component {
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

	onClick(props) {
		//alert('start onClickEvent\r\n beforeState:' + props.State);

		// this.state = {
		// 	login : props.id + 'をクリックしました！'
		// };

		//this.props.updateState(this.state);

		//alert('end onClickEvent\r\n afterState:' + props.State);
	}

	render() {
		return (
			<div>
				<input className={this.props.class} type={this.props.type} id={this.props.id} name={this.props.name} value={this.state.value} placeholder={this.props.placeholder} onChange={this.handleChange}/>
				{/* {this.state.count}文字入力されました。 */}
			</div>
		)
	}
}
