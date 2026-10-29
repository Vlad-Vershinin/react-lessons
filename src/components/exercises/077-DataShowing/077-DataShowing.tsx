import { useState } from 'react';


function DataShowing(){
const [notes,setNotes]=useState([1,2,3].map(n=>({id:n,name:'name'+n,desc:'long description '+n,show:false})));return <>{notes.map(note=><p key={note.id}>{note.name} {note.show&&<i>{note.desc}</i>}<button onClick={()=>setNotes(a=>a.map(v=>v.id===note.id?{...v,show:!v.show}:v))}>{note.show?'Скрыть':'Показать'}</button></p>)}</>;
}
export default DataShowing;
