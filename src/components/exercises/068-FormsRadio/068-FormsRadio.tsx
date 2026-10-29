import { useState } from 'react';


function FormsRadio(){
const [number,setNumber]=useState('1'),[lang,setLang]=useState('JavaScript');return <>{['1','2','3'].map(v=><label key={v}><input type='radio' name='number' checked={number===v} value={v} onChange={e=>setNumber(e.target.value)}/>{v}</label>)}<p>{number}</p>{['JavaScript','Python','PHP'].map(v=><label key={v}><input type='radio' name='language' checked={lang===v} value={v} onChange={e=>setLang(e.target.value)}/>{v}</label>)}<p>{lang}{lang==='JavaScript'&&' — отличный выбор!'}</p></>;
}
export default FormsRadio;
