import express, { response } from "express"
import cors from "cors"
import { Sequelize, DataTypes, where }  from 'sequelize';
import bcrypt from "bcrypt"

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
  url: {
    type: DataTypes.STRING
  },
  puntos: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});
const Usuario = sequelize.define('Usuario', {
  nome: {
    type: DataTypes.STRING,
    unique: true
  },
  fechaUltimoVoto: {
    type: DataTypes.DATEONLY
  },
  email: {
    type: DataTypes.STRING,
    },
  hashContrasinal: {
    type: DataTypes.STRING
  }
});
/**
 * Pedimos a sequelize que adapte las tablas en la base
 * de datos a los modelos definidos.
 */
//await sequelize.sync({ alter: true })
await sequelize.sync()

/**
 * FIN CONFIGURACION TABLAS BASE DE DATOS
 */
app.post("/usuarios/", async (peticion, respuesta) => {
  try {
    const hash = bcrypt.hashSync(peticion.body.hashContrasinal, 10)
    const novosDatos = {...peticion.body, hashContrasinal: hash}
    const modeloUsuario = await Usuario.create(novosDatos)
    

    respuesta.setHeader("Content-Type", "application/json")
    respuesta.status(200).json(modeloUsuario)
  }
  catch (error) {
    console.error(error)
    respuesta.status(500)
    respuesta.send('Error.')
  }
})
app.post("/login/", async (peticion, respuesta) => {
  try {
    const usuario = await Usuario.findOne({
      where: {nome: peticion.body.nome}
    })

    const fechaUltimoVoto = new Date(usuario.fechaUltimoVoto)
    const tempoTranscurrido = Date.now() - fechaUltimoVoto
    const transcurriuUnDia = tempoTranscurrido > 86400000
    const autenticado = bcrypt.compareSync(peticion.body.contrasinal, usuario?.hashContrasinal ?? "" )
    const volverVotar = fechaUltimoVoto.setDate(fechaUltimoVoto.getDate()+1)
    if (autenticado ) {
      respuesta.status( transcurriuUnDia ? 200 : 400 )
      return respuesta.json( transcurriuUnDia ? {id: usuario.id, autenticado : true} : volverVotar )
    }
    return respuesta.sendStatus(401)
    
   
  } catch (error) {
    console.error(error)
    respuesta.status(500)
    respuesta.send('Error.')
}
})

app.put("/cancions/", middlewareAutorizacion, async (peticion, respuesta)=>{
    try {
      console.log(respuesta.locals)
      const usuario = await Usuario.findOne({
        where: {
          id: respuesta.locals.idUsuario
        }
      })
      usuario.update({fechaUltimoVoto: Date.now()})
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
app.get("/cancions/", async (_, respuesta)=>{
        try {
          const resultados = await Cancion.findAll({order: [["puntos", "DESC"]]})
          respuesta.setHeader("Content-Type", "application/json")
          respuesta.status(200)
          respuesta.send(JSON.stringify(resultados))
      } catch (error) {
          respuesta.status(500)
          respuesta.send('Error.')
      }
  }
)

/**
 * MIDDLEWARES
 */

function middlewareAutorizacion(peticion, respuesta, next) {
  const token = JSON.parse(peticion.headers.authorization)
  if (token.autenticado) {
    respuesta.locals.idUsuario = token.id
    return next()
  } else {
    return respuesta.sendStatus(403)
  }
}

app.listen( 8000,()=>{
    console.log("Express traballando...");
})


export {
  Cancion
}