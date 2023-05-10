$(document).ready(function() {
    $('#texto').keypress(function( e ) {
        if ( e.which == 13 )
        {
            var texto = this.value

            AddMensagem('pessoa', texto)

            setTimeout( () => {
                botFala(texto)
            }, 2000)
        }
    })
})

var p_atual = ''
var iniciou = false
// colocar um if para aceitar valores até 04
// sempre que tiver um 0 reduzir um nivel
function botFala(resposta)
{
    if (p_atual == '' && iniciou==false)
    {
        var resp = perguntas[0][1]
        iniciou = true
    }
    else 
    {
        if(resposta <= 4){
            console.log(p_atual)
            if(resposta == 0){
                p_atual = p_atual.substring(0, p_atual.length - 3)
                console.log(p_atual)
            }else{
                p_atual += resposta
            }
            var resp = perguntas.filter( linha => {
                if (linha[0] == p_atual)
                    return linha[1]
            })
            p_atual += "."
            console.log(p_atual)
        }
        else{
            AddMensagem('bot', "Opção digitada não encontrada, por favor reinicie o bot")
        }
    }
    AddMensagem('bot', resp)
}

function AddMensagem(classe, texto)
{
    var div = document.createElement("div") 
    $(div).addClass(classe)
        .html(texto)
        
    $('#mensagens').append(div)
}

var perguntas = [
    [ "0", "Olá sou o bot da ITE<br>Escolha uma das" +
            "opções abaixo<br>" +
            "1 - Coordenação<br>" +
            "2 - Secretarias<br>" +
            "3 - Flávio Toledo<br>" 
    ],
    [ "1", "Escolha o coordenador<br>"+
            "1 - Talon<br>" +            
            "2 - Edson Mitsuya<br>" +            
            "3 - Marcão<br>" +            
            "4 - Salete<br>"             
    ],
    [ "1.1", "Sobre o Talon, você quer?<br>"+
            "1 - Telefone<br>" +            
            "2 - Whataspp<br>" +            
            "3 - Telegram<br>" +            
            "4 - E-mail<br>"             
    ],
    [ "1.1.1", "Os telefones do Talon são:<br>"+
            "1 - 190<br>" +            
            "2 - 1499985478745<br>" +            
            "3 - 14 235478965<br>" +            
            "0 - Voltar<br>"             
    ],
    [ "1.2", "Sobre o Edson Mitsuya, você quer?<br>"+
            "1 - Telefone<br>" +            
            "2 - Whataspp<br>" +            
            "3 - Telegram<br>" +            
            "4 - E-mail<br>"             
    ]

]