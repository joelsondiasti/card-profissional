var select = document.getElementById("selector");

var img = document.getElementById("img");
var nome = document.getElementById("nome");
var profissao = document.getElementById("profissao");
var identity = document.getElementById("identity");
var bio = document.getElementById("bio");


select.addEventListener("change", async (event) => {
  event.defaultPrevented;

  var  valor = select.value
  await fetch(`http://10.0.0.151:3333/pessoas/${valor}`)
    .then((Response) => Response.json())
    .then((data) => {
      nome.innerText = data.nome;
      profissao.innerText = data.profissao;
      bio.innerText = data.bio;
      img.setAttribute("src", data.foto);
    });
});
