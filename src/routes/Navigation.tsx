import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import logo from "../logo.svg";
import { FormikAbstractation, FormikBasicPage, FormikCompoenents, FormikYupPage, RegisterPage } from '../03-forms/pages'

export const Navigation = () => {
  return (
    <Router>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink activeClassName="nav-active" exact to="/register">Register Page</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" exact to="/formik-basic">Formik Basic</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" exact to="/formik-yup">Formik Yup</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" exact to="/formik-components">Formik Components</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" exact to="/formik-abstractation">Formik Abstractation</NavLink>
            </li>
            <li>
              <NavLink activeClassName="nav-active" exact to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/formik-basic">
            <FormikBasicPage />
          </Route>
          <Route path="/formik-yup">
            <FormikYupPage />
          </Route>
          <Route path="/formik-components">
            <FormikCompoenents />
          </Route>
          <Route path="/formik-abstractation">
            <FormikAbstractation />
          </Route>
          <Route path="/home">
            <h1>Home</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
