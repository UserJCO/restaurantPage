$contenedorHome = document.createElement("article");
$contenedorHome.className = "cuerpo";
contenedor.appendChild($contenedorHome);
$titulo1 = document.createElement("h1");
$titulo1.className = "titulo1";
$titulo1.innerHTML = "Healthy <br> Lunch";
$contenedorHome.appendChild($titulo1);
$titulo2 = document.createElement("h2");
$titulo2.className = "titulo2";
$titulo2.innerHTML = "FOR YOU";
$contenedorHome.appendChild($titulo2);
$parrafo = document.createElement("p");
$texto = document.createTextNode(
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat minus incidunt id fuga voluptate suscipit sapiente, quibusdam velit hic harum tenetur accusantium obcaecati, dolorem enim! Iure autem expedita recusandae dolores."
);
$texto.className = "articulo";
$contenedorHome.appendChild($parrafo);
$parrafo.appendChild($texto);
$boton = document.createElement("button");
$boton.className = "botonGrande";
$boton.setAttribute("type", "button");
$boton.setAttribute("onclick", "btnMenu()");
$boton.textContent = "CHECK OUR MENU";
$contenedorHome.appendChild($boton);
$pieDePagina = document.createElement("div");
$pieDePagina.className = "pie";
$contenedorHome.appendChild($pieDePagina);
$imgpie = document.createElement("img");
$imgpie.className = "salud";
$imgpie.setAttribute("alt", "colocar imagen de salud");
$imgpie.setAttribute("src", "./images/salud.png");
$pieDePagina.appendChild($imgpie);
$textoPie = document.createElement("p");
$textoPie.innerHTML = "Dine-in health <br> protocols";
$textoPie.className = "texto";
$pieDePagina.appendChild($textoPie);
function btnMenu(){
  window.open('./ourMenu.html', "_self");

}