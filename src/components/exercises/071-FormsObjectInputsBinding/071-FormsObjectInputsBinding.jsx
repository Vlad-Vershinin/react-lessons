import { useState } from 'react';
function FormsObjectInputsBinding() {
    const [date, setDate] = useState({ year: 2025, month: 12, day: 31 });
    const d = new Date(date.year, date.month - 1, date.day);
    const valid = d.getFullYear() === date.year && d.getMonth() === date.month - 1 && d.getDate() === date.day;
    return <>{['year', 'month', 'day'].map(field => <label key={field}>{field}<input type='number' value={date[field]} onChange={e => setDate(v => ({ ...v, [field]: Number(e.target.value) }))}/></label>)}<p>{date.year}-{date.month}-{date.day}: {valid ? d.toLocaleDateString('ru-RU', { weekday: 'long' }) : 'Некорректная дата'}</p></>;
}
export default FormsObjectInputsBinding;
