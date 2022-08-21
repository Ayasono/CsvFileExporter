const excelArray = [
	['name', 'age', 'school'],
	['yuehu', 18, 'UofA']
]

function excelDownload (excelArray) {
	excelArray = excelArray.map(ele => ele.join(',')).join('\r\n')

	const CsvString = 'data:application/vnd.ms-excel;charset=utf-8,\uFEFF' + encodeURIComponent(excelArray)

	let x = document.createElement('A')
	x.setAttribute('href', CsvString)
	x.setAttribute('download', 'data.csv')
	document.body.appendChild(x)
	x.click()
	document.body.removeChild(x)
}

excelDownload(excelArray)
