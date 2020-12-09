//area destinada a chamada de elemento de entrada de dados do API.
var botao = document.querySelector('button');
const inp_valorBoleto = document.getElementById('valorBole');
const inp_dataV = document.getElementById('dataVenc');
const inp_dataP = document.getElementById('dataPag');
const inp_valorDaMulta = document.getElementById('valorMul');
const inp_valorDaMora = document.getElementById('valorMor');

//area destinada a saida de dados da API.
const spanValorBo = document.getElementById('vaBoleto');
const spanDiasDeAtraso = document.getElementById('diasAtraso');
const spanValorDaMulta = document.getElementById('vMulta');
const spanValorDaMora = document.getElementById('vMora');
const spanQuantiadeJurosDias = document.getElementById('qtd_JurosDias');
const spanValorJurosEmDinheiro = document.getElementById('vJ_emDinheiro');
const spanValorboletoMaisValormora = document.getElementById('valorBoMo')
const spanValorTotal = document.getElementById('valorTotal');

//are destinada as funções ==>
function fu_valorDoboleto() {
	let valorBole = inp_valorBoleto.value;
	let resu_valorBo = parseFloat(valorBole);
	return resu_valorBo.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL"
	});
}

function fu_diasEmatraso() {
	var dataVenc = inp_dataV.value; //resgatando valor colocado em data de vencimento.
	var dataPag = inp_dataP.value; //resgatando valor colocado em data de pagamento.
	var umDia;
	var dif_tempo;
	var dife_dias;
	var resu_difeDias;

	dataVenc = new Date(dataVenc); //data de vencimento
	dataPag = new Date(dataPag); //data de pagamento
	umDia = 1000 * 60 * 60 * 24; //calculo para se obter o valor correspondente a um dia desde de 1970
	dif_tempo = Math.abs(dataPag - dataVenc); //calculo para se obter a diferença de tempo entre duas datas 
	dife_dias = Math.ceil(dif_tempo / umDia); //calculo para se obter a diferença de dias entre duas datas 
	resu_difeDias = (dife_dias);
	return resu_difeDias
}

function fu_valorMulta() {
	var valorBole = inp_valorBoleto.value; //declarando variaveis valor do boleto.
	var valorMul = inp_valorDaMulta.value; //resgatando o valor colocado valor da multa.
	var valor_reais;
	var resu_valorMulreais;

	valorMul = parseInt(valorMul); //valor da multa.
	valorBole = parseFloat(valorBole); //valor do boleto 
	valor_reais = (valorBole * valorMul) / 100; //valor do boleto vez valor da multa divido por 100.
	resu_valorMulreais = parseFloat(valor_reais);
	return resu_valorMulreais.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	})
}

function fu_valorMora() {
	var valorMor = inp_valorDaMora.value; //resgatando o valor colocado em valor da mora. 
	var resu_valorMora;

	valorMor = parseFloat(valorMor);
	resu_valorMora = valorMor;
	return resu_valorMora;
}
//are destinada a funções de converção de valores como valor da mora, multa e valor da fatura, valor total mais valor mora e da multa.
function fu_jurosDias() {
	//calculo para se obter a quantidade de dias.
	var valorMor = inp_valorDaMora.value; //resgatando o valor colocado em valor da mora. 
	var dataVenc = inp_dataV.value; //resgatando valor colocado em data de vencimento.
	var dataPag = inp_dataP.value; //resgatando valor colocado em data de pagamento.
	var umDia;
	var dif_tempo;
	var dife_dias;
	var resu_quantidadeJD;

	valorMor = parseFloat(valorMor);
	dataVenc = new Date(dataVenc); //data de vencimento
	dataPag = new Date(dataPag); //data de pagamento
	umDia = 1000 * 60 * 60 * 24; //calculo para se obter o valor correspondente a um dia desde de 1970
	dif_tempo = Math.abs(dataPag - dataVenc); //calculo para se obter a diferença de tempo entre duas datas 
	dife_dias = Math.ceil(dif_tempo / umDia); //calculo para se obter a diferença de dias entre duas datas 
	resu_quantidadeJD = parseFloat(dife_dias * valorMor);
	return resu_quantidadeJD.toFixed(4)
}

