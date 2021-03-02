import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import getVisibleExpenses from "./selectors/expenses";
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';
// import './playground/promises';

const store = configureStore();
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){        
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>    
);

ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'));



firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
            if(history.location.pathname === '/') {
                history.push('/dashboard');
            }
        });
    }else {
        renderApp();
        // history.push('/');
    }
});