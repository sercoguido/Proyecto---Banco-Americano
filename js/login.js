const loginForm = document.querySelector('#loginForm')
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.email === email && user.password === password)
    if(!validUser){
        return Swal.fire(
            'Error!',
            'Usuario y/o contraseña incorrectos!',
            'error'
        )
    }
    Swal.fire(
        'Excelente!',
        'Ingreso Exitoso',
        'success'
    )
    localStorage.setItem('login_success', JSON.stringify(validUser))

    setTimeout(() => location.href = "cuentas.html", 1000);
    
})