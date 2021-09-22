const { Router } = require('express');

const router = Router();

let tattoos = [];

router.get('/', (req, res) => {
    return res.status(200).json(tattoos);
});

router.get('/:id', (req, res) => {
    let { id } = req.params;
    if (tattoos[id] !== undefined) {
        return res.status(200).json(tattoos[id]);
    } else {
        return res.status(406).json({ message: 'tatuagem não encontrada' });
    }
});

router.post('/', (req, res) => {
    let { tags, preco, name, description, image, user_id } = req.body;
    tattoos.push({
        id: tattoos.length,
        tags,
        preco,
        name,
        description,
        image,
        user_id,
    });
    return res.status(200).json(tattoos);
});

router.patch('/:id', (req, res) => {
    let { id } = req.params;
    let { tags, preco, name, description, image, user_id } = req.body;
    if (tattoos[id] !== undefined) {
        tattoos[id] = {
            id: parseInt(id),
            tags,
            preco,
            name,
            description,
            image,
            user_id,
        };
        return res.status(200).json({ message: 'tatuagem atualizada' });
    } else {
        return res.status(406).json({ message: 'tatuagem não encontrada' });
    }
});

router.delete('/:id', (req, res) => {
    let { id } = req.params;
    if (tattoos[id] !== undefined) {
        let i = 0;
        tattoos.splice(id, 1);
        tattoos.forEach((tattoo) => {
            tattoo.id = i;
            i++;
        });
        return res.status(200).json({ message: 'tatuagem deletada com sucesso' });
    } else {
        return res.status(406).json({ message: 'não foi possivel deletar tatuagem' });
    }
});

module.exports = router;