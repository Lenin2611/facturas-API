let getUsuarios  = async() => {
    let url = "https://64f202d40e1e60602d2490d4.mockapi.io/usuario";
    let peticion = await fetch(url);
    let res = await peticion.json();
    console.log(res);
}
getUsuarios();



let getUsuarioId = async(id) => {
    let url = `https://64f202d40e1e60602d2490d4.mockapi.io/usuario/${id}`;
    let peticion = await fetch(url);
    let res = await peticion.json();
    console.log(res);
}
getUsuarioId(1);



let postUsuario = async() => {
    let nuevoUsuario = {
        cc: 195789970,
        nombre: "Claudia",
        apellido: "Quintero",
        telefono: 3112345678,
        correo: "clauquint025@gmail.com"
    }
    let config = {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(nuevoUsuario)
    }
    let peticion = await fetch("https://64f202d40e1e60602d2490d4.mockapi.io/usuario/", config);
    let res = await peticion.json();
    console.log(res);
}
postUsuario();



let putUsuario = async(id) => {
    let cambioUsuario = {
        cc: 195789970,
        nombre: "Pedro",
        apellido: "Acevedo",
        telefono: 31134563428,
        correo: "pedroace15@gmail.com"
    }
    let config = {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(cambioUsuario)
    }
    let peticion = await fetch(`https://64f202d40e1e60602d2490d4.mockapi.io/usuario/${id}`, config);
    let res = await peticion.json();
    console.log(res);
}
putUsuario(1);



let deleteUsuario = async(id) => {
    let config = {
        method: "DELETE",
        headers: {
            'content-type': 'application/json'
        },
    }
    let peticion = await fetch(`https://64f202d40e1e60602d2490d4.mockapi.io/usuario/${id}`, config);
    let res = await peticion.json();
    console.log(res);
}
deleteUsuario(4);