const { Router } = require('express');

const Client = require("../models/client");

const router = Router();

router.get('/', async (req, res) => {
    let clients = await Client.find({});
    return res.status(200).json(clients);
});

router.get('/:id', async (req, res) => {
    let { id: _id } = req.params;

    let user = await Client.find({_id});

    if ( user !== undefined) {
        return res.status(200).json(user);
    } else {
        return res.status(406).json({ message: 'usuário não encontrado' });
    }
});

router.post('/', async (req, res) => {
    let { name, username, email, password } = req.body;
    try {
        let user = new Client({name, username, email, password});
        await user.save();
        return res.status(200).json(user);
    } catch(err) {
        return res.status(406).json({"message": err.message});
    }

});

router.patch('/:id', async (req, res) => {
    let { id: _id } = req.params;
    let { name, username, email, password } = req.body;

    try{

        await Client.updateOne({_id}, {name, username, email, password});   
        return res.status(200).json({message: 'usuário atualizado'});

    } catch {
       return res.status(406).json({message: 'usuário não encontrado'});
    }
});

router.delete('/:id', async (req, res) => {
    let { id: _id } = req.params;
    try {
        await Client.remove({_id})
        return res.status(200).json({ message: 'Deletado com sucesso' });
    } catch {
        return res.status(406).json({ message: 'usuário não deletado' });
    }
});

module.exports = router;