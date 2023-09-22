const user = JSON.parse(localStorage.getItem('login_success')) || false
if(!user){
    window.location.href = 'ingreso.html'
}

const exit = document.querySelector('#exit')

exit.addEventListener('click', ()=>{
    localStorage.removeItem('login_success')
    window.location.href = 'login.html'
})



//LLAMAMOS AL NOMBRE DEL USUARIO PARA QUE FIGURE
nombreUsuario = localStorage.getItem("login_success")
nombreUsuario = (JSON.parse(nombreUsuario).name);
nombreUsuario = nombreUsuario.charAt(0).toUpperCase() + nombreUsuario.slice(1).toLowerCase();

var nombreUsuarioElemento = document.getElementById("nombreUsuario");
nombreUsuarioElemento.textContent = nombreUsuario;