import { useState } from 'react';

const ReactiveDataShowing = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Ноутбук', desc: 'Ноутбук для работы и учёбы.', show: false },
        { id: 2, name: 'Телефон', desc: 'Смартфон с большим экраном.', show: false },
        { id: 3, name: 'Наушники', desc: 'Беспроводные наушники.', show: false },
    ]);

    const toggleDescription = (id) => {
        setProducts((currentProducts) =>
            currentProducts.map((product) =>
                product.id === id ? { ...product, show: !product.show } : product
            )
        );
    };

    return (
        <div>
            {products.map((product) => (
                <p key={product.id}>
                    {product.name}{product.show && <>: {product.desc}</>}{' '}
                    <button onClick={() => toggleDescription(product.id)}>
                        {product.show ? 'Скрыть описание' : 'Показать описание'}
                    </button>
                </p>
            ))}
        </div>
    );
};

export default ReactiveDataShowing;
