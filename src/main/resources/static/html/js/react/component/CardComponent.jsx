class CardComponent extends React.Component {
	constructor(props) {
        super(props);
    }

	render() {
        return (
          <div className="card text-white bg-info mb-3" style={{maxWidth: '30rem'}}>
            <div className="card-header">{this.props.header}</div>
            <div className="card-body">
              <h4 className="card-title">{this.props.cardTitle}</h4>
              <p className="card-text">{this.props.cardText}</p>
            </div>
          </div>
        );
	}
}
