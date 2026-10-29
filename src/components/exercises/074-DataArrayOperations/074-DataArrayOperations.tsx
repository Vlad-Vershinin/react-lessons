import { useState } from 'react';


function DataArrayOperations(){
const [notes,setNotes]=useState([{id:1,value:'1'},{id:2,value:'2'},{id:3,value:'3'}]);const [selected,setSelected]=useState<number|null>(null),[text,setText]=useState('');return <><ul>{notes.map(note=><li key={note.id}><button onClick={()=>{setNotes(a=>a.map(v=>v.id===note.id?{...v,value:String(Number(v.value)**2)}:v));setSelected(note.id);setText(note.value);}}>{note.value}</button><button onClick={()=>setNotes(a=>a.filter(v=>v.id!==note.id))}>Удалить</button></li>)}</ul><input value={text} onChange={e=>setText(e.target.value)} onBlur={()=>setNotes(a=>a.map(v=>v.id===selected?{...v,value:text}:v))}/><button onClick={()=>setNotes(a=>[...a].reverse())}>Перевернуть</button></>;
}
export default DataArrayOperations;
