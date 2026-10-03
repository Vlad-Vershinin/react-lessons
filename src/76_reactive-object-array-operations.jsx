import { useState } from 'react';

const ReactiveObjectArrayOperations = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'Иван' },
        { id: 2, name: 'Мария' },
        { id: 3, name: 'Пётр' },
    ]);

    const changeName = (id, name) => {
        setUsers((currentUsers) =>
            currentUsers.map((user) => user.id === id ? { ...user, name } : user)
        );
    };

    const removeUser = (id) => {
        setUsers((currentUsers) => currentUsers.filter((user) => user.id !== id));
    };

    return (
        <div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <input value={user.name} onChange={(e) => changeName(user.id, e.target.value)} />
                        <button onClick={() => removeUser(user.id)}>Удалить</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReactiveObjectArrayOperations;
