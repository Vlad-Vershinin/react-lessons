import { useState } from 'react';
function FormsTextarea() {
    const [text, setText] = useState(''), [numbers, setNumbers] = useState('');
    const ru = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
    const en = ['a', 'b', 'v', 'g', 'd', 'e', 'yo', 'zh', 'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'f', 'kh', 'ts', 'ch', 'sh', 'shch', '', 'y', '', 'e', 'yu', 'ya'];
    const translit = [...text].map(c => { const index = ru.indexOf(c.toLowerCase()); const v = en[index]; return v === undefined ? c : c === c.toUpperCase() ? v.toUpperCase() : v; }).join('');
    return <><textarea aria-label="Текст" value={text} onChange={e => setText(e.target.value)}/><p>{translit}</p><textarea aria-label="Числа по строкам" value={numbers} onChange={e => setNumbers(e.target.value)}/><p>{numbers.split('\n').reduce((s, v) => s + Number(v), 0)}</p></>;
}
export default FormsTextarea;
