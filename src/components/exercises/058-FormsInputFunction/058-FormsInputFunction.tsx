import { useState } from 'react';


function FormsInputFunction(){
const [age,setAge]=useState(''); const [f,setF]=useState(''); function birth(value:string){return new Date().getFullYear()-Number(value);} function celsius(value:string){return (Number(value)-32)*5/9;} return <><label>Возраст<input type='number' value={age} onChange={e=>setAge(e.target.value)}/></label><p>{age!==''?birth(age):'Введите возраст'}</p><label>Фаренгейт<input type='number' value={f} onChange={e=>setF(e.target.value)}/></label><p>{f!==''?celsius(f):'Введите температуру'}</p></>;
}
export default FormsInputFunction;
