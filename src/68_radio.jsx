import { useState } from 'react';

const Radio = () => {
    const [selectedNumber, setSelectedNumber] = useState('1');
    const [language, setLanguage] = useState('JavaScript');

    return (
        <div>
            <p>Выберите число:</p>
            {['1', '2', '3'].map((number) => (
                <label key={number}>
                    <input type="radio" name="number" value={number} checked={selectedNumber === number} onChange={(e) => setSelectedNumber(e.target.value)} />
                    {number}
                </label>
            ))}
            <p>Выбранное число: {selectedNumber}</p>

            <p>Выберите любимый язык программирования:</p>
            {['JavaScript', 'Python', 'C#'].map((item) => (
                <label key={item}>
                    <input
                        type="radio"
                        name="language"
                        value={item}
                        checked={language === item}
                        onChange={(e) => setLanguage(e.target.value)}
                    />
                    {item}
                </label>
            ))}
            <p>Ваш любимый язык: {language}</p>
            {language === 'JavaScript' && <p>Отличный выбор!</p>}
        </div>
    );
};

export default Radio;
