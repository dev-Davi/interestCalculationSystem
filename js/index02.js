//const inpValorMulta = document.querySelector('#idvalorMulta');
//const spanvalorMulta = document.querySelector('#spanvalorMulta');
function inpvalor_Boleto() {
	let spanvalor_boleto = document.getElementById('spanvalorBoleto');
	let valor_boleto = document.getElementById('idvalorBoleto').value;

	valor_boleto = Number(valor_boleto).toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	});
	spanvalor_boleto.innerHTML = valor_boleto;
}
function fu_valorMulta() {
	let spanvalor_multa = document.getElementById('spanvalorMulta');
	let inpvalor_multa = document.getElementById('idvalorMulta').value;
	let valor_boleto = document.getElementById('idvalorBoleto').value;

	valor_boleto = Number(valor_boleto);
	inpvalor_multa = Number(inpvalor_multa);
	let result_valorMulta = Number((valor_boleto * inpvalor_multa)/100).toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	})
	spanvalor_multa.innerHTML = (result_valorMulta);
	console.log(valor_boleto)
	console.log(result_valorMulta)
}