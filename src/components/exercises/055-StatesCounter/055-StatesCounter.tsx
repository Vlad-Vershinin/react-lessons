import { useState } from 'react';


function StatesCounter(){
const [age,setAge]=useState(30); return <><p>{age}</p><button onClick={()=>setAge(n=>n+1)}>+</button><button onClick={()=>setAge(n=>n-1)}>−</button></>;
}
export default StatesCounter;
