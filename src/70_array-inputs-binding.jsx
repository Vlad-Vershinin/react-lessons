import { useState } from 'react';

const ArrayInputsBinding = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    const changeNumber = (index, value) => {
        setNumbers((currentNumbers) =>
            currentNumbers.map((number, currentIndex) =>
                currentIndex === index ? value : number
            )
        );
    };

    const average = numbers.reduce((sum, number) => sum + Number(number || 0), 0) / numbers.length;

    return (
        <div>
            {numbers.map((number, index) => (
                <input
                    key={index}
                    type="number"
                    value={number}
                    onChange={(e) => changeNumber(index, e.target.value)}
                />
            ))}
            <p>Среднее арифметическое элементов массива: {average}</p>
        </div>
    );
};

export default ArrayInputsBinding;
