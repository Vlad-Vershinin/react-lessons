import { useState } from 'react';


function StatesUsing(){
const [name]=useState('john'); const [surname]=useState('smit'); const [age]=useState(30); return <p>{name} {surname} {age}</p>;
}
export default StatesUsing;
