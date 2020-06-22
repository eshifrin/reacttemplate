import React from 'react';
import TemplateApp from './components/TemplateApp/TemplateApp';
import TemplateForm from './components/TemplateForm/TemplateForm'
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TemplateApp />
        </Route>
        <Route exact path="/form">
          <TemplateForm />
        </Route>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
