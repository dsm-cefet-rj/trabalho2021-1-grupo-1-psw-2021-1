const jwt = require("jsonwebtoken");
require("dotenv").config();

function auth(req, res, next){
    let authHeader = req.headers.auth;
    console.log(req.headers)
    if(!authHeader){
        return res
            .status(401)
            .json({"erro": "Nenhum token fornecido"});   
    }

    const parts = authHeader.split(' ');

    if(!parts.lenght == 2){
        return res
            .status(401)
            .json({"erro": "Erro no token"});
    }

    const [scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res
            .status(401)
            .json({"erro": "Token malformatado"});

    jwt.verify(token, process.env.TOKEN_HASH, (err) => {
        if(err)
            return res
                .status(401)
                .json({"erro": "Token inválido"});

        return next();
    });
}

function generateToken(id){
    return jwt.sign({id}, process.env.TOKEN_HASH, {expiresIn: '48h'});
}

module.exports = {auth, generateToken}