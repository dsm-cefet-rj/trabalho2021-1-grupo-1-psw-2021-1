require("dotenv").config();
const jwt = require("jsonwebtoken");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const Client = require('../models/client');

passport.use(new LocalStrategy(Client.authenticate()));
passport.serializeUser(Client.serializeUser());
passport.deserializeUser(Client.deserializeUser());

exports.getToken = function (client) {
    return jwt.sign(client, process.env.MONGODB_PASSWORD, {expiresIn: '48h'})
}

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.MONGODB_PASSWORD;

exports.jwtPassport = passport.use(new JwtStrategy(options, (jwt_payload, done) =>{
    Client.findOne({_id: jwt_payload._id}, (err, client) => {
        if(err){
            return done(err, false);
        }else if (client){
            return done(null, client);
        }else{
            return done(null, false);
        }
    })
}))

exports.auth = passport.authenticate('jwt', {session: false});







// function auth(req, res, next) {
//     let authHeader = req.headers.auth;
//     if(!authHeader){
//         return res
//             .status(401)
//             .json({"error": "Nenhum token fornecido"});
//     }

//     const parts = authHeader.split(' ');

//     if(!parts.length == 2)
//         return res.status(401).json({"error": "token inaválido"});

//     const [scheme, token] = parts;

//     if(!/^Bearer$/i.test(scheme))
//         return res.status(401).json({"error": "token malformatado"});

//     jwt.verify(token, process.env.TOKEN_HASH, (err) => {
//         if(err) return res.status(401).json({error: "Token Inválido"})
//     });
// }

