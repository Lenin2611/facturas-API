# Facturación tienda

En los archivo `usuario.js`, `producto.js`, `factura.js` contiene como:

- mostrar `GET`
- buscar por id `GET:Id`
- agregar `POST`
- actualizar por id `PUT:Id`
- eliminar por id  `DELETE:Id`

cada dato dependiendo de su función.

Para `usuario.js` es cada usuario, para `producto.js` es cada producto y para `factura.js` es cada factura.

### GET

```javascript
let get = async() => {
    let url = "url del API";
    let peticion = await fetch(url);
    let res = await peticion.json();
    console.log(res);
}
get();
```

### GET:Id

```javascript
let getId = async(id) => {
    let url = `url del API ${id}`;
    let peticion = await fetch(url);
    let res = await peticion.json();
    console.log(res);
}
getId(id del dato a buscar);
```

### POST

```javascript
let post = async() => {
    let nuevoDato = {
        llave: valor
    }
    let config = {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(nuevoDato)
    }
    let peticion = await fetch("url del API", config);
    let res = await peticion.json();
    console.log(res);
}
post();
```

### PUT:Id

```javascript
let put = async(id) => {
    let cambioDato = {
        llave: valor
    }
    let config = {
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(cambioDato)
    }
    let peticion = await fetch(`url del API ${id}`, config);
    let res = await peticion.json();
    console.log(res);
}
put(id del dato a cambiar);
```

### DELETE

```javascript
let delete = async(id) => {
    let config = {
        method: "DELETE",
        headers: {
            'content-type': 'application/json'
        },
    }
    let peticion = await fetch(`url del API ${id}`, config);
    let res = await peticion.json();
    console.log(res);
}
delete(id del dato a eliminar);
```