import { useState } from 'react';
function FormsData() {
    const [a, setA] = useState(''), [b, setB] = useState(''), [result, setResult] = useState('');
    const today = new Date().toLocaleDateString('en-CA');
    const [d1, setD1] = useState(today), [d2, setD2] = useState(today), [days, setDays] = useState('');
    const [num, setNum] = useState(''), [sum, setSum] = useState(0), [product, setProduct] = useState('');
    function divisors(value) { const n = Number(value); if (!Number.isSafeInteger(n) || n <= 0)
        return 'Введите положительное целое'; let p = 1; for (let i = 1; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            p *= i;
            if (i !== n / i)
                p *= n / i;
        }
    } return p; }
    return <><input type="number" value={a} onChange={e => setA(e.target.value)}/><input type="number" value={b} onChange={e => setB(e.target.value)}/><button onClick={() => setResult(Number(a) + Number(b))}>Сумма</button><button onClick={() => setResult(Number(a) * Number(b))}>Произведение</button><p>{result}</p><input type="date" value={d1} onChange={e => setD1(e.target.value)}/><input type="date" value={d2} onChange={e => setD2(e.target.value)}/><button onClick={() => setDays(d1 && d2 ? Math.abs(Date.parse(d1) - Date.parse(d2)) / 86400000 : 'Введите даты')}>Разница в днях</button><p>{days}</p><label>Число<input value={num} onChange={e => setNum(e.target.value)} onBlur={() => { setSum([...num].filter(c => /\d/.test(c)).reduce((s, c) => s + Number(c), 0)); setProduct(divisors(num)); }}/></label><p>Сумма цифр: {sum}</p><p>Произведение делителей: {product}</p></>;
}
export default FormsData;