function fu_vjurosEmDinheiro() {
	var valorBole = inp_valorBoleto.value;
	var valorMor = inp_valorDaMora.value; //resgatando o valor colocado em valor da mora. 
	var dataVenc = inp_dataV.value; //resgatando valor colocado em data de vencimento.
	var dataPag = inp_dataP.value; //resgatando valor colocado em data de pagamento.
	var umDia;
	var dif_tempo;
	var dife_dias;
	var resu_quantidadeJD;

	valorBole = parseFloat(valorBole);
	valorMor = parseFloat(valorMor);
	dataVenc = new Date(dataVenc); //data de vencimento
	dataPag = new Date(dataPag); //data de pagamento
	umDia = 1000 * 60 * 60 * 24; //calculo para se obter o valor correspondente a um dia desde de 1970
	dif_tempo = Math.abs(dataPag - dataVenc); //calculo para se obter a diferença de tempo entre duas datas 
	dife_dias = Math.ceil(dif_tempo / umDia); //calculo para se obter a diferença de dias entre duas datas 
	resu_quantidadeJD = parseFloat(dife_dias * valorMor);
	resu_valorJuEmDinheiro = parseFloat(resu_quantidadeJD * valorBole) / 100;
	return resu_valorJuEmDinheiro.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	});
}

function fu_valorBoComvalorMo() {
	var valorBole = inp_valorBoleto.value;
	var valorMor = inp_valorDaMora.value; //resgatando o valor colocado em valor da mora. 
	var dataVenc = inp_dataV.value; //resgatando valor colocado em data de vencimento.
	var dataPag = inp_dataP.value; //resgatando valor colocado em data de pagamento.
	var umDia;
	var dif_tempo;
	var dife_dias;
	var resu_quantidadeJD;
	var resu_valorJuEmDinheiro;
	var resu_valorboComvalorMo;

	valorBole = parseFloat(valorBole);
	valorMor = parseFloat(valorMor);
	dataVenc = new Date(dataVenc); //data de vencimento
	dataPag = new Date(dataPag); //data de pagamento
	umDia = 1000 * 60 * 60 * 24; //calculo para se obter o valor correspondente a um dia desde de 1970
	dif_tempo = Math.abs(dataPag - dataVenc); //calculo para se obter a diferença de tempo entre duas datas 
	dife_dias = Math.ceil(dif_tempo / umDia); //calculo para se obter a diferença de dias entre duas datas 
	resu_quantidadeJD = parseFloat(dife_dias * valorMor);
	resu_valorJuEmDinheiro = parseFloat(resu_quantidadeJD * valorBole) / 100;
	resu_valorboComvalorMo = parseFloat(resu_valorJuEmDinheiro + valorBole)

	return resu_valorboComvalorMo.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	});
}

function fu_valorTotal() {
	let valorBole = inp_valorBoleto.value;
	let valorMor = inp_valorDaMora.value; //resgatando o valor colocado em valor da mora. 
	let dataVenc = inp_dataV.value; //resgatando valor colocado em data de vencimento.
	let dataPag = inp_dataP.value; //resgatando valor colocado em data de pagamento.


	let valorBole = parseFloat(inp_valorBoleto).value;
	let valorMul = parseInt(inp_valorDaMulta).value;
	let resu_valorMulreais = parseFloat(valorBole * valorMul) / 100;
	let valorBole = parseFloat(valorBole);
	let valorMor = parseFloat(valorMor);
	let dataVenc = new Date(dataVenc);
	let dataPag = new Date(dataPag);
	let umDia = 1000 * 60 * 60 * 24;
	let dif_tempo = Math.abs(dataPag - dataVenc);
	let dife_dias = Math.ceil(dif_tempo / umDia);
	let resu_quantidadeJD = parseFloat(dife_dias * valorMor);
	let resu_valorJuEmDinheiro = parseFloat(resu_quantidadeJD * valorBole) / 100;
	let resu_valorboComvalorMo = parseFloat(resu_valorJuEmDinheiro + valorBole)
	resu_valorTotal = parseFloat(resu_valorboComvalorMo + resu_valorMulreais);
	return resu_valorTotal.toLocaleString('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	});
}


botao.addEventListener('click', function () {
	resu_valorBo = fu_valorDoboleto() //01
	resu_difeDias = fu_diasEmatraso() //02
	resu_valorMulreais = fu_valorMulta() //03
	resu_valorMora = fu_valorMora() //04
	resu_quantidadeJD = fu_jurosDias() //05
	resu_valorJuEmDinheiro = fu_vjurosEmDinheiro() //06
	resu_valorboComvalorMo = fu_valorBoComvalorMo() //07
	resu_valorTotal = fu_valorTotal() //08

	spanValorBo.innerHTML = resu_valorBo //01
	spanDiasDeAtraso.innerHTML = resu_difeDias //02
	spanValorDaMulta.innerHTML = resu_valorMulreais //03
	spanValorDaMora.innerHTML = resu_valorMora //04
	spanQuantiadeJurosDias.innerHTML = resu_quantidadeJD //05
	spanValorJurosEmDinheiro.innerHTML = resu_valorJuEmDinheiro //06
	spanValorboletoMaisValormora.innerHTML = resu_valorboComvalorMo //07
	spanValorTotal.innerHTML = resu_valorTotal //08
})
