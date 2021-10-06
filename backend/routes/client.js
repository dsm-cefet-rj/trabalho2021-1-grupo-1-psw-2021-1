const { Router } = require('express');

const Client = require("../models/client");

const router = Router();

const auth = require("../middleware/auth").auth;
const passport = require("passport");

router.get('/', auth, async (req, res) => {
    let clients = await Client.find({});
    return res.status(200).json(clients);
});

router.get('/:id', auth, async (req, res) => {
    let { id: _id } = req.params;

    let user = await Client.find({_id});

    if ( user !== undefined) {
        return res.status(200).json(user);
    } else {
        return res.status(406).json({ message: 'usuário não encontrado' });
    }
});

router.post('/', (req, res, next) => {

    Client.register(new Client({username: req.body.username}), req.body.password, (err, client) => {

        if(err){
            res.statusCode = 500;
            res.setHeader('Content-Type', 'application/json');
            res.json({err})
        }else if(client){
            passport.authenticate('local')(req, res, () => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({sucess: true, status: "Cadastro foi um sucesso"});
            })
        }
    })

});

router.patch('/:id', auth, async (req, res) => {
    let { id: _id } = req.params;
    let { name, username, email, password } = req.body;

    try{

        await Client.updateOne({_id}, {name, username, email, password});   
        return res.status(200).json({message: 'usuário atualizado'});

    } catch {
       return res.status(406).json({message: 'usuário não encontrado'});
    }
});

router.delete('/:id', auth, async (req, res) => {
    let { id: _id } = req.params;
    try {
        await Client.remove({_id})
        return res.status(200).json({ message: 'Deletado com sucesso' });
    } catch {
        return res.status(406).json({ message: 'usuário não deletado' });
    }
});

module.exports = router;