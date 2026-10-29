import { useState } from 'react';


function DataArrayAdding(){
const [notes,setNotes]=useState(['1','2','3','4','5']),[text,setText]=useState('');return <><ul>{notes.map((v,i)=><li key={i}>{v}</li>)}</ul><button onClick={()=>setNotes(a=>[...a,'Новый элемент'])}>Добавить элемент</button><input value={text} onChange={e=>setText(e.target.value)}/><button onClick={()=>{setNotes(a=>[...a,text]);setText('');}}>Добавить текст</button></>;
}
export default DataArrayAdding;
