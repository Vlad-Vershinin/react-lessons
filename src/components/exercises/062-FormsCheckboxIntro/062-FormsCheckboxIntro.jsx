import { useState } from 'react';
function FormsCheckboxIntro() {
    const [checked, setChecked] = useState(false), [message, setMessage] = useState('');
    const [langs, setLangs] = useState([]);
    return <><input type='checkbox' checked={checked} onChange={e => setChecked(e.target.checked)}/><button onClick={() => setMessage(checked ? 'Здравствуйте' : 'До свидания')}>Ответить</button><p>{message}</p>{['html', 'css', 'js'].map(lang => <div key={lang}><label><input type='checkbox' checked={langs.includes(lang)} onChange={e => setLangs(a => e.target.checked ? [...a, lang] : a.filter(x => x !== lang))}/>{lang}</label><p>{lang}: {langs.includes(lang) ? 'знаю' : 'не знаю'}</p></div>)}</>;
}
export default FormsCheckboxIntro;
