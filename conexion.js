const Connection = require('tedious').Connection
const request = require('tedious').request;
const config ={
    server: 'LAPTOP-A37MP47A\SQLEXPRESS',
    authentication: {
        type: 'default',
        options: {
             userName: "proyecto",
             password: "proyecto@5674"
        }
    },
    options: {
        port: 1433,
        database: 'Banco',

        trustServerCertificate: true
    }

}

const connection = new Connection(config);

connection.connect();

connection.on('connect', (err) => {
    if (err){
        console.log("Error al conectarse a la base de datos")
        throw err
    }
    exectStatement();
});

function exectStatement(){
   console.log("Conectado a la base de datos")  

}
