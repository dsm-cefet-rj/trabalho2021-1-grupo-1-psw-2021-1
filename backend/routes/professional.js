const { Router } = require('express');

const Professional = require("../models/professional");

const router = Router();

router.get('/', async (req, res) => {
    let professional = await Professional.find({});
    return res.status(200).json(professional);
});

router.get('/:id', async (req, res) => {
    let { id: _id } = req.params;

    let user = await Professional.find({_id});

    if ( user !== undefined) {
        return res.status(200).json(user);
    } else {
        return res.status(406).json({ message: 'Profissional não encontrado' });
    }
});

router.post('/', async (req, res) => {
    let { name, username, email, password } = req.body;
    try {
        let user = new Professional({name, username, email, password});
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

        await Professional.updateOne({_id}, {name, username, email, password});   
        return res.status(200).json({message: 'Profissional atualizado'});

    } catch {
       return res.status(406).json({message: 'Profissional não encontrado'});
    }
});

router.delete('/:id', async (req, res) => {
    let { id: _id } = req.params;
    try {
        await Professional.remove({_id})
        return res.status(200).json({ message: 'Profissional deletado com sucesso' });
    } catch {
        return res.status(406).json({ message: 'Profissional não deletado' });
    }
});

module.exports = router;