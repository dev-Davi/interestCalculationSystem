function valorDoBoleto() {
	let spanvalor_boleto = document.getElementById('spanvalorBoleto');
	let valor_boleto = document.getElementById('idvalorBoleto').value;
	valor_boleto = parseFloat(valor_boleto).toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL' 
	}); 
	spanvalor_boleto.innerHTML = valor_boleto;
}
//Valor da multa
function valorDaMulta() {
	let spanvalor_multa = document.getElementById('spanvalorMulta');
	let inpvalor_multa = document.getElementById('idvalorMulta').value;
	let valor_boleto = document.getElementById('idvalorBoleto').value;

	valor_boleto = parseFloat(valor_boleto);
	inpvalor_multa = parseInt(inpvalor_multa);
	let result_valorMulta = Number.parseInt(valor_boleto * inpvalor_multa)/100;
	spanvalor_multa.innerHTML = parseFloat(result_valorMulta).toLocaleString('pt-BR', {
		style:'currency',
		currency:'BRL'
	});
}
//Obtendo dias de atraso.
function diasDeAtraso() {
	let inputDataVencimento = document.getElementById('idDataVencimento').value
	let inputDataPagamento = document.getElementById('idDataPagamento').value;
	let spanDiasAtraso = document.getElementById('spanDiasEmAtraso');
	inputDataVencimento = new Date(inputDataVencimento);
	inputDataPagamento = new Date(inputDataPagamento);
	let umDia = 24*60*60*1000;
	let diferençaDeTempo = Math.abs(inputDataPagamento - inputDataVencimento);
	let diferençaDeDias = Math.ceil(diferençaDeTempo/umDia);
	spanDiasAtraso.innerHTML = (diferençaDeDias);

}
//valor da mora.
function valorDaMora() {
	let inputValorMora = document.getElementById('idValorMora').value;
	let spanValorMora = document.getElementById('spanValorDaMora')
	inputValorMora = parseFloat(inputValorMora);
	spanValorMora.innerHTML = inputValorMora;
}
//valor porcentagem do juros.
function valorDoJuros() {
	let inputDataVencimento = document.getElementById('idDataVencimento').value
	let inputDataPagamento = document.getElementById('idDataPagamento').value;
	let inputValorMora = document.getElementById('idValorMora').value;
	let spanJuros = document.getElementById('spanValorJuros')
	
	inputValorMora = parseFloat(inputValorMora)
	inputDataVencimento = new Date(inputDataVencimento);
	inputDataPagamento = new Date(inputDataPagamento);
	
	let umDia = 1000*60*60*24;
	let diferençaDeTempo = Math.abs(parseFloat(inputDataPagamento - inputDataVencimento));
	let diferençaDeDias = Math.ceil(parseFloat(diferençaDeTempo/umDia));
	let result_valorJuros = parseFloat(diferençaDeDias * inputValorMora).toFixed(4);
	spanJuros.innerHTML = result_valorJuros;
}
//valor do juros em dinheiro
function valorDoJurosEmdinheiro() {
	let inputDataVencimento = document.getElementById('idDataVencimento').value
	let inputDataPagamento = document.getElementById('idDataPagamento').value;
	let valor_boleto = document.getElementById('idvalorBoleto').value;
	let inputValorMora = document.getElementById('idValorMora').value;
	let spanJurosDinheiro = document.getElementById('spanValorJurosEmDinheiro');
	valor_boleto = parseFloat(valor_boleto);
	inputValorMora = parseFloat(inputValorMora);
	inputDataVencimento = new Date(inputDataVencimento);
	inputDataPagamento = new Date(inputDataPagamento);
	//
	let umDia = 1000*60*60*24;
	let diferençaDeTempo = Math.abs(parseFloat(inputDataPagamento - inputDataVencimento));
	let diferençaDeDias = Math.ceil(parseFloat(diferençaDeTempo/umDia));
	let valorJuros = (diferençaDeDias * inputValorMora);
	let resultado_valorJuros = parseFloat((valorJuros * valor_boleto)/100).toLocaleString('pt-BR', {
		style:'currency',
		 currency:'BRL'
		});
	
	spanJurosDinheiro.innerHTML = resultado_valorJuros;
}
//valor total da fatura 
function fun_valorTotal() {
	let inputDataVencimento = document.getElementById('idDataVencimento').value;
	let inputDataPagamento = document.getElementById('idDataPagamento').value;
	let valor_boleto = document.getElementById('idvalorBoleto').value;
	let inputValorMora = document.getElementById('idValorMora').value;
	let inpvalor_multa = document.getElementById('idvalorMulta').value;
	let spanValorTotal = document.getElementById('ValorTotal');

	valor_boleto = parseFloat(valor_boleto).toFixed(2);
	inpvalor_multa = parseInt(inpvalor_multa * valor_boleto)/100;
	inputValorMora = parseFloat(inputValorMora);
	inputDataVencimento = new Date(inputDataVencimento);
	inputDataPagamento = new Date(inputDataPagamento);
	//
	let umDia = 1000*60*60*24;
	let diferençaDeTempo = Math.abs(inputDataPagamento - inputDataVencimento);
	let diferençaDeDias = Math.ceil(diferençaDeTempo/umDia);
	let result_valorJuros = ((diferençaDeDias) * parseFloat(inputValorMora) * parseFloat(valor_boleto)/100);
	let total = (parseFloat(result_valorJuros) + parseFloat(valor_boleto));
	let total02 = parseFloat(total + inpvalor_multa);
	spanValorTotal.innerHTML = total02.toLocaleString('pt-BR', {style:'currency', currency:'BRL'});	
}