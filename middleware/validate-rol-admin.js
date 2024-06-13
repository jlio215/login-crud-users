const jwt = require('jsonwebtoken');

const validateRolAdmin = (req, res, next) => {
    console.log(req.payload.rol)
    if (req.payload.rol != 'Administrador') {
        return res.status(401).json({mensaje: 'Error unauthorized'})
    }
    next();
}

module.exports = {
    validateRolAdmin
}