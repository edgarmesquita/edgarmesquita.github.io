import * as React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
// import createHistory from 'history/createBrowserHistory';
import { Provider } from './store';
import HomeView from './views/HomeView';
import VendasView from './views/VendasView';
import './scss/style.css';

// const history = createHistory({
//     basename: process.env.PUBLIC_URL,
// });

export default class App extends React.Component {
    public render() {
        return (
            <Provider>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <Route exact={true} path='/' component={HomeView} />
                        <Route exact={true} path='/vendas' component={VendasView} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    }
}