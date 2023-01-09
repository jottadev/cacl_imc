let inpPeso = document.querySelector('#inpPeso')
let inpAltura = document.querySelector('#inpAltura')
let resultado = document.querySelector('#resultado')    
let btnCalcular = document.querySelector('.btnCalcular')

//Função de calcular
function calculoImc(){
    peso = Number(inpPeso.value)
    altura = Number(inpAltura.value)

    if(peso == ""){
        resultado.textContent = `Peso inválido`
        resultado.style.backgroundColor = '#ff3333'
        peso.focus()
        return;
    } else if(altura == ""){
        resultado.textContent = `Altura inválida`
        resultado.style.backgroundColor = '#ff3333'
        altura.focus()
        return;
    } else{
        calcImc = peso / Math.pow(altura, 2)
        resultado.textContent = `Seu IMC: ${(calcImc.toFixed(2))}`
        resultado.style.backgroundColor = '#22bb33'
    }

    
    if(calcImc < 18.5){
        resultado.textContent = `Seu IMC: ${(calcImc.toFixed(2))} - Abaixo do peso`
    } else if(calcImc > 18.5 && calcImc <= 24.9){
        resultado.textContent = `Seu IMC: ${(calcImc.toFixed(2))} - Peso normal`
    } else if(calcImc > 25 && calcImc <= 29.9){
        resultado.textContent = `Seu IMC: ${(calcImc.toFixed(2))} - Sobrepeso`
    } else if(calcImc > 30 && calcImc <= 34.9){
        resultado.textContent = `Seu IMC: ${(calcImc.toFixed(2))} - Obesidade Grau I`
    } else if(calcImc > 35 && calcImc <= 39.9){
        resultado.textContent = `Seu IMC: ${(calcImc.toFixed(2))} - Obesidade Grau II`
    } else if(calcImc >= 40 ){
        resultado.textContent = `Seu IMC: ${(calcImc.toFixed(2))} - Obesidade Grau III`
    } else{
        resultado.textContent = `Erro ao calcular seu IMC, tente novamente.`
    }
}
btnCalcular.addEventListener('click', calculoImc)




//Função de resetar os campos
let btnReset = document.querySelector('.btnLimpar')
function reset(){
    inpPeso = document.querySelector('#inpPeso').value = ""
    inpAltura = document.querySelector('#inpAltura').value = ""
    resultado = document.querySelector('#resultado').textContent = ""   
    resultado = document.querySelector('#resultado').style.backgroundColor = "#ffffff"   
    location.reload()
}
btnReset.addEventListener('click', reset)

