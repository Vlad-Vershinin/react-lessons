import { useState } from 'react';
import { nanoid } from 'nanoid';
import uuid from 'react-uuid';


function IdFunction(){
const [ids,setIds]=useState(()=>[nanoid(),uuid()]); function idNano(){return nanoid();} function idUuid(){return uuid();} return <><p>nanoid: {ids[0]}</p><p>react-uuid: {ids[1]}</p><button onClick={()=>setIds([idNano(),idUuid()])}>Сгенерировать</button></>;
}
export default IdFunction;
