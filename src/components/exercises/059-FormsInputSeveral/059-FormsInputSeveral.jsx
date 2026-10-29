import { useState } from 'react';
function FormsInputSeveral() {
    const [values, setValues] = useState(Array.from({ length: 5 }, (_, i) => String(i + 1)));
    return <>{values.map((v, i) => <input aria-label={'Число ' + (i + 1)} key={i} type='number' value={v} onChange={e => setValues(a => a.map((x, j) => i === j ? e.target.value : x))}/>)}<p>{values.reduce((s, v) => s + Number(v), 0) / values.length}</p></>;
}
export default FormsInputSeveral;
