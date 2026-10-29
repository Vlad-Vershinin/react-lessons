import { useState } from 'react';
function FormsInputOutput() {
    const [text, setText] = useState('');
    return <><input value={text} onChange={e => setText(e.target.value)}/><p>{text.length}</p></>;
}
export default FormsInputOutput;
