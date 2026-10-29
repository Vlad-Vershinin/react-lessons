import { useState } from 'react';
function FormsCheckboxConditionalRendering() {
    const [adult, setAdult] = useState(false), [visible, setVisible] = useState(false);
    return <><label><input type='checkbox' checked={adult} onChange={e => setAdult(e.target.checked)}/>Мне есть 18</label>{adult ? <div><h2>Ура, вам уже есть 18</h2><p>здесь расположен контент только для взрослых</p></div> : <div><p>увы, вам еще нет 18 лет:(</p></div>}<label><input type='checkbox' checked={visible} onChange={e => setVisible(e.target.checked)}/>Показать абзац</label>{visible && <p>Видимый абзац</p>}</>;
}
export default FormsCheckboxConditionalRendering;
