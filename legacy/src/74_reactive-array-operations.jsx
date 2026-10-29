import { useState } from 'react';

const ReactiveArrayOperations = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    const [notes, setNotes] = useState(['Текст 1', 'Текст 2', 'Текст 3']);
    const [activeIndex, setActiveIndex] = useState(null);
    const [inputValue, setInputValue] = useState('');

    const squareNumber = (index) => {
        setNumbers((currentNumbers) =>
            currentNumbers.map((number, currentIndex) =>
                currentIndex === index ? number * number : number
            )
        );
    };

    const removeNumber = (index) => {
        setNumbers((currentNumbers) => currentNumbers.filter((_, currentIndex) => currentIndex !== index));
    };

    const editNote = (index) => {
        setActiveIndex(index);
        setInputValue(notes[index]);
    };

    const saveNote = () => {
        if (activeIndex === null) return;
        setNotes((currentNotes) =>
            currentNotes.map((note, index) => (index === activeIndex ? inputValue : note))
        );
        setActiveIndex(null);
    };

    return (
        <div>
            <ul>
                {numbers.map((number, index) => (
                    <li key={index} onClick={() => squareNumber(index)}>
                        {number}
                        <button onClick={(e) => { e.stopPropagation(); removeNumber(index); }}>
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>

            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={saveNote}>Сохранить текст</button>
            <ul>
                {notes.map((note, index) => (
                    <li key={index} onClick={() => editNote(index)}>{note}</li>
                ))}
            </ul>

            <button onClick={() => setNotes((currentNotes) => [...currentNotes].reverse())}>
                Перевернуть порядок
            </button>
        </div>
    );
};

export default ReactiveArrayOperations;
