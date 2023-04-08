$(document).ready(function(){
    $('.abrir').css('display','none')
    $('#topo').click(function(){
        if($('.conteudo').is(':visible')){
            $('.fechar').css('display','block')
            $('.abrir').css('display','none')
            $('.conteudo').hide(2000)
        }
        else{
            $('.fechar').css('display','none')
            $('.abrir').css('display','block')
            $('.conteudo').show(2000)
        }
    })

    $('.link').click(function(){
        var url ="http://viacep.com.br/ws/17050790/json/"
        $.get(
            url,
            function(data){
                console.log(data)
            }
        )
    })
})
