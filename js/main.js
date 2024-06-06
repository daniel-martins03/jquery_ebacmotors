$(document).ready(function(){
    $('#caurosel-imgs').slick({
        autoplay: true,
        arrows: false
    })

    
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000 '
    })

    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        messages:{
            nome: 'Campo obrigatorio',
            telefone: 'Campo obrigatorio',
            email: 'Campo obrigatorio',
            mensagem: 'Campo obrigatorio',
        },
        submitHandler: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato')
        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#Veículo-de-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
    
    $('form').on('submit', function(e){
        e.preventDefault()
    })

})
