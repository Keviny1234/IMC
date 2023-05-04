const btn = document.getElementById("btn");

const sexo = document.getElementById("sexo");

const altura = document.getElementById("altura");

const peso = document.getElementById("peso");

const resultado = document.getElementById("resultado");

const imagemResultado = document.getElementById("imagemresultado");

btn.addEventListener("click", (e) => {
    e.preventDefault();
   const imc = peso.value / (altura.value * altura.value);
   resultado.innerHTML = "Seu IMC é " + imc.toFixed(2);
   if (sexo.value == "masculino"){
     if (imc < 18.5){
         imagemResultado.innerHTML = '<img src="imagem/png1.png" alt="magreza">';
     } else if(imc > 18.5 && imc <= 24.9) {
         imagemResultado.innerHTML = '<img src="imagem/png2.png" alt="magra">';   
     } else if(imc > 24.9 && imc <= 29.9) {
         imagemResultado.innerHTML = '<img src="imagem/png3.png" alt="normal">';
     } else if(imc > 29.9 && imc <= 39.9) { 
         imagemResultado.innerHTML = '<img src="imagem/png4.png" alt="sobre peso">';
    } else if(imc => 40 ) {
         imagemResultado.innerHTML = '<img src="imagem/png5.png" alt="obesidade">';
    }  

} else {
    if (sexo.value == "feminino")
     if (imc < 18.5) {
        imagemResultado.innerHTML = '<img src="imagem/png6.png" alt="magreza">';         
     } else if(imc > 18.5 && imc <= 24.9) {
        imagemResultado.innerHTML = '<img src="imagem/png7.png" alt="magra">';  
     } else if(imc > 25 && imc <= 29.9) {
        imagemResultado.innerHTML = '<img src="imagem/png8.png" alt="normal">';  
     } else if(imc > 30 && imc <= 34.9) {
        imagemResultado.innerHTML = '<img src="imagem/png9.png" alt="sobre peso">'; 
     } else if(imc > 35 && imc <= 39.9) {
        imagemResultado.innerHTML = '<img src="imagem/png10.png" alt="obesidade 1">';  
     } else if(imc >= 40) {
        imagemResultado.innerHTML = '<img src="imagem/png11.png" alt="obesidade 2">';  
     }

    
  }
})




