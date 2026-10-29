import { useState } from 'react';

const ReactiveObjectArrayAdd = () => {
    const [notes, setNotes] = useState([
        { id: 'note-1', prop1: 'value11', prop2: 'value12', prop3: 'value13' },
        { id: 'note-2', prop1: 'value21', prop2: 'value22', prop3: 'value23' },
        { id: 'note-3', prop1: 'value31', prop2: 'value32', prop3: 'value33' },
    ]);
    const [inputValues, setInputValues] = useState(['', '', '']);

    const addNote = () => {
        const id = `note-${Date.now()}`;
        setNotes((currentNotes) => [
            ...currentNotes,
            { id, prop1: `value${currentNotes.length + 1}1`, prop2: `value${currentNotes.length + 1}2`, prop3: `value${currentNotes.length + 1}3` },
        ]);
    };

    const changeInput = (index, value) => {
        setInputValues((currentValues) =>
            currentValues.map((currentValue, currentIndex) => currentIndex === index ? value : currentValue)
        );
    };

    const addNoteFromInputs = () => {
        if (inputValues.some((value) => !value.trim())) return;
        setNotes((currentNotes) => [
            ...currentNotes,
            { id: `note-${Date.now()}`, prop1: inputValues[0], prop2: inputValues[1], prop3: inputValues[2] },
        ]);
        setInputValues(['', '', '']);
    };

    return (
        <div>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>
                        <span>{note.prop1}</span>{' '}
                        <span>{note.prop2}</span>{' '}
                        <span>{note.prop3}</span>
                    </li>
                ))}
            </ul>
            <button onClick={addNote}>Добавить элемент</button>
            {inputValues.map((value, index) => (
                <input
                    key={index}
                    value={value}
                    onChange={(e) => changeInput(index, e.target.value)}
                />
            ))}
            <button onClick={addNoteFromInputs}>Добавить из инпутов</button>
        </div>
    );
};

export default ReactiveObjectArrayAdd;
