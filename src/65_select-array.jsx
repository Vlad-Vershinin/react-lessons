import { useState } from 'react';

const SelectArray = () => {
    const cities = ['Екатеринбург', 'Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск'];
    const [selectedCity, setSelectedCity] = useState(cities[0]);

    return (
        <div>
            <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                {cities.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>
            <p>Выбран город: {selectedCity}</p>
        </div>
    );
}

export default SelectArray;