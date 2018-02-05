var {withRouter, BrowserRouter, Route, NavLink} = window.ReactRouterDOM;
var registMainComponent = RegistMainComponent;
var homeComponent = HomeComponent;
var hokokuListComponent = HokokuListComponent;
ReactDOM.render(
	(<div>
		{/* React-Routerで制御 */}
		<BrowserRouter>
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			  <a className="navbar-brand" href="#">Navbar</a>
			  <button className="navbar-toggler" aria-expanded="false" aria-controls="navbarColor01" aria-label="Toggle navigation" type="button" data-target="#navbarColor01" data-toggle="collapse">
			    <span className="navbar-toggler-icon"></span>
			  </button>
			  <div className="collapse navbar-collapse" id="navbarColor01">
			    <ul className="navbar-nav mr-auto">
			      <li className="nav-item active">
			        <NavLink className="nav-link" to='/top'>Home</NavLink>
			      </li>
			      <li className="nav-item">
  			      <NavLink className="nav-link" to='/top/hokoku/regist'>作業報告</NavLink>
			      </li>
			      <li className="nav-item">
			      <NavLink className="nav-link" to='/top/hokoku/list'>作業一覧</NavLink>
			      </li>
			    </ul>
			  </div>
			</nav>

			<Route exact path="/top/hokoku/regist" component={registMainComponent} />
			<Route exact path="/top/hokoku/list" component={hokokuListComponent} />
			<Route exact path="/top" component={homeComponent} />
		</div>
		</BrowserRouter>
		<br />
		<FooterComponent />
	</div>)
	,document.getElementById('container')
)

