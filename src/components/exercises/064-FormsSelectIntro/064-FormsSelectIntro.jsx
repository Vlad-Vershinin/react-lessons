import { useState } from 'react';
function FormsSelectIntro() {
    const cities = ['Москва', 'Екатеринбург', 'Казань'];
    const [value, setValue] = useState('0');
    return <><select aria-label='Город' value={value} onChange={e => setValue(e.target.value)}>{cities.map((city, i) => <option key={city} value={i}>{city}</option>)}</select><p>{cities[Number(value)]}</p></>;
}
export default FormsSelectIntro;
