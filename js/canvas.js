var tela = document.querySelector("#forca");
var pincel = tela.getContext("2d");
var posX = 450;
var posY = 500;
var segredo = "";
var posicaoXLetra = [];
var posicaoYLetra = [];

function desenharQuadro()
{
    pincel.fillStyle = "purple";
    pincel.fillRect(0, 0, 1200, 600);

    // desenhando chão
    {
    pincel.moveTo(500, 400);
    pincel.lineTo(700, 400);
    pincel.stroke();
    pincel.moveTo(500, 401);
    pincel.lineTo(700, 401);
    pincel.stroke();
    pincel.moveTo(500, 402);
    pincel.lineTo(700, 402);
    pincel.stroke();
    };
}

function desenharLetra()
{
    var segredox = escolher();
    segredo = segredox;
    var array =  [];
    for (var i = 0; i < segredo.length; i++)
    {
        array.push(segredo[i]);
    };

    array.forEach((letra) =>
    {
        posicaoXLetra.push(posX);
        posicaoYLetra.push(posY);
        pincel.moveTo(posX, posY + 5);
        pincel.lineTo(posX + 60, posY + 5);
        pincel.stroke();
        posX = posX + 75;
    });
}

function desenharEnforcado(erro, letraErrada)
{
    if (erro == 1)
    {
        // desenhando poste
        {
        pincel.moveTo(550, 400);
        pincel.lineTo(550, 150);
        pincel.stroke();
        pincel.moveTo(551, 400);
        pincel.lineTo(551, 150);
        pincel.stroke();
        pincel.moveTo(552, 400);
        pincel.lineTo(552, 150);
        pincel.stroke();
      };

        // desenhando viga
        {
        pincel.moveTo(550, 150);
        pincel.lineTo(650, 150);
        pincel.stroke();
        pincel.moveTo(550, 151);
        pincel.lineTo(650, 151);
        pincel.stroke();
        pincel.moveTo(550, 152);
        pincel.lineTo(650, 152);
        pincel.stroke();
      };

        // desenhando corda
        {
        pincel.moveTo(649, 150);
        pincel.lineTo(649, 175);
        pincel.stroke();
        pincel.moveTo(650, 150);
        pincel.lineTo(650, 175);
        pincel.stroke();
        pincel.moveTo(651, 150);
        pincel.lineTo(651, 175);
        pincel.stroke();
      };

        //desenhando letra errada
        pincel.fillStyle = "white";
        pincel.font = "70px Arial";
        pincel.fillText(letraErrada, 700, 250);
    };

    if (erro == 2)
    {
        //desenhando cabeça
        {
        pincel.beginPath();
        pincel.arc(651, 200, 25, 0, 2 * 3.14);
        pincel.stroke();
        pincel.beginPath();
        pincel.arc(651, 200, 26, 0, 2 * 3.14);
        pincel.stroke();
        pincel.beginPath();
        pincel.arc(651, 200, 27, 0, 2 * 3.14);
        pincel.stroke();
        };

        //desenhando letra errada
        pincel.fillStyle = "white";
        pincel.font = "70px Arial";
        pincel.fillText(letraErrada, 760, 250);
    };

    if (erro == 3)
    {
        //desenhando tronco
        {
        pincel.moveTo(649, 225);
        pincel.lineTo(649, 320);
        pincel.stroke();
        pincel.moveTo(650, 225);
        pincel.lineTo(650, 320);
        pincel.stroke();
        pincel.moveTo(651, 225);
        pincel.lineTo(651, 320);
        pincel.stroke();
        };

        //desenhando letra errada
        pincel.fillStyle = "white";
        pincel.font = "70px Arial";
        pincel.fillText(letraErrada, 820, 250);
    };


    if (erro == 4)
    {
        //desenhando braço esquerda
        {
        pincel.moveTo(649, 235);
        pincel.lineTo(620, 275);
        pincel.stroke();
        pincel.moveTo(650, 235);
        pincel.lineTo(621, 275);
        pincel.stroke();
        pincel.moveTo(651, 235);
        pincel.lineTo(622, 275);
        pincel.stroke();
        };

        //desenhando letra errada
        pincel.fillStyle = "white";
        pincel.font = "70px Arial";
        pincel.fillText(letraErrada, 880, 250);
    };


    if (erro == 5)
    {
        //desenhando perna esquerdo
        {
        pincel.moveTo(649, 320);
        pincel.lineTo(620, 360);
        pincel.stroke();
        pincel.moveTo(650, 320);
        pincel.lineTo(621, 360);
        pincel.stroke();
        pincel.moveTo(651, 320);
        pincel.lineTo(622, 360);
        pincel.stroke();
        };
        //desenhando letra errada
        pincel.fillStyle = "white";
        pincel.font = "70px Arial";
        pincel.fillText(letraErrada, 940, 250);
    };


    if (erro == 6)
    {
        //desenhando braço direito
        {
        pincel.moveTo(649, 235);
        pincel.lineTo(678, 275);
        pincel.stroke();
        pincel.moveTo(650, 235);
        pincel.lineTo(679, 275);
        pincel.stroke();
        pincel.moveTo(651, 235);
        pincel.lineTo(680, 275);
        pincel.stroke();
        };

        //desenhando letra errada
        pincel.fillStyle = "white";
        pincel.font = "70px Arial";
        pincel.fillText(letraErrada, 1000, 250);
    };


    if (erro == 7)
    {
        //desenhando perna direita
        {
        pincel.moveTo(649, 320);
        pincel.lineTo(678, 360);
        pincel.stroke();
        pincel.moveTo(650, 320);
        pincel.lineTo(679, 360);
        pincel.stroke();
        pincel.moveTo(651, 320);
        pincel.lineTo(680, 360);
        pincel.stroke();
        };

        //desenhando letra errada
        pincel.fillStyle = "white";
        pincel.font = "70px Arial";
        pincel.fillText(letraErrada, 1060, 250);
    };

}
