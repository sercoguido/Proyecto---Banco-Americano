
function obtenetUsuario(){
    const apiurl = 'https://randomuser.me/api/';
    fetch ( apiurl )
    .then(res=>res.json())
    .then(resJson => {
        const usuario = resJson.results[0]
        const nombre = usuario.name;
        const imagen = usuario.picture.medium;
        mostrarUsuario(nombre, imagen)
    })
    .catch(error=>error)
}

obtenetUsuario()

function mostrarUsuario(nombre , imagen){

    const app = document.getElementById("app")
    app.innerHTML=`
    <div>
    <img class="imagenApp" src=${imagen} alt="Foto de usuario">
    </div>
    <h3 class="nombreApp"> ${nombre.first} ${nombre.last} </h3>
    `

}