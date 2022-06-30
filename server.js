const { response } = require("express");
const express = require('express');
const app = express();
const PORT = 8080

const server = app.listen(PORT, () => { console.log(`SERVER ESCUCHANDO EN ${server.address().port}`
)
})

const fs= require("fs");

class Contenedor { constructor(archivo) { this.archivo = archivo;
    }
    getAll() {
        try {
            const contenido = fs.readFileSync(this.archivo);
            const archivoCompleto = JSON.parse(contenido);
            return archivoCompleto;
        } catch (error) { console.log("No se puede leer el archivo");
    }
        }
        getRandom() {
            try {
                const contenido = fs.readFileSync(this.archivo);
                const archivoCompleto = JSON.parse(contenido);
                const random = Math.floor(Math.random() * archivoCompleto.length);

                return archivoCompleto[random]; 
            } catch (error) { console.log(' "Error " + error');
        }
    }
}

const cont = new Contenedor("./productos.txt");

app.get("/productos", (req, res) => {
    res.send(cont.getAll());
});

app.get("/", (req,res) => { 
  res.send(`Direcciones en subdirectorios`);
});

app.get("/productoRandom", (req, res) => {
    res.send(cont.getRandom());
})

    

