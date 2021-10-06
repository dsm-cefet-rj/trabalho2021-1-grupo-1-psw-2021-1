const { Router } = require('express');

const Tattoo = require("../models/tattoo"); 

const router = Router();

const auth = require("../middleware/auth");

router.get('/', async (req, res) => {
    let tattoos = await Tattoo.find({})
    return res.status(200).json(tattoos);
});

router.get('/:id', async (req, res) => {
    let { id: _id } = req.params;

    let tattoo = await Tattoo.find({_id});

    if (tattoo !== undefined) {
        return res.status(200).json(tattoo);
    } else {
        return res.status(406).json({ message: 'tatuagem não encontrada' });
    }
});

router.post('/', async (req, res) => {
    let { tags, preco, name, description, image, user_id } = req.body;
    try{
        let tattoo = Tattoo({tags, preco, name, description, image, user_id});
        await tattoo.save();
        return res.status(200).json(tattoo);
    } catch(err) {
        return res.status(406).json({"message": err.message})
    }
});

router.patch('/:id', async (req, res) => {
    let { id:_id } = req.params;
    let { tags, preco, name, description, image, user_id } = req.body;
    try {
        await Tattoo.updateOne({_id}, {tags, preco, name, description, image, user_id});
        return res.status(200).json({ message: 'tatuagem atualizada' });
    } catch {
        return res.status(406).json({ message: 'tatuagem não encontrada' });
    }
});

router.delete('/:id', async (req, res) => {
    let { id: _id } = req.params;
    try {
        await Tattoo.remove({_id})
        return res.status(200).json({message: 'Deletada com sucesso'});
    } catch {
        return res.status(406).json({message: 'Tatuagem não deletada'})
    }
});

module.exports = router;