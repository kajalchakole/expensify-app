import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            description: props.expense ? props.expense.description: '',
            note: props.expense ? props.expense.note :'',
            amount: props.expense? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            errorState: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({ amount }));
        }
    };

    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({ createdAt }));
        }
    };

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onSubmit = (e) => {
        e.preventDefault(); //to avoid form refresh

        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({
                errorState: 'Please provide description and amount.'
            }));
        }else {
            this.setState(() => ({ errorState:''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    };

    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.errorState && <p className="form__error">{this.state.errorState}</p>}
                <input 
                    type="text"
                    placeholder="Description"
                    autoFocus
                    className="text-input"
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input 
                    type="text"
                    placeholder="Amount"
                    className="text-input"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
                <textarea 
                    className="text-area"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    placeholder="Add a note for your expense (Optional)">
                </textarea>
                <div>
                    <button className="button">Save Expense</button>
                </div>
            </form>
        )
    };
};