localStorage.clear();

const div = document.getElementsByClassName('usuarios')[0];
let array_usuarios = [];

function onSubmit(e) {
    e.preventDefault();

    // Crear nuevo usuario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    console.log("El nombre introducido es " + nombre);
    console.log("El email introducido es " + email);
    console.log("El mensaje introducido es " + mensaje);
    const nuevo_usuario = {
        nombre, // ES6 (escribo menos)
        email,
        mensaje
    };
    array_usuarios.push(nuevo_usuario);

    localStorage.setItem('usuarios', JSON.stringify(array_usuarios));
    const usuarios = JSON.parse(localStorage.getItem('usuarios'));
    console.log(usuarios);

    
    // Utilizar DOM para mostrar los usuarios actuales
    // Dejar el div vacío
    while(div.firstChild) {
        div.removeChild(div.firstChild);
    }

    const h1 = document.createElement('h1');
    const texto_h1 = document.createTextNode("Los usuarios actuales: ");
    h1.appendChild(texto_h1);
    div.appendChild(h1);
    for (const key in usuarios) {

        const h3 = document.createElement('h3');
        const texto_h3 = document.createTextNode(`Datos del usario ${parseInt(key) + 1}º: `);
        h3.appendChild(texto_h3);
        div.appendChild(h3);
        const usuario = usuarios[key];

        for (const key_usuario in usuario) {  
            const p = document.createElement('p');
            const texto_p = document.createTextNode(`Tu ${key_usuario} es ${usuario[key_usuario]}`);
            p.appendChild(texto_p);
            div.appendChild(p);
        }
    }
}

function eliminarDatos(e) {
    e.preventDefault();

    localStorage.clear();
    array_usuarios = [];

    while(div.firstChild) {
        div.removeChild(div.firstChild);
    }
}