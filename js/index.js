//are destinada as funções ==>
const valueOfBillet = () => {
  let valueBillet = document.getElementById('valorBole'),
      spanValueBillet = document.getElementById('vaBoleto');
      spanValueBillet.innerHTML = Number(valueBillet.value).toLocaleString("pt-BR", {
      style:"currency", currency:"BRL"});
};

const conDaysLate = () => {
  let dueDate = document.getElementById('dataVenc');
  let paymentDate = document.getElementById('dataPag');
  let spanDaysLate = document.getElementById('diasAtraso');
  dueDate = new Date(dueDate.value)
  paymentDate = new Date(paymentDate.value)
  let onyDay = 86400000; //converted values of dates/one day 1000*60*60*24.
  let differingTime = Math.abs(paymentDate - dueDate);
  //I calculate to obtain the time difference between two dates
  spanDaysLate.innerHTML = Math.ceil(differingTime / onyDay);
};

//valor da multa convertido em reais.
const fu_fineAmount = () => {
  let spanfineAmount = document.getElementById('vMulta');
  let fineAmount = document.getElementById('valorMul');
  let valueOfBillet = document.getElementById('valorBole');
  spanfineAmount.innerHTML = ((valueOfBillet.value * fineAmount.value)/100).toLocaleString('pt-BR', {
    "style":'currency', "currency":'BRL'
  });
}

//valor da mora.
const fu_valueLives = () => {
  let valueLives = document.getElementById('valorMor');
  let spanValueLives = document.getElementById('vMora');
  spanValueLives.innerHTML = (valueLives.value);
};

function fu_interestDays (){
  //calculo para se obter a quantidade de dias.
  let spanInterestAmount = document.getElementById('qtd_JurosDias');
  let dueDate =  document.getElementById('dataVenc');
  let payMeantDate  =  document.getElementById('dataPag');
  let oneDay = (86400000)

  let differenceTime = Math.abs(new Date(payMeantDate.value) - new Date(dueDate.value))
  let differenceDays  = Math.ceil(differenceTime / oneDay);

//calculo para se obter a mora.
  let valueLives = document.getElementById('valorMor');
  spanInterestAmount.innerHTML = ((differenceDays) * (valueLives.value)).toFixed(3)
}

/*function fu_vjurosEmDinheiro (){
  var spanValorJurosEmDinheiro = document.getElementById('vJ_emDinheiro');
  var valorDoBoleto = document.getElementById('valorBole');
  resu_valorDoBoleto = Number(valorDoBoleto.value).toFixed(2)
//calculo para se obter a quantidade de dias.
  var dataVencimento = document.getElementById('dataVenc');
  var dataPagamento = document.getElementById('dataPag');
  dataVencimento = new Date(dataVencimento.value)//resgatando valor colocado em data de vencimento.
  dataPagamento = new Date(dataPagamento.value)//resgatando valor colocado em data de pagamento.
  var umDia = 1000*60*60*24; //calculo para se obter o valor correspondente a um dia desde de 1970
  var diferença_tempo = Math.abs(dataPagamento - dataVencimento); //calculo para se obter a diferença de tempo entre duas datas 
  var diferença_dias = Math.ceil(diferença_tempo / umDia);//calculo para se obter a diferença de dias entre duas datas 
  var resultado_diferença_Dias = diferença_dias;
//calculo para se obter a mora.
  var valorDaMora = document.getElementById('valorMor');
  var valorDaMora = (valorDaMora.value)
  var quantidadeDeJuros = parseFloat(resultado_diferença_Dias * valorDaMora).toFixed(4)
  var valorJurosEmDinheiro = parseFloat(quantidadeDeJuros * resu_valorDoBoleto)/100;
  spanValorJurosEmDinheiro.innerHTML = (valorJurosEmDinheiro).toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
}

function fu_valorBoComvalorMo (){
  var spanValorBoletoMaisValorMora = document.getElementById('valorBoMo')
  var dataVencimento = document.getElementById('dataVenc');
  var dataPagamento = document.getElementById('dataPag');
  dataVencimento = new Date(dataVencimento.value)//resgatando valor colocado em data de vencimento.
  dataPagamento = new Date(dataPagamento.value)//resgatando valor colocado em data de pagamento.
  var umDia = 1000*60*60*24; //calculo para se obter o valor correspondente a um dia desde de 1970
  var diferença_tempo = Math.abs(dataPagamento - dataVencimento); //calculo para se obter a diferença de tempo entre duas datas 
  var diferença_dias = Math.ceil(diferença_tempo / umDia);//calculo para se obter a diferença de dias entre duas datas 
  var resultado_diferença_Dias = diferença_dias;
  var valorDoBoleto = document.getElementById('valorBole');//resgata o valor do boleto 
  resu_valorDoBoleto = Number(valorDoBoleto.value)
//calculo para se obter a mora.
  var valorDaMora = document.getElementById('valorMor');
  var valorDaMora = (valorDaMora.value)
  var quantidadeDeJuros = parseFloat(resultado_diferença_Dias * valorDaMora).toFixed(4)
  var valorJurosEmDinheiro = parseFloat(quantidadeDeJuros * resu_valorDoBoleto)/100;
  var valorDaMoraMaisValorBoleto =  (resu_valorDoBoleto + valorJurosEmDinheiro);
  spanValorBoletoMaisValorMora.innerHTML = (valorDaMoraMaisValorBoleto).toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
}
  
function fu_valorTotal(){
  var spanValorTotal = document.getElementById('valorTotal');
  var spanValorBoletoMaisValorMora = document.getElementById('valorBoMo')
  var dataVencimento = document.getElementById('dataVenc');
  var dataPagamento = document.getElementById('dataPag');
  dataVencimento = new Date(dataVencimento.value)//resgatando valor colocado em data de vencimento.
  dataPagamento = new Date(dataPagamento.value)//resgatando valor colocado em data de pagamento.
  var umDia = 1000*60*60*24; //calculo para se obter o valor correspondente a um dia desde de 1970
  var diferença_tempo = Math.abs(dataPagamento - dataVencimento); //calculo para se obter a diferença de tempo entre duas datas 
  var diferença_dias = Math.ceil(diferença_tempo / umDia);//calculo para se obter a diferença de dias entre duas datas 
  var resultado_diferença_Dias = diferença_dias;
  var valorDoBoleto = document.getElementById('valorBole');//resgata o valor do boleto 
  resu_valorDoBoleto = Number(valorDoBoleto.value)
//calculo para se obter a mora.
  var valorDaMora = document.getElementById('valorMor');
  var valorDaMora = (valorDaMora.value)
  var quantidadeDeJuros = parseFloat(resultado_diferença_Dias * valorDaMora).toFixed(4)
  var valorJurosEmDinheiro = parseFloat(quantidadeDeJuros * resu_valorDoBoleto)/100;
  var valorDaMoraMaisValorBoleto =  (resu_valorDoBoleto + valorJurosEmDinheiro);

  var valorDaMulta = document.getElementById('valorMul')//declarando variaveis valor do boleto.;
  var valorDoBoleto = document.getElementById('valorBole')//resgatando o valor colocado valor da multa.;
  var valorDaMulta = parseInt(valorDaMulta.value)
  var valorDoBoleto = Number(valorDoBoleto.value)
  var valorEmReais = (valorDoBoleto * valorDaMulta)/100
  var valorDaMultaMaisValorDoBoletoComMora = (valorDaMoraMaisValorBoleto + valorEmReais)
  spanValorTotal.innerHTML = (valorDaMultaMaisValorDoBoletoComMora).toLocaleString('pt-BR', {style:'currency', currency:'BRL'})
}
*/