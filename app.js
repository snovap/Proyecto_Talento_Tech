let mysql = require("mysql2");


let conexion = mysql.createConnection({
    host: "127.0.0.1",
    database: "spgmeta",
    user: "root",
    password: "NOVa2901"
});

conexion.connect(function (err) {
    if (err) {
        throw err;
    }else{
        console.log("Conexión Exitosa");
        conexion.end()
    }
})



// const insertusuarios = "INSERT INTO usuarios (ID_usuario, nombre, email, contrasena, fecha_registro) VALUES (NULL,'Marley','marleylaflakis@gmail.com','06106404','2024-10-08')";

// conexion.query(insertusuarios, function(error, rows){
//     if(error){
//         throw error;
//     }else{
//         console.log("Registro Exitoso");
//     }
// });

const usuarios = "SELECT * FROM usuarios";
conexion.query(usuarios, function(error,lista){
    if(error){
        throw error;
    }else{
        console.log(lista); // Todos los registros
        // console.log(lista.length); // Cantidad de registros
        // console.log(lista[0]); // Primer registro
        // console.log(lista[1].email); // Segundo registro atributo email
        // console.log(lista[lista.length-1]); // Ultimo registro insertado
    }
});

