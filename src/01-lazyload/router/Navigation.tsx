import { Link, useRouteMatch, Switch, Route, Redirect } from "react-router-dom"
import LazyPage1 from "../pages/LazyPage1";
import LazyPage2 from "../pages/LazyPage2";
import LazyPage3 from "../pages/LazyPage3";

export const Navigation = () => {
 const { path, url } = useRouteMatch();
  return (
    <>
      <h2>LazyLayout Pages</h2>
      <ul>
        <li>
          <Link to={`${ url }/lazy1`}>Lazy page 1</Link>
        </li>
        <li>
          <Link to={`${ url }/lazy2`}>Lazy page 2</Link>
        </li>
        <li>
          <Link to={`${ url }/lazy3`}>Lazy page 3</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${path}/lazy1`} >
          <LazyPage1 />
        </Route>
        <Route exact path={`${path}/lazy2`} >
          <LazyPage2 />
        </Route>
        <Route exact path={`${path}/lazy3`} >
          <LazyPage3 />
        </Route>
        
        <Redirect to={`${path}/lazy1`} /> 
      </Switch>
    </>
  )
}
