const miTitulo = document.querySelector(`h1`);
miTitulo.textContent = `Hola Mundo!!`;

const $imagen = document.querySelector(`img`);

$imagen.onclick = function () {
  let misrc = $imagen.getAttribute(`src`);
  if (misrc === "imagenes/miicono.png") {
    $imagen.setAttribute("src", "imagenes/imagen2.jfif");
  } else {
    $imagen.setAttribute("src", "imagenes/miicono.png");
  }

  let $miboton = document.querySelector(`button`);
  let $tituloNombre = document.querySelector(`h1`);

  function nombreUsuario() {
    let usuario = prompt("Inidica Nombre: ");
    localStorage.setItem("Nombre", usuario);
    $tituloNombre.textContent = `Mi nombre de Usuario: ${usuario}`;
  }

  if (!localStorage.getItem("Nombre")) {
    nombreUsuario();
  } else {
    let nombreUsuario = localStorage.getItem("Nombre");
    $tituloNombre.textContent = "Bienvenido Sr(a):" + nombreUsuario;
  }

  $miboton.onclick = () => nombreUsuario();
};
