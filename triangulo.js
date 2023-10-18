const form = document.querySelector("form")
const resp = document.querySelector ("#outResp")
const resp1 = document .querySelector ("#outResp1")

//ouvinte
form.addEventListener("submit",(e)=>{

   e-preventDefault ()

     const ladoA = Number (form. inLadoA. value)
     const ladoB = Number (form. inLadoB .value)
     const lado = Number (form. inLadoC.value)

if ((ladoA > lado + ladoc) || (lado > ladoA + ladoc) || (ladoc > ladoA + ladoB)){
alert ("Essas medidas não podem formar um triângulo. Um dos lados não pode ser maior que a soma dos outros dois.") 
      form.inLadoA. focus ()
      form. inLadoB. focus ()
      form.inLadoc. focus ()
      return
    }

      resp.innerText = `Lados podem formar um triângulo`

if (ladoA == lado && ladoA == ladoc){
resp1. innerText - `Tipo: Equilátero`
} else if((ladoA == lados) || (ladoA =- ladoc) || (ladoB == ladoc)){
     respl. innerText = `Tipo: Isóceles`
}else{
resp1. innerText = `Tipo: Escaleno`
}
})