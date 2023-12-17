const contenedor = document.querySelector("#content");
$head = document.createElement("div");
$head.className = "encabezado";
contenedor.appendChild($head);
$logo = document.createElement("div");
$logo.className = "logo";
$head.appendChild($logo);
$imgLogo = document.createElement("img");
$imgLogo.setAttribute("src", "./images/dinner.png");
$logo.appendChild($imgLogo);
$tituloLogo = document.createElement("h1");
$tituloLogo.innerHTML = "Healthy Lunch";
$logo.appendChild($tituloLogo);
$subTituloLogo = document.createElement("h2");
$subTituloLogo.innerHTML = "For You";
$logo.appendChild($subTituloLogo);
$bloqueIzq = document.createElement("div");
$bloqueIzq.className = "menuIzq";
$head.appendChild($bloqueIzq);
$idioma = document.createElement("div");
$idioma.className = "idioma";
$bloqueIzq.appendChild($idioma);
$divEsp = document.createElement("div");
$idioma.appendChild($divEsp);
$espanol = document.createElement("a");
$espanol.innerHTML = "Español";
$espanol.setAttribute("href", "./images/home.htlm");
$divEsp.appendChild($espanol);
$divIng = document.createElement("div");
$idioma.appendChild($divIng);
$ingles = document.createElement("a");
$ingles.innerHTML = "Ingles";
$ingles.setAttribute("href", "./images/home.html");
$divIng.appendChild($ingles);
$redes = document.createElement("div");
$redes.className = "redes";
$bloqueIzq.appendChild($redes);
const redes = [
  { nombre: "facebook", link: "https://www.facebook.com/", imagen: "./images/face.jpg" },
  { nombre: "instagram", link: "https://www.instagram.com/", imagen: "./images/insta.jpg" },
  { nombre: "twiter", link: "https://twitter.com", imagen: "./images/twi.jpg" },
  { nombre: "wathsapp", link: "https://web.whatsapp.com/", imagen: "./images/wasap.jpg" },
];
redes.forEach((red) => {
  $listaRed = document.createElement("a");
  $redes.appendChild($listaRed);
  $imgLista = document.createElement("img");
  $listaRed.appendChild($imgLista);
  $imgLista.setAttribute("src", red.imagen);
  $listaRed.setAttribute("href", red.link);
  $listaRed.setAttribute("alt", red.nombre);
  $listaRed.setAttribute('target', '_blank')
});
$domicilio = document.createElement("div");
$domicilio.className = "domicilio";
$bloqueIzq.appendChild($domicilio);
$domicilioLink = document.createElement("a");
$domicilioLink.innerHTML = "Domicilio en Trelew, Chubut";
$domicilioLink.setAttribute("href", "https://maps.app.goo.gl/8VmYq9aYxmfh7QdR8");
$domicilioLink.setAttribute('target', '_blank')
$domicilio.appendChild($domicilioLink);
$nav = document.createElement("nav");
$nav.className = "menu";
contenedor.appendChild($nav);
$listaDeNav = document.createElement("ul");
$nav.appendChild($listaDeNav);
const menuNav = [
  { titulo: "HOME", url: "./index.html" },
  { titulo: "OUR MENU", url: "./ourMenu.html" },
  { titulo: "SERVICE", url: "./service.html" },
  { titulo: "ABOUT", url: "./images/index.html" },
  { titulo: "DELIVERY", url: "./images/index.html" },
  { titulo: "RESERVATION", url: "./reserva.html" },
];
menuNav.forEach((items) => {
  $lista = document.createElement("li");
  $listaDeNav.appendChild($lista);
  $itemNav = document.createElement("a");
  $lista.appendChild($itemNav);
  $icoNav=document.createElement('span');
  $icoNav.setAttribute('src','#');
  $itemNav.appendChild($icoNav);
  $textNav=document.createElement('span');
  $textNav.innerHTML = items.titulo;
  $itemNav.setAttribute("href", items.url);
  $itemNav.appendChild($textNav);

});