const contenedor = document.querySelector("#content");
$contenedorIzq = document.createElement("div");
$contenedorIzq.className = "contentLeft";
contenedor.appendChild($contenedorIzq);
$menuNavegacion = document.createElement("nav");
$menuNavegacion.className = "navigationBar";
$contenedorIzq.appendChild($menuNavegacion);

$listaDeNav = document.createElement("ul");
$listaDeNav.className = "navigationList";
$menuNavegacion.appendChild($listaDeNav);
const nav = [
  { titulo: "HOME", url: "./index.html" },
  { titulo: "OUR MENU", url: "./ourMenu.html" },
  { titulo: "SERVICE", url: "./index.html" },
  { titulo: "ABOUT", url: "./index.html" },
  { titulo: "DELIVERY", url: "./index.html" },
  { titulo: "RESERVATION", url: "./index.html" },
];
nav.forEach((items) => {
  $lista = document.createElement("li");
  $lista.className = "navegacion";
  $listaDeNav.appendChild($lista);
  $itemNav = document.createElement("a");
  $lista.appendChild($itemNav);
  $itemNav.textContent = items.titulo;
  $itemNav.setAttribute("href", items.url);
});
$bloqueCuerpo = document.createElement("div");
$bloqueCuerpo.className = "bloqueCuerpo";
$contenedorIzq.appendChild($bloqueCuerpo);
$bloqueIzq = document.createElement("div");
$bloqueIzq.className = "blockLeft";
$bloqueCuerpo.appendChild($bloqueIzq);
$titulo1 = document.createElement("h1");
$titulo1.className = "titulo1";
$titulo1.innerHTML = "Healthy <br> Lunch";
$bloqueIzq.appendChild($titulo1);
$titulo2 = document.createElement("h2");
$titulo2.className = "titulo2";
$titulo2.innerHTML = "FOR YOU";
$bloqueIzq.appendChild($titulo2);
const almuerzoCenas = [
  "Entradas",
  "Ensaladas",
  "Principales",
  "Carnes Frescas",
  "Carnes Maduras",
  "Guarniciones",
  "Postres",
];
almuerzoCenas.forEach((items) => {
  $listaMenu = document.createElement("li");
  $listaMenu.className = "menuCena";
  $bloqueIzq.appendChild($listaMenu);
  $listaMenu.textContent = items;
});
const entradas = [
  {
    titulo: "Embutidos Artesanales Abrasado",
    precio: 4500,
    descripcion: "embutidos con tomate cherry, brotes y aceite de oliva",
    imagen: "",
  },
  {
    titulo: "Empanada mendocina de ojo de bife",
    precio: 4500,
    descripcion: "empanada frita de ojo de bife acompañada con salsa criolla",
    imagen: "",
  },
  {
    titulo: "Selección de quesos",
    precio: 5400,
    descripcion: "tabla de quesos, cherry, brotes y aceite de oliva",
    imagen: "",
  },
  {
    titulo: "Carpaccio fresco sobre espejo de oliva",
    precio: 6400,
    descripcion:
      "Crema de zanahoría y lima, huevo de codorniz y helado de ajo negro",
    imagen: "",
  },
  {
    titulo: "Molleja 3 días inoculada en koji",
    precio: 7100,
    descripcion: "Kimchi, cremoso de pera y Extra Brut Mosquita Muerta",
    imagen: "",
  },
  {
    titulo: "Ostras frescas",
    precio: 7300,
    descripcion:
      "Ostras frescas con frutilla y aceto balsámico Millán y gremolata de almen dras tostadas *Sujeto a disponibilidad",
    imagen: "",
  },
];
const ensalada = [
  {
    titulo: "Ensalada de hidropónicas",
    precio: 11200,
    descripcion:
      "Rúcula, espinaca, huevo crocante a baja, palta, queso Morbier, hoja de kale y vinagreta de frutos rojos.",
    imagen: "",
  },
];
const principales = [
  {
    titulo: "Risotto de rabo",
    precio: 17100,
    descripcion: "Cebollas glaseadas y emulsión de gorgonzolas",
    imagen: "",
  },
  {
    titulo: "Panzotti de pimiento y espinaca",
    precio: 16000,
    descripcion: "Relleno de provolone y tomates, salteado en suero de queso",
    imagen: "",
  },
  {
    titulo: "Chernia en dos cocciones",
    precio: 25600,
    descripcion:
      "Puré de coliﬂor y chocolate blanco/gremolata/ emulsión de alga nori",
    imagen: "",
  },
  {
    titulo: "Tentáculo de pulpo con huevo ajitsuke",
    precio: 21000,
    descripcion: "Papa bouchon, granola de aceite de sésamo y crema huancaína.",
    imagen: "",
  },
  {
    titulo: "Pasta casera con estofado de la nona",
    precio: 15100,
    descripcion: "Cintas 100% huevo, estofado casero con ojo de bife",
    imagen: "",
  },
  {
    titulo: "Salmón marinado",
    precio: 23500,
    descripcion: "Cremoso de frijoles y huevas de arenque",
    imagen: "",
  },
];
const carnesFrescas = [
  {
    titulo: "Entraña trenzada",
    precio: 23500,
    descripcion: "Corte de 300 gr. / Criolla de frutilla y vinagre de jerez.",
    imagen: "",
  },
  {
    titulo: "Ojo de bife Black Angus",
    precio: 18200,
    descripcion: "Con hueso. Corte de 450 gr",
    imagen: "",
  },
  {
    titulo: "Filet fresco",
    precio: 20200,
    descripcion: "Corte de 300 gr.",
    imagen: "",
  },
  {
    titulo: "Picaña",
    precio: 24500,
    descripcion: "Corte de 350 gr. Relish de pepino, teriyaki y rúcula fresca.",
    imagen: "",
  },
];
const carnesMaduras = [
  {
    titulo: "T-bone madurado en ajo negro",
    precio: 25200,
    descripcion: "Corte de 550 gr.",
    imagen: "",
  },
  {
    titulo: "Ojo de bife madurado en seco",
    precio: 20200,
    descripcion: "Con hueso. Corte de 450 gr.",
    imagen: "",
  },
  {
    titulo: "Filet madurado en alga combu",
    precio: 24100,
    descripcion: "Corte de 350 gr. *Sujeto a disponibilidad",
    imagen: "",
  },
  {
    titulo: "Bistecca madurada en whisky",
    precio: 42900,
    descripcion: "Corte 700 gr.",
    imagen: "",
  },
];
const guarniciones = [
  {
    titulo: "Papa acordeón y chimichurri de hierbas frescas",
    precio: 3000,
    descripcion: "Papa acordeón y chimichurri de hierbas frescas",
    imagen: "",
  },
  {
    titulo: "Ensalada fresca",
    precio: 3500,
    descripcion: "Hojas verdes, palta, cherry y boconccino",
    imagen: "",
  },
  {
    titulo: "Papas bastón con sriracha de la casa",
    precio: 2600,
    descripcion: "Papas bastón con sriracha de la casa",
    imagen: "",
  },
  {
    titulo: "Remolacha, zanahoria y naranjas asadas y praline picante",
    precio: 3500,
    descripcion: "Remolacha, zanahoria y naranjas asadas y praline picante",
    imagen: "",
  },
  {
    titulo: "Risotto de quinoas y lentejas turcas",
    precio: 3900,
    descripcion: "Risotto de quinoas y lentejas turcas",
    imagen: "",
  },
];
const postres = [
  {
    titulo: "Pera en polen y parfait de miso de porotos negros",
    precio: 9100,
    descripcion: "Pera en polen y parfait de miso de porotos negros",
    imagen: "",
  },
  {
    titulo: "Némesis de Canaro",
    precio: 10000,
    descripcion: "Némesis de Canaro",
    imagen: "",
  },
  {
    titulo: "Cielo de Tiramisú",
    precio: 10000,
    descripcion: "Cielo de Tiramisú",
    imagen: "",
  },
  {
    titulo: "Noche estrellada en Abrasado",
    precio: 17300,
    descripcion: "Homenaje al postimpresionismo",
    imagen: "",
  },
  {
    titulo: "Creme de matcha y algodón",
    precio: 10400,
    descripcion: "Creme de matcha y algodón",
    imagen: "",
  },
];
$bloqueDer = document.createElement("div");
$bloqueDer.className = "blockRight";
$bloqueCuerpo.appendChild($bloqueDer);
$contenedorDer = document.createElement("div");
$contenedorDer.className = "contentRight";
contenedor.appendChild($contenedorDer);
$menuArriba = document.createElement("div");
$menuArriba.className = "logo";
$contenedorDer.appendChild($menuArriba);
$imgChica = document.createElement("img");
$imgChica.className = "imgLogo";
$imgChica.setAttribute("alt", "imagen chiquita");
$imgChica.setAttribute("src", "./dinner.png");
$menuArriba.appendChild($imgChica);
$textoLogo = document.createElement("p");
$textoLogo.innerHTML = "Healthy Lunch <br> RESTAURANTE";
$textoLogo.className = "textoLogo";
$menuArriba.appendChild($textoLogo);
$menuMedio = document.createElement("div");
$contenedorDer.appendChild($menuMedio);
$redes = document.createElement("ul");
$redes.className = "redes";
$menuMedio.appendChild($redes);
const redes = [
  { titulo: "instagram", url: "instagra.com", imagen: "./insta.jpg" },
  { titulo: "facebook", url: "facebook.com", imagen: "./face.jpg" },
  { titulo: "twiter", url: "twiter.com", imagen: "./twi.jpg" },
  { titulo: "domicilio", url: "google.com", imagen: "./lugar.jpg" },
];
redes.forEach((red) => {
  $listaRed = document.createElement("li");
  $redes.appendChild($listaRed);
  $itemRed = document.createElement("a");
  $listaRed.appendChild($itemRed);
  $imgRed = document.createElement("img");
  $imgRed.setAttribute("src", red.imagen);
  $imgRed.className = "iconos";
  $itemRed.appendChild($imgRed);
  $itemRed.setAttribute("alt", red.titulo);
  $itemRed.setAttribute("href", red.url);
});
$menuAbajo = document.createElement("div");
$menuAbajo.className = "menuChat";
$contenedorDer.appendChild($menuAbajo);
$chat = document.createElement("button");
$chat.className = "botonChico";
$chat.setAttribute("type", "button");
$chat.textContent = "CHAT ME";
$menuAbajo.appendChild($chat);