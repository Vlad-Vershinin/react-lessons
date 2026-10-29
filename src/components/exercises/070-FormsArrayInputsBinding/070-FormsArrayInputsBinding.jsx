import { useState } from 'react';
function FormsArrayInputsBinding() {
    const [values, setValues] = useState(Array.from({ length: 9 }, (_, i) => String(i + 1)));
    return <>{values.map((v, i) => <input aria-label={'Число ' + (i + 1)} key={i} type='number' value={v} onChange={e => setValues(a => a.map((x, j) => i === j ? e.target.value : x))}/>)}<p>{values.reduce((s, v) => s + Number(v), 0) / values.length}</p></>;
}
export default FormsArrayInputsBinding;
