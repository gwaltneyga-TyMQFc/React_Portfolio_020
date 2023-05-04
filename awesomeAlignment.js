const { BrowserRouter, Route, NavLink, Switch } = ReactRouterDOM;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>My Portfolio</h1>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="active">About</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/resume" activeClassName="active">Resume</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route path="/resume" component={Resume} />
        </Switch>
        <footer>
          <p>Connect with me on:</p>
          <ul>
            <li><a href="https://github.com/gwaltneyga-TyMQFc">GitHub</a></li>
            <li><a href="https://www.https://www.linkedin.com/in/gregory-gwaltney-a77274255/">LinkedIn</a></li>
            <li><a href="https://twitter.com/mytwitter">Twitter(Coming Soon)</a></li>
          </ul>
        </footer>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));