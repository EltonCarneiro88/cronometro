import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Screen_Cronometro from './Screen_Cronometro';
import Screen_Relogio from './Screen_Relogio';
import Screen_Temporizador from './Screen_Temporizador';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
			<Switch>
				<Route path="/" exact={true} component={Screen_Cronometro} />
        <Route path="/Relogio" component={Screen_Relogio} />
        <Route path="/Temporizador" component={Screen_Temporizador} />
			</Switch>
		</BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
