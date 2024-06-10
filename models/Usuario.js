const { Schema, model } = require('mongoose')

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'Nombre genero requerido']
    },
    email: {
        type: String, 
        required: true,
        unique: true
    },
    identificacion: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    suscripcion: {
        type: String,
        required: true,
        enum:['Anual', 'Mensual', 'Diario', "Empleado"]
    },
    rol: {
        type: String,
        required: true,
        enum:['Administrador', 'Trabajador', 'Cliente']
    },
    fechaCreacion: {
        type: Date,
        required: true,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        required: true,
        default: new Date()
    }
})

module.exports = model('Usuario', UsuarioSchema)