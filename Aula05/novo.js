//criando um localStorage
var ceps
function carregar (){
    ceps = localStorage.getItem("ConsultaCEP")
    if (ceps == null || ceps == undefined){
        var vetor =[
            {
                cep: "CEP",
                log: "Logradouro",
                bairro: "Bairro",
                cidade: "Cidade",
                estado: "Estado"
            },
            
        ]
        ceps = vetor
        localStorage.setItem("ConsultaCEP",JSON.stringify(vetor))
        alert('criado')
    }else{
    ceps = JSON.parse(ceps)

    ceps.forEach( obj => {
        var div = document.getElementById("nome")
        div.append(obj.nome + "<br/>")
    })
    }
}

carregar()

var salvar = () => { 
    var nome = document.getElementById("firstname").value
    var idade = document.getElementById("idade").value

    console.log(ceps)

    var save = {
        nome, 
        idade: idade
    }

    console.log("--------------------")

    ceps.push(save)
    console.log(ceps)
}