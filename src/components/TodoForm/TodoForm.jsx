import './style.scss';

// * React
import React, {useState} from 'react';

function TodoForm({addTodo}) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!inputValue.trim()) return;
        addTodo(inputValue);
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                placeholder='Enter a new task'
            />
            <button type='submit'>Add new task</button>
      </form>
    );

}

export default TodoForm;