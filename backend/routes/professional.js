const { Router } = require('express');

const router = Router();

professionals = [];

router.get('/', (req, res) => {
    return res.json(professionals);
});

router.get('/:id', (req, res) => {
    let { id } = req.params;
    if (professionals[id] !== undefined) {
        return res.status(200).json(professionals[id]);
    } else {
        return res.status(406).json({ message: 'Tatuador não encontrado' });
    }
});

router.post('/', (req, res) => {
    let { name, username, email, password } = req.body;
    professionals.push({
        id: professionals.length,
        name,
        username,
        email,
        password,
    });
    return res.status(200).json(professionals);
});

router.patch('/:id', (req, res) => {
    let { id } = req.params;
    let { name, username, email, password } = req.body;
    if (professionals[id] !== undefined) {
        professionals[id] = {
            id: parseInt(id),
            name,
            username,
            email,
            password,
        };
        return res.status(200).json({ message: 'tatuador atualizado' });
    } else {
        return res.status(406).json({ message: 'tatuador não encontrado' });
    }
});

router.delete('/:id', (req, res) => {
    let { id } = req.params;
    if (professionals[id] !== undefined) {
        let i = 0;
        professionals.splice(id, 1);
        professionals.forEach((professional) => {
            professional.id = i;
            i++;
        });
        return res.status(200).json({ message: 'Deletado com sucesso' });
    } else {
        return res.status(406).json({ message: 'tatuador não deletado' });
    }
});

module.exports = router;
