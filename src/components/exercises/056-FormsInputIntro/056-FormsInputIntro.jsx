import { useState } from 'react';
function FormsInputIntro() {
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    return <><input value={first} onChange={e => setFirst(e.target.value)}/><p>{first}</p><input value={second} onChange={e => setSecond(e.target.value)}/><p>{second}</p></>;
}
export default FormsInputIntro;
