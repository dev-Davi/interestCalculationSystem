"use strict";

//Valor do boleto
function valorDoBoleto() {
  var spanvalor_boleto = document.getElementById('spanvalorBoleto');
  var valor_boleto = document.getElementById('idvalorBoleto').value;
  valor_boleto = parseFloat(valor_boleto).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  spanvalor_boleto.innerHTML = valor_boleto;
} //Valor da multa


function valorDaMulta() {
  var spanvalor_multa = document.getElementById('spanvalorMulta');
  var inpvalor_multa = document.getElementById('idvalorMulta').value;
  var valor_boleto = document.getElementById('idvalorBoleto').value;
  valor_boleto = parseFloat(valor_boleto);
  inpvalor_multa = parseInt(inpvalor_multa);
  var result_valorMulta = Number.parseInt(valor_boleto * inpvalor_multa) / 100;
  spanvalor_multa.innerHTML = parseFloat(result_valorMulta).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
} //Obtendo dias de atraso.


function diasDeAtraso() {
  var inputDataVencimento = document.getElementById('idDataVencimento').value;
  var inputDataPagamento = document.getElementById('idDataPagamento').value;
  var spanDiasAtraso = document.getElementById('spanDiasEmAtraso');
  inputDataVencimento = new Date(inputDataVencimento);
  inputDataPagamento = new Date(inputDataPagamento);
  var umDia = 24 * 60 * 60 * 1000;
  var diferençaDeTempo = Math.abs(inputDataPagamento - inputDataVencimento);
  var diferençaDeDias = Math.ceil(diferençaDeTempo / umDia);
  spanDiasAtraso.innerHTML = diferençaDeDias;
} //valor da mora.


function valorDaMora() {
  var inputValorMora = document.getElementById('idValorMora').value;
  var spanValorMora = document.getElementById('spanValorDaMora');
  inputValorMora = parseFloat(inputValorMora);
  spanValorMora.innerHTML = inputValorMora;
} //valor porcentagem do juros.


function valorDoJuros() {
  var inputDataVencimento = document.getElementById('idDataVencimento').value;
  var inputDataPagamento = document.getElementById('idDataPagamento').value;
  var inputValorMora = document.getElementById('idValorMora').value;
  var spanJuros = document.getElementById('spanValorJuros');
  inputValorMora = parseFloat(inputValorMora);
  inputDataVencimento = new Date(inputDataVencimento);
  inputDataPagamento = new Date(inputDataPagamento);
  var umDia = 1000 * 60 * 60 * 24;
  var diferençaDeTempo = Math.abs(parseFloat(inputDataPagamento - inputDataVencimento));
  var diferençaDeDias = Math.ceil(parseFloat(diferençaDeTempo / umDia));
  var result_valorJuros = parseFloat(diferençaDeDias * inputValorMora).toFixed(4);
  spanJuros.innerHTML = result_valorJuros;
} //valor do juros em dinheiro


function valorDoJurosEmdinheiro() {
  var inputDataVencimento = document.getElementById('idDataVencimento').value;
  var inputDataPagamento = document.getElementById('idDataPagamento').value;
  var valor_boleto = document.getElementById('idvalorBoleto').value;
  var inputValorMora = document.getElementById('idValorMora').value;
  var spanJurosDinheiro = document.getElementById('spanValorJurosEmDinheiro');
  valor_boleto = parseFloat(valor_boleto);
  inputValorMora = parseFloat(inputValorMora);
  inputDataVencimento = new Date(inputDataVencimento);
  inputDataPagamento = new Date(inputDataPagamento); //

  var umDia = 1000 * 60 * 60 * 24;
  var diferençaDeTempo = Math.abs(parseFloat(inputDataPagamento - inputDataVencimento));
  var diferençaDeDias = Math.ceil(parseFloat(diferençaDeTempo / umDia));
  var valorJuros = diferençaDeDias * inputValorMora;
  var resultado_valorJuros = parseFloat(valorJuros * valor_boleto / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  spanJurosDinheiro.innerHTML = resultado_valorJuros;
} //valor total da fatura 


function fun_valorTotal() {
  var inputDataVencimento = document.getElementById('idDataVencimento').value;
  var inputDataPagamento = document.getElementById('idDataPagamento').value;
  var valor_boleto = document.getElementById('idvalorBoleto').value;
  var inputValorMora = document.getElementById('idValorMora').value;
  var inpvalor_multa = document.getElementById('idvalorMulta').value;
  var spanValorTotal = document.getElementById('ValorTotal');
  valor_boleto = parseFloat(valor_boleto).toFixed(2);
  inpvalor_multa = parseInt(inpvalor_multa * valor_boleto) / 100;
  inputValorMora = parseFloat(inputValorMora);
  inputDataVencimento = new Date(inputDataVencimento);
  inputDataPagamento = new Date(inputDataPagamento); //

  var umDia = 1000 * 60 * 60 * 24;
  var diferençaDeTempo = Math.abs(inputDataPagamento - inputDataVencimento);
  var diferençaDeDias = Math.ceil(diferençaDeTempo / umDia);
  var result_valorJuros = diferençaDeDias * parseFloat(inputValorMora) * parseFloat(valor_boleto) / 100;
  var total = parseFloat(result_valorJuros) + parseFloat(valor_boleto);
  var total02 = parseFloat(total + inpvalor_multa);
  spanValorTotal.innerHTML = total02.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  console.log(valor_boleto);
  console.log(inputValorMora);
  console.log(inpvalor_multa);
}