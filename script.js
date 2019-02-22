 $(function(){


    $('button').bind('click', function(){

        var altura = $('#altura').val();
        var peso =$('#peso').val();

        altura = altura.replace(',', '.');
        //IMC = peso (quilos) ÷ altura² (metros)

        var imc = peso / (altura*altura);

        $('#resultado').html("Seu IMC é : "+imc+" kg/m²");

    })

 })