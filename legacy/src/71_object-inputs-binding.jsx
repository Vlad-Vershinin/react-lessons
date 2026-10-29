import { useState } from 'react';

const ObjectInputsBinding = () => {
    const [date, setDate] = useState({ year: 2025, month: 12, day: 31 });
    const dateValue = new Date(date.year, date.month - 1, date.day);
    const weekDays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

    const changeDate = (property, value) => {
        setDate((currentDate) => ({ ...currentDate, [property]: value }));
    };

    return (
        <div>
            <input type="number" value={date.year} onChange={(e) => changeDate('year', Number(e.target.value))} />
            <input type="number" min="1" max="12" value={date.month} onChange={(e) => changeDate('month', Number(e.target.value))} />
            <input type="number" min="1" max="31" value={date.day} onChange={(e) => changeDate('day', Number(e.target.value))} />
            <p>
                {date.year}-{date.month}-{date.day}, {weekDays[dateValue.getDay()]}
            </p>
        </div>
    );
};

export default ObjectInputsBinding;
