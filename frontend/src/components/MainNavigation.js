import { NavLink, Form, useRouteLoaderData } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import NewsletterSignup from "./NewsletterSignup";

function MainNavigation() {
  const token = useRouteLoaderData("root");

  let authActionBtn = (
    <NavLink
      to="/auth?mode=login"
      className={({ isActive }) => (isActive ? classes.active : undefined)}
    >
      Authenticate
    </NavLink>
  );

  if (token) {
    authActionBtn = (
      <Form method="POST" action="/logout">
        <button style={{ cursor: "pointer" }}>Logout</button>
      </Form>
    );
  }

  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newsletter"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Newsletter
            </NavLink>
          </li>
          <li>{authActionBtn}</li>
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
