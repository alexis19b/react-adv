import { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, NavLink, Redirect } from "react-router-dom";

import { routes } from "../01-lazyload/routes/routes";
import logo from "../logo.svg";

export const Navigation = ()=> { 
  return (
    <Suspense fallback={<span>Loading...</span>}>
      
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            {
              routes.map((route)=> (
                <li key={route.id}>
                  <NavLink 
                    activeClassName="nav-active" 
                    exact 
                    to={route.path}>
                    {route.name}
                  </NavLink>
                </li>        
              ))
            }
          </ul>
        </nav>

        <Switch>
        {
          routes.map(({id, path, component: Component})=> (
            <Route
              key={id} 
              path={path}
              render={()=> <Component /> }
            />
          ))
        }
        <Redirect to={routes[0].path} />      
        </Switch>
      </div>
    </Router>
    </Suspense>
  );
}
