import React from 'react';
import { connect } from "react-redux";
import ExpenseForm from './ExpenseForm';
import { editExpense } from "../actions/expenses";
import expenses from '../reducers/expenses';

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm 
                onSubmit={(expense) => {
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
                expense={props.expense}
            />
        </div>
        )
    };

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
};

export default connect(mapStateToProps)(EditExpensePage);