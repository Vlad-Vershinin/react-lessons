import { useState } from 'react';


function StatesReactivity(){
const [name,setName]=useState('john'); const [surname,setSurname]=useState('smit'); return <><p>{name} {surname}</p><button onClick={()=>setName('Иван')}>Изменить имя</button><button onClick={()=>setSurname('Иванов')}>Изменить фамилию</button></>;
}
export default StatesReactivity;
