import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

const expenseOne = store.dispatch(addExpense({
    description:'Water Bill',
    amount: 100,
    createdAt: 1000
}));

store.dispatch(addExpense({
    description:'Gas Bill',
    amount: 500,
    createdAt: 5000
}));


store.dispatch(setTextFilter('wat'));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById('app'));