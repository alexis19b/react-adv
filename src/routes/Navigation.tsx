import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import { LazyPage1 } from "../01-lazyload/pages/LazyPage1";
import { LazyPage2 } from "../01-lazyload/pages/LazyPage2";
import { LazyPage3 } from "../01-lazyload/pages/LazyPage3";
import logo from "../logo.svg";

export const Navigation = ()=> { 
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink activeClassName="nav-active" exact to="/lazy1">Lazy1</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" exact to="/lazy2">Lazy2</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" exact to="/lazy3">Lazy3</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/lazy1">
            <LazyPage1 />
          </Route>
          <Route path="/lazy2">
          <LazyPage2 />
          </Route>
          <Route path="/lazy3">
          <LazyPage3 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
