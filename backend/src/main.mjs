import express from "express"
import cors from "cors"
import { Sequelize, DataTypes, where }  from 'sequelize';

const app = express()
app.use(cors())
app.use(express.json())

/**
 * CONFIGURAR TABLAS BASE DE DATOS
 */

/**
 * Creamos una instancia de sequelize apuntando a una
 * base de datos, en este caso un fichero de SQLite.
 * El fichero de SQLite se creará automáticamente.
 */
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

/**
 * Definimos nuestros "modelos".
 * Los modelos representan a los datos almacenados
 * en una tabla de la base de datos.
 */
const Cancion = sequelize.define('Cancion', {
 
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  pais: {
    type: DataTypes.STRING
  },
  puntos: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

/**
 * Pedimos a sequelize que adapte las tablas en la base
 * de datos a los modelos definidos.
 */
await sequelize.sync({ alter: true })

/**
 * FIN CONFIGURACION TABLAS BASE DE DATOS
 */

app.put("/cancions/", async (peticion, respuesta)=>{
    try {
      for (let cancionId in peticion.body) {
        const [modeloCancion] = await Cancion.findOrCreate({where: {id: cancionId}})
        modeloCancion.puntos += peticion.body[cancionId] 
        modeloCancion.save()
      }
      respuesta.setHeader("Content-Type", "application/json")
      respuesta.status(200).send()
    } catch (error) {
        console.error(error)
        respuesta.status(500)
        respuesta.send('Error.')
    }
})
app.listen( 8000,()=>{
    console.log("Express traballando...");
})

