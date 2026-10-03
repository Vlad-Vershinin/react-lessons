import { useState } from 'react';

const DefaultValues = () => {
    const [value] = useState('Текст по умолчанию');
    const [checked] = useState(true);

    return (
        <div>
            <input defaultValue={value} />
            <input type="checkbox" defaultChecked={checked} />
        </div>
    );
};

export default DefaultValues;
