import { useState } from 'react';
function DataObjectsArrayAdding() {
    const [notes, setNotes] = useState([{ id: 'a', prop1: 'value11', prop2: 'value12', prop3: 'value13' }, { id: 'b', prop1: 'value21', prop2: 'value22', prop3: 'value23' }]);
    const [form, setForm] = useState({ prop1: '', prop2: '', prop3: '' }), [selected, setSelected] = useState(null);
    return <><ul>{notes.map(note => <li key={note.id}>{note.prop1} {note.prop2} {note.prop3}<button onClick={() => setNotes(a => a.filter(v => v.id !== note.id))}>Удалить</button><button onClick={() => { setSelected(note.id); setForm({ prop1: note.prop1, prop2: note.prop2, prop3: note.prop3 }); }}>Редактировать</button></li>)}</ul>{['prop1', 'prop2', 'prop3'].map(field => <input aria-label={field} key={field} value={form[field]} onChange={e => setForm(v => ({ ...v, [field]: e.target.value }))}/>)}<button onClick={() => setNotes(a => [...a, { id: crypto.randomUUID(), ...form }])}>Добавить из полей</button><button onClick={() => setNotes(a => [...a, { id: crypto.randomUUID(), prop1: 'new1', prop2: 'new2', prop3: 'new3' }])}>Добавить элемент</button><button disabled={selected === null} onClick={() => { setNotes(a => a.map(v => v.id === selected ? { ...v, ...form } : v)); setSelected(null); }}>Сохранить</button></>;
}
export default DataObjectsArrayAdding;
