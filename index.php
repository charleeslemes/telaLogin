<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="css/style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <title>Login</title>
</head>
<body>

    <main>

        <div class="login">

       

        <div class="formulario">

        <div class="logo"></div><!--logo-->
            <form id="form1">
            <span>Login</span>
           <div> <input type="text" name="login" ></div>
           <span>Senha</span>
           <div><input type="password" name="senha" ></div>
           <span class="invalido">*Min 4 números e max 6</span>

           <div><input type="submit" name="acao" value="Entrar"></div> 
           <span class="invalido">*E-mail ou Senha Incorretos</span>

            </form>


            <p>Problemas para entrar?</p>
            <a href="#">Clique aqui</a>

        </div><!--formulario-->

    <div class="clear"></div>

        

        </div><!--login-->

        <div class="banner">
            <div class="img-banner"></div><!--img-banner-->

        </div><!--banner-->

    </main>


    <script src="js/jquery.js"></script>
   <script src="js/functions.js"></script>
  
</body>
</html>