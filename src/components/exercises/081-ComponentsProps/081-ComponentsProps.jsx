function Employee({ name, surname, patronymic, salary }) { return <p>{surname} {name} {patronymic}: {salary} ₽</p>; }
function ComponentsProps() {
    const employees = [{ name: 'Иван', surname: 'Иванов', patronymic: 'Иванович', salary: 50000 }, { name: 'Анна', surname: 'Петрова', patronymic: 'Ивановна', salary: 60000 }, { name: 'Пётр', surname: 'Сидоров', patronymic: 'Петрович', salary: 70000 }];
    return <>{employees.map(e => <Employee key={e.surname} {...e}/>)}</>;
}
export default ComponentsProps;
