$(function(){
    

    function validacaoIncorretaEmail(erro){
        erro.css('border','2px solid #FF5757 ');
        erro.css('color', '#FF5757');
        erro.val('exemplo@exemplo.com');

    }

    function validacaoIncorretasenha(erro){
        erro.css('border','2px solid #FF5757 ');
        erro.css('color', '#FF5757');
        erro.val('Min 4 números max 6 ** apenas números');

    }

    function resetValidacao(erro){
        erro.css('border','1px solid white');
        erro.css('color', 'white');
        erro.val('');
        erro.css

    }

    $('input[type=text], input[type=password]').focus(function(){
        resetValidacao($(this));
    });


    $('form#form1').submit(function(){
        
        var login = $('input[name=login]').val();
        var senha = $('input[name=senha]').val();

            if(validacaoLogin(login) == false){
                validacaoIncorretaEmail($('input[name=login]'));
                return false;
            }

            else if(validacaoPassword(senha) == false){
                validacaoIncorretasenha($('input[name=senha]'));
                $('form .invalido').css('display','block');
                return false;
            }
            else{
                $('form .invalido').css('display','none');
                $('form input[type=submit').css('backgroundColor','green');
                $('form input[type=text').css('backgroundColor','green');
                $('form input[type=password').css('backgroundColor','green');
          
            }
    });


    function validacaoLogin(login){
        if(login == ''){
            return false;
        }

        if(login.match(/^([a-z0-9-_.]{1,})+@+([a-z.]{1,})$/) == null){
            return false;
        }
    }



    /*funcão da senha */


    function validacaoPassword(senha){
        if(senha == ''){
            return false;
        }

        if(senha.match(/^[0-9]{4,6}$/) == null){
                return false;
        }
    }

})