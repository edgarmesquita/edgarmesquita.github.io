import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { store } from './store/configureStore';
import { Provider } from 'react-redux';
import { createMuiTheme } from "@material-ui/core/styles";
import {
    MuiThemeProvider,
    CssBaseline,
} from "@material-ui/core";
import HomeView from './views/HomeView';


const theme = createMuiTheme({
    palette: {
        type: "dark",
        background: {
            default: "#353353"
        },
        primary: {
            main: "#353353",
            dark: "#FFF"
        }
    },
    typography: {
        fontFamily: '"Rubik",sans-serif',
        h1: {
            fontSize: '2.3em',
            fontWeight: 700,
        },
        h2: {
            fontSize: '2.1em',
        },
        h3: {
            fontSize: '2em',
        },
        h4: {
            fontSize: '1.8em',
        },
        h5: {
            fontSize: '1.6em',
        },
        h6: {
            fontSize: '1.4em',
        }
    }
});
const App = () => {

    return (
        <Provider store={store}>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <Switch>
                    <Route exact={true} path='/' component={HomeView} />
                </Switch>
            </MuiThemeProvider>
        </Provider>
    );

}

export default App;