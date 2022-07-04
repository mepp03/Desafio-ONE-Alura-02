var segredos = ["BANANA", "BISCOITO", "CELULAR", "OLHO", "MESA", "CARTA", "AMOR", "ROXO", "RECHEADO"];
var tentativas = 0;
var acertos = 0;

function adicionar(frase)
{
    segredos.push(frase);
}

function escolher()
{
    return segredos[Math.floor(Math.random() * segredos.length)];
}

botaoAdicionar.addEventListener("click", function(event)
{
    adicionar(novaPalavra.value);
    novaPalavra.value = "";
    novaPalavra.focus();
});

function testarChute(letra)
{
  var limite = 0;

  for (var i = 0; i < segredo.length; i++)
  {
      if (segredo[i] == letra)
      {
          pincel.fillStyle = "white";
          pincel.font = "70px Arial";
          pincel.fillText(letra, posicaoXLetra[i], posicaoYLetra[i]);

          acertos ++;

          if (acertos == segredo.length)
          {
              pincel.fillStyle = "green";
              pincel.font = "70px Arial";
              pincel.fillText("Você Venceu. Parabéns!", 200, 100);

              chute.classList.add("esconder");
              botaoNovo.classList.remove("esconder");
          }
      }
      else
      {
          limite++;
      }

      if (limite >= segredo.length)
      {
          tentativas++;
          desenharEnforcado(tentativas, letra);
      }

      if (tentativas >= 7)
      {
          pincel.fillStyle = "red";
          pincel.font = "70px Arial";
          pincel.fillText("Perdeste! :(", 420, 100);

          chute.classList.add("esconder");
          botaoNovo.classList.remove("esconder");
      }
  };
}
