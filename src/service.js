$contenedorHome = document.createElement("article");
$contenedorHome.className = "cuerpo";
contenedor.appendChild($contenedorHome);
$titulo1 = document.createElement("h1");
$titulo1.className = "titulo1";
$titulo1.innerHTML = "Healthy Lunch";
$contenedorHome.appendChild($titulo1);
$titulo2 = document.createElement("h2");
$titulo2.className = "titulo2";
$titulo2.innerHTML = "Porque Elegirnos";
$contenedorHome.appendChild($titulo2);
$divMision = document.createElement("div");
$contenedorHome.appendChild($divMision);
$tituloMision = document.createElement("h3");
$tituloMision.innerHTML = "Mision";
$divMision.appendChild($tituloMision);
$parrafoMision = document.createElement("p");
$parrafoMision.innerHTML = "Somos una empresa gastronómica que brinda un nivel de servicio superior, otorgando altos estándares de calidad sin descuidar nuestra originalidad, comprometiéndonos a una conducta honesta y responsable  para satisfacer las necesidades de nuestros clientes, confiando en el trabajo y talento de nuestra gente.";
$divMision.appendChild($parrafoMision);
$divVision = document.createElement("div");
$contenedorHome.appendChild($divVision);
$tituloVision = document.createElement("h3");
$tituloVision.innerHTML = "Vision";
$divVision.appendChild($tituloVision);
$parrafoVision = document.createElement("p");
$parrafoVision.innerHTML="Ser una empresa que proporcione servicios alimentarios enfocados en la eficiencia a través de la imadaptado a cada uno de los comensales con calidad y excelenciaplementación de estándares de seguridad y calidad progresivamente mayores con alto sentido de responsabilidad.";
$divVision.appendChild($parrafoVision);
$menuServicio = document.createElement("div");
$menuServicio.className = "menuServicio";
$contenedorHome.appendChild($menuServicio);
$contServicio = document.createElement("div");
$contServicio.className = "contServicio";
$contenedorHome.appendChild($contServicio);
$ulServicio = document.createElement("ul");
$ulServicio.className = "tabs";
$menuServicio.appendChild($ulServicio);
servicios = [
  {
    id: '#01',
    servicio: "Servicios para instituciones Industriales",
    descripcion:
      "Ofrecemos excelentes condiciones de competitividad, tanto en calidad como en precios, respaldadas por un sistema operativo que nos permite dar respuesta inmediata a consultas o propuestas de los comensales. Nuestro servicio varía según las necesidades del cliente",
    items: [
      "Comedor o “Cocina in Company” (en instalaciones del cliente)<br>Viandas a granel o individualizadas.<br>Restaurante o Cantina, con comida a la carta y venta a mostrador.",
    ],
    imagen: "#",
  },
  {
    id: '#02',
    servicio: "Servicios para instituciones de Salud",
    descripcion:
      "Brindamos un servicio de alimentación personalizado, adaptado a cada uno de los comensales con calidad y excelencia volcados a preparaciones caseras y únicas. Nuestro compromiso y dedicación garantiza los más altos estándares nutricionales, bromatológicos y de calidad.",
    items: [
      "Servicio a pacientes y concurrentes, con menús acordes a cada caso particular.<br>Servicio a Staff médico y personal autorizado, con variedad de opciones dependiendo de cada sector en particular.",
    ],
    imagen: "#",
  },
  {
    id: '#03',
    servicio: "Servicios para instituciones Educativas",
    descripcion:
      "La correcta alimentación y nutrición en edades escolares es vital para un crecimiento óptimo y buen desarrollo cerebral. Por eso, ofrecemos preparaciones saludables y equilibradas tanto para alumnos como docentes y administrativos. En cada bufete contamos con la supervisión de un Lic. En Nutrición que supervisa la elaboración, y además realiza Educación Alimentaria Nutricional (EAN) destinada a toda la comunidad. Ésta es nuestra manera de compartir la importancia de una buena alimentación en cada grupo etario.",
      items:[],
    imagen: "#",
  },
  {
    id: '#04',
    servicio: "Catering para Eventos",
    descripcion:
      "Disfrute de nuestro servicio de elaboración de cocina gourmet para eventos personales o empresariales. De acuerdo a su elección, nuestro menú y servicio se llevará a cabo en un salón de fiestas o en su casa o empresa, quedando a nuestro cargo toda la logística.",
      items:[],
    imagen: "#",
  },
];
servicios.forEach((element) => {
  $liServiocio = document.createElement("li");
  $ulServicio.appendChild($liServiocio);
  $aServicio = document.createElement("a");
  $aServicio.setAttribute("href", element.id);
  $aServicio.innerHTML = element.servicio;
  $liServiocio.appendChild($aServicio);
  $divItems = document.createElement("div");
  $divItems.id = element.id;
  $contServicio.appendChild($divItems);
  $titItems = document.createElement("h3");
  $titItems.innerHTML = element.servicio;
  $divItems.appendChild($titItems);
  $parrItems = document.createElement("p");
  $parrItems.innerHTML = element.descripcion;
  $divItems.appendChild($parrItems);
  $parr2Items = document.createElement("p");
  $parr2Items.className='items'
  $parr2Items.innerHTML = element.items;
  $divItems.appendChild($parr2Items);
});
const li = document.querySelectorAll('ul.tabs>li>a')
const bloque = document.querySelectorAll('div.contServicio>div')
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