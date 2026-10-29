import { useState } from 'react';
function StatesBooleanValue() {
    const [banned, setBanned] = useState(false);
    return <><p>{banned ? "Забанен" : "Не забанен"}</p>{banned ? <button onClick={() => setBanned(false)}>Разбанить</button> : <button onClick={() => setBanned(true)}>Забанить</button>}</>;
}
export default StatesBooleanValue;
