const SelectValue = () => {
    const [selectedValue, setSelectedValue] = React.useState('option1');

    return <div>
        <select value={selectedValue} onChange={(e) => setSelectedValue(e.target.value)}>
            <option value="option1">от 0 до 12 лет</option>
            <option value="option2">от 12 до 18 лет</option>
            <option value="option3">от 18 до 25 лет</option>
        </select>

        <p>Выбран возраст: {selectedValue}</p>
    </div>
}

export default SelectValue;