const jwt = require('jsonwebtoken');

const generateJwt = (usuario) => {
    const payload = {
        _id: usuario._id, 
        nombre: usuario.nombre,
        email: usuario.email,
        password: usuario.password,
        rol: usuario.rol,
        estado: usuario.estado
    }

    const token = jwt.sign(payload, process.env.SECRET_JWT, {expiresIn: '2h'});

    return token;
}

module.exports = {
    generateJwt
}