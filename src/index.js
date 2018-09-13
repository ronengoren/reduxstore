import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './routes/Header';
// import NoteDetail from './components/NoteDetail';
import NoteEdit from './components/NoteEdit';
import './styles/index.css';

// create redux store -> reducers -> 'actions - actionType' | applyMiddleware()

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// provide the store to react

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>

            <div>
                <Header />

                <Switch>
                    {/* <Route path="/login" component={Login} exact={true} /> */}
                    {/* <AuthenticatedComponent> */}
                    {/* <Route path="/" component={NoteEdit} /> */}
                    {/* <Route path="/:id" component={NoteDetail} exact={true} /> */}
                    <Route path="/" component={App} exact={true} />
                    {/* </AuthenticatedComponent> */}
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();