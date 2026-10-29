import { useState } from 'react';

const ReactiveArrayAdd = () => {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
    const [inputValue, setInputValue] = useState('');

    const addNumber = () => {
        setNotes((currentNotes) => [...currentNotes, currentNotes.length + 1]);
    };

    const addNote = () => {
        if (!inputValue.trim()) return;
        setNotes((currentNotes) => [...currentNotes, inputValue]);
        setInputValue('');
    };

    return (
        <div>
            <ul>
                {notes.map((note, index) => (
                    <li key={index}>{note}</li>
                ))}
            </ul>
            <button onClick={addNumber}>Добавить элемент</button>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={addNote}>Добавить текст</button>
        </div>
    );
};

export default ReactiveArrayAdd;
