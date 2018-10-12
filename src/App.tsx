import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Provider } from './store';
import HomeView from './views/HomeView';
import VendasView from './views/VendasView';
import './css/style.css';
export default class App extends React.Component {
    public render() {
        return (
            <Provider>
                <Switch>
                    <Route exact={true} path='/' component={HomeView} />
                    <Route exact={true} path='/vendas' component={VendasView} />
                </Switch>
            </Provider>
        );
    }
}