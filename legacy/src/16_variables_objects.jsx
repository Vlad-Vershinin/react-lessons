function VariablesObjects() {
	const obj = {name: 'john', surname: 'smit'};
	
	return <p>
		Name: <span>{obj.name}</span>, <br />
		Surname: <span>{obj.surname}</span>
	</p>;
}

export default VariablesObjects;