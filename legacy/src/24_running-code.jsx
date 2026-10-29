function App1() {
	const num1 = 3;
	const num2 = 2;
	
	return <div>
		result: {num1 ** num2}
	</div>;

    // Вывод:
    // <div>
    //     result: 9
    // </div>
}

function App2() {
	const name = 'john';
	const surname = 'smit';
	
	return <div>
		result: {name + ' ' + surname}
	</div>;

    // Вывод:
    // <div>
    //     result: john smit
    // </div>
}

function App3() {
	const num = 4;
	
	return <div>
		result: {Math.sqrt(num)}
	</div>;

    // Вывод:
    // <div>
    //     result: 2
    // </div>
}

export { App1, App2, App3 };