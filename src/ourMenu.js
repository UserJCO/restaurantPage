$contenedorHome = document.createElement("div");
$contenedorHome.className = "cuerpo";
contenedor.appendChild($contenedorHome);
$derecho = document.createElement("div");
$derecho.className = "contenedorMenu";
$contenedorHome.appendChild($derecho);
$izquierdo = document.createElement("seccion");
$izquierdo.className = "secciones";
$contenedorHome.appendChild($izquierdo);
$titulo1 = document.createElement("h1");
$titulo1.className = "titulo1";
$titulo1.innerHTML = "Carta Menu";
$derecho.appendChild($titulo1);
$titulo2 = document.createElement("h2");
$titulo2.className = "titulo2";
$titulo2.innerHTML = "FOR YOU";
$derecho.appendChild($titulo2);
const menuCategoria = [
  {
    paso: "entradas",
    menu: [
      {
        titulo: "Embutidos Artesanales Abrasado",
        precio: 4500,
        descripcion: "embutidos con tomate cherry, brotes y aceite de oliva",
        imagen: "./images/embutidos.png",
      },
      {
        titulo: "Empanada mendocina de ojo de bife",
        precio: 4500,
        descripcion:
          "empanada frita de ojo de bife acompañada con salsa criolla",
        imagen: "./images/empanada.png",
      },
      {
        titulo: "Selección de quesos",
        precio: 5400,
        descripcion: "tabla de quesos, cherry, brotes y aceite de oliva",
        imagen: "./images/quesos.png",
      },
      {
        titulo: "Carpaccio fresco sobre espejo de oliva",
        precio: 6400,
        descripcion:
          "Crema de zanahoría y lima, huevo de codorniz y helado de ajo negro",
        imagen: "./images/carpaccio.png",
      },
      {
        titulo: "Molleja 3 días inoculada en koji",
        precio: 7100,
        descripcion: "Kimchi, cremoso de pera y Extra Brut Mosquita Muerta",
        imagen: "./images/mollejas.png",
      },
      {
        titulo: "Ostras frescas",
        precio: 7300,
        descripcion:
          "Ostras frescas con frutilla y aceto balsámico Millán y gremolata de almen dras tostadas *Sujeto a disponibilidad",
        imagen: "./images/ostras.png",
      },
    ],
  },
  {
    paso: "ensaladas",
    menu: [
      {
        titulo: "Ensalada de hidropónicas",
        precio: 11200,
        descripcion:
          "Rúcula, espinaca, huevo crocante a baja, palta, queso Morbier, hoja de kale y vinagreta de frutos rojos.",
        imagen: "./images/ensalada.png",
      },
    ],
  },
  {
    paso: "principales",
    menu: [
      {
        titulo: "Risotto de rabo",
        precio: 17100,
        descripcion: "Cebollas glaseadas y emulsión de gorgonzolas",
        imagen: "./images/risotto.png",
      },
      {
        titulo: "Panzotti de pimiento y espinaca",
        precio: 16000,
        descripcion:
          "Relleno de provolone y tomates, salteado en suero de queso",
        imagen: "./images/panzotti.png",
      },
      {
        titulo: "Chernia en dos cocciones",
        precio: 25600,
        descripcion:
          "Puré de coliﬂor y chocolate blanco/gremolata/ emulsión de alga nori",
        imagen: "./images/chernia.png",
      },
      {
        titulo: "Tentáculo de pulpo con huevo ajitsuke",
        precio: 21000,
        descripcion:
          "Papa bouchon, granola de aceite de sésamo y crema huancaína.",
        imagen: "./images/tentaculo.png",
      },
      {
        titulo: "Pasta casera con estofado de la nona",
        precio: 15100,
        descripcion: "Cintas 100% huevo, estofado casero con ojo de bife",
        imagen: "./images/pasta.png",
      },
      {
        titulo: "Salmón marinado",
        precio: 23500,
        descripcion: "Cremoso de frijoles y huevas de arenque",
        imagen: "./images/salmon.png",
      },
    ],
  },
  {
    paso: "carnesFrescas",
    menu: [
      {
        titulo: "Entraña trenzada",
        precio: 23500,
        descripcion:
          "Corte de 300 gr. / Criolla de frutilla y vinagre de jerez.",
        imagen: "./images/entraña.png",
      },
      {
        titulo: "Ojo de bife Black Angus",
        precio: 18200,
        descripcion: "Con hueso. Corte de 450 gr",
        imagen: "./images/ojodebife.png",
      },
      {
        titulo: "Filet fresco",
        precio: 20200,
        descripcion: "Corte de 300 gr.",
        imagen: "./images/filet.png",
      },
      {
        titulo: "Picaña",
        precio: 24500,
        descripcion:
          "Corte de 350 gr. Relish de pepino, teriyaki y rúcula fresca.",
        imagen: "./images/picaña.png",
      },
    ],
  },
  {
    paso: "carnesMaduras",
    menu: [
      {
        titulo: "T-bone madurado en ajo negro",
        precio: 25200,
        descripcion: "Corte de 550 gr.",
        imagen: "./images/tbone.png",
      },
      {
        titulo: "Ojo de bife madurado en seco",
        precio: 20200,
        descripcion: "Con hueso. Corte de 450 gr.",
        imagen: "./images/ojodebife.png",
      },
      {
        titulo: "Filet madurado en alga combu",
        precio: 24100,
        descripcion: "Corte de 350 gr. *Sujeto a disponibilidad",
        imagen: "./images/filetmadurado.png",
      },
      {
        titulo: "Bistecca madurada en whisky",
        precio: 42900,
        descripcion: "Corte 700 gr.",
        imagen: "./images/bistecca.png",
      },
    ],
  },
  {
    paso: "guarniciones",
    menu: [
      {
        titulo: "Papa acordeón y chimichurri de hierbas frescas",
        precio: 3000,
        descripcion: "Papa acordeón y chimichurri de hierbas frescas",
        imagen: "./images/papasacordeon.png",
      },
      {
        titulo: "Ensalada fresca",
        precio: 3500,
        descripcion: "Hojas verdes, palta, cherry y boconccino",
        imagen: "./images/ensaladafresca.png",
      },
      {
        titulo: "Papas bastón con sriracha de la casa",
        precio: 2600,
        descripcion: "Papas bastón con sriracha de la casa",
        imagen: "./images/papabaston.png",
      },
      {
        titulo: "Remolacha, zanahoria y naranjas asadas y praline picante",
        precio: 3500,
        descripcion: "Remolacha, zanahoria y naranjas asadas y praline picante",
        imagen: "./images/remolachazanahoria.png",
      },
      {
        titulo: "Risotto de quinoas y lentejas turcas",
        precio: 3900,
        descripcion: "Risotto de quinoas y lentejas turcas",
        imagen: "./images/risotodequinoa.png",
      },
    ],
  },
  {
    paso: "postres",
    menu: [
      {
        titulo: "Pera en polen y parfait de miso de porotos negros",
        precio: 9100,
        descripcion: "Pera en polen y parfait de miso de porotos negros",
        imagen: "./images/peraalpolen.png",
      },
      {
        titulo: "Némesis de Canaro",
        precio: 10000,
        descripcion: "Némesis de Canaro",
        imagen: "./images/nemesisdecanaro.png",
      },
      {
        titulo: "Cielo de Tiramisú",
        precio: 10000,
        descripcion: "Cielo de Tiramisú",
        imagen: "./images/cieloTiramisu.png",
      },
      {
        titulo: "Noche estrellada en Abrasado",
        precio: 17300,
        descripcion: "Homenaje al postimpresionismo",
        imagen: "./images/postimpresionismo.png",
      },
      {
        titulo: "Creme de matcha y algodón",
        precio: 10400,
        descripcion: "Creme de matcha y algodón",
        imagen: "./images/cremedematcha.png",
      },
    ],
  },
];
$navegacion = document.createElement("nav");
$derecho.appendChild($navegacion);
$menu = document.createElement("ul");
$menu.className='tabs'
$navegacion.appendChild($menu);
menuCategoria.forEach((items) => {
  $listaPaso = document.createElement("li");
  $menu.appendChild($listaPaso);
  $linkPaso = document.createElement("a");
  $linkPaso.setAttribute('href','#'+items.paso)
  $linkPaso.innerHTML = items.paso;
  $listaPaso.appendChild($linkPaso);
  $contenedorPaso = document.createElement("div");
  $contenedorPaso.id = items.paso;
  $izquierdo.appendChild($contenedorPaso);
  $tituloPaso = document.createElement('div');
  $contenedorPaso.appendChild($tituloPaso);
  $articuloPaso= document.createElement('div');
  $contenedorPaso.appendChild($articuloPaso);
  items.menu.forEach((its) => {
    $itemdiv=document.createElement('div');
    $itemdiv.className='comida'
    $articuloPaso.appendChild($itemdiv);
    $itemMenu = document.createElement("h3");
    $itemMenu.className='item'
    $itemMenu.innerHTML = its.titulo;
    $itemdiv.appendChild($itemMenu);
    $itemDesc = document.createElement("p");
    $itemDesc.className='parrafo'
    $itemDesc.innerHTML = its.descripcion;
    $itemdiv.appendChild($itemDesc);
    $itemPrecio = document.createElement("h3");
    $itemPrecio.className='precio'
    $itemPrecio.innerHTML = its.precio;
    $itemdiv.appendChild($itemPrecio);
    console.log();
    $itemImg = document.createElement("img");
    $itemImg.className='imagen'
    $itemImg.setAttribute("src", its.imagen);
    $itemdiv.appendChild($itemImg);
  });
});
const li = document.querySelectorAll('ul.tabs>li>a')
const bloque = document.querySelectorAll('seccion.secciones>div')
console.log(li)
console.log(bloque)
li.forEach((cadaLi, i) =>{
  li[i].addEventListener('click',() =>{
    li.forEach((cadaLi, i)=>{
      li[i].classList.remove('activo')
      bloque[i].classList.remove('activo')
    })
    li[i].classList.add('activo')
    bloque[i].classList.add('activo')
  })
})