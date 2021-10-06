require("dotenv").config();
const jwt = require("jsonwebtoken");
const passport = require("passport");

function auth(req, res, next) {
    let authHeader = req.headers.auth;
    if(!authHeader){
        return res
            .status(401)
            .json({"error": "Nenhum token fornecido"});
    }

    const parts = authHeader.split(' ');

    if(!parts.length == 2)
        return res.status(401).json({"error": "token inaválido"});

    const [scheme, token] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).json({"error": "token malformatado"});

    jwt.verify(token, process.env.TOKEN_HASH, (err) => {
        if(err) return res.status(401).json({error: "Token Inválido"})
    });
}

module.exports = auth;

