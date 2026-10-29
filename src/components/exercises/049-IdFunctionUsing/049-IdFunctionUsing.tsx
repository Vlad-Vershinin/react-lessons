import { useState } from 'react';
import { nanoid } from 'nanoid';


function IdFunctionUsing(){
const [users]=useState(()=>['user1','user2','user3'].map(name=>({id:nanoid(),name}))); return <ul>{users.map(u=><li key={u.id}>{u.name}: {u.id}</li>)}</ul>;
}
export default IdFunctionUsing;
