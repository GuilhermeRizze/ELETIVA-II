//criando um localStorage
var itens
function carregar (){
    itens = localStorage.getItem("AulaEletiva")
    if (itens == null || itens == undefined){
        var vetor =[
            {
                nome: "Guilherme",
                idade: 20,
                cores: ['verde', 'branco']
            },
            {
                nome: "Josefina",
                telefone: "1111-12-01",
                cores: ['roxo', 'amarelo']
            }
        ]
        itens = vetor
        localStorage.setItem("AulaEletiva",JSON.stringify(vetor))
        alert('criado')
    }else{
    itens = JSON.parse(itens)

    itens.forEach( obj => {
        var div = document.getElementById("nome")
        div.append(obj.nome + "<br/>")
    })
    }
}

carregar()

var salvar = () => { 
    var nome = document.getElementById("firstname").value
    var idade = document.getElementById("idade").value

    console.log(itens)

    var save = {
        nome, 
        idade: idade
    }

    console.log("--------------------")

    itens.push(save)
    console.log(itens)
}