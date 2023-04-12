function createTable() {
    const table = document.getElementById("myTable");
	let rowNum = parseInt(prompt("Input number of rows"));
	let colNum = parseInt(prompt("Input number of columns"));

	table.innerHTML = "";
	for(let i = 0;i<rowNum;i++){
		let row = table.insertRow(i);
		for(let j = 0;j<colNum;j++){
			let cell = row.insertCell(j);
			cell.textContent = `Row-${i} Column-${j}`;
		}
	}
}
