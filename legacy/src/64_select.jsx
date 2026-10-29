import { useState } from 'react';

const Select = () => {
    const [selectedCity, setSelectedCity] = useState('Екатеринбург');
    const [selectedUser, setSelectedUser] = useState('Иванов');

    return <>
        <div>
            <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                <option>Екатеринбург</option>
                <option>Москва</option>
                <option>Санкт-Петербург</option>
                <option>Казань</option>
                <option>Новосибирск</option>
            </select>
            <p>Выбран город: {selectedCity}</p>

            <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
                <option>Иванов</option>
                <option>Петров</option>
                <option>Сидоров</option>
            </select>
            <p>Выбран пользователь: {selectedUser}</p>
        </div>
    </>
}

export default Select;
