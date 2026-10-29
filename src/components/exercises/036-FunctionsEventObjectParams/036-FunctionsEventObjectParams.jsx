function FunctionsEventObjectParams() {
    return <><p>Стрелочная функция получает событие и передаёт его вместе с аргументами обработчику.</p><button onClick={event => console.log('eee', 'bbb', event)}>Событие последним</button><button onClick={event => console.log(event, 'eee', 'bbb')}>Событие первым</button><button onClick={event => console.log('eee', event, 'bbb')}>Событие вторым</button></>;
}
export default FunctionsEventObjectParams;
