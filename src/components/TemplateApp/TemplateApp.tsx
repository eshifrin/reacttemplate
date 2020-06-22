import React from "react";
import { Counter } from "../Counter/Counter"
import Table from "../Table/Table"
import logo from '../../logo.svg';

export default function TemplateApp() {
return (
  <div className="App">
    <header>
      <h1>Template App</h1>
    </header>
    <main>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <Table/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </div>
    </main>

  </div>)
}
