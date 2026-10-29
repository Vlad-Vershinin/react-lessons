import { useState } from 'react';


function FormsSelectValue(){
const [value,setValue]=useState('child');return <><select value={value} onChange={e=>setValue(e.target.value)}><option value='child'>0–12 лет</option><option value='teen'>13–17 лет</option><option value='young'>18–25 лет</option><option value='adult'>Старше 25</option></select><p>{value}</p></>;
}
export default FormsSelectValue;
