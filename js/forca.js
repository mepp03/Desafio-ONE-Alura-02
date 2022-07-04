var botaoIniciar = document.querySelector("#btn-iniciar");
var novaPalavra = document.querySelector("#input-nova-palavra");
var botaoAdicionar = document.querySelector("#btn-nova-palavra");
var botaoNovo = document.querySelector("#btn-novo");
var chute = document.querySelector("#input-chute");
var repetido = [];

novaPalavra.addEventListener("input", function ()
{
    var txt = this.value.toUpperCase();
    txt = txt.toUpperCase();
    this.value = txt.normalize('NFD').replace(/([\u0300-\u036f]|[^a-zA-Z\s])/g, '');
});

botaoIniciar.addEventListener("click", function (event)
{
    //esconder elementos
    botaoIniciar.classList.add("esconder");
    novaPalavra.classList.add("esconder");
    botaoAdicionar.classList.add("esconder");

    //mostrar input do chute
    chute.classList.remove("esconder");
    chute.style.width = "120px";
    chute.focus();

    //desenhar os "gráficos"
    desenharQuadro();
    desenharLetra();
    desenharEnforcado();

    console.log(segredo);
})

chute.addEventListener("input", function ()
{
    var txt = this.value.toUpperCase();
    this.value = txt.normalize('NFD').replace(/([\u0300-\u036f]|[^a-zA-Z])/g, "");
    txt = this.value;

    var i = 0;

    if (repetido.includes(txt))
    {
        console.log("repetido");
    } else
    {
        console.log("novo");
        repetido.push(txt);
        console.log(repetido);

        if (txt != "")
        {
            testarChute(txt);
            i++;
        }
    }
    chute.value = " ";
});

botaoNovo.addEventListener("click", function (event)
{
    window.location.reload();
})

novaPalavra.focus();
