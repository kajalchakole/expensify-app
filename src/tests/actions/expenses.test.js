import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('Should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New Note value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New Note value'
        }
    });
});

test('Should setup add expense action object with provided values', () => {
    const expenseData = { 
        description: 'note',
        note: 'Last month note',
        amount: 109500,
        createdAt: 1000
    };
    const action = addExpense(expenseData);

    expect(action).toEqual({
        
    type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });

});

test('should setup add expense action object with default values', () => {
    const expenseData = { 
        description: '',
        note: '',
        amount: 109500,
        createdAt: 1000
    };

    const action = addExpense();

    expect(action).toEqual({        
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),            
            description: '',
            note: '',
            amount: 0,
            createdAt: 0            
        }
    });

});