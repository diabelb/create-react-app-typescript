import * as React from 'react';
import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '@App/store';
const logo = require('./logo.svg');
interface AppProps {

}

class App extends React.Component<AppProps> {
  public render() {
    return (
      <ConnectedRouter history={history}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
