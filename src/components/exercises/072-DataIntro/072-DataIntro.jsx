function DataIntro() {
    return <><p>Добавление: [...items, newItem].</p><p>Изменение: items.map(item =&gt; item.id === id ? &#123;...item, name: value&#125; : item).</p><p>Удаление: items.filter(item =&gt; item.id !== id).</p><p>Для простого массива сравниваем индекс или значение; для массива объектов используем стабильный id. Вложенный изменяемый объект тоже копируем.</p></>;
}
export default DataIntro;
