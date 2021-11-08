import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import logo from "../logo.svg";

export const Navigation = ()=> {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink activeClassName="nav-active" exact to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" exact to="/about">About</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" exact to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/users">
            <h1>Users</h1>
          </Route>
          <Route path="/home">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
