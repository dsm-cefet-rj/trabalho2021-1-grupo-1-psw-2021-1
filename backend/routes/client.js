const { Router } = require('express');

const router = Router();

let clients = [];

router.get('/', (req, res) => {
    return res.status(200).json(clients);
});

router.get('/:id', (req, res) => {
    let { id } = req.params;
    if (clients[id] !== undefined) {
        return res.status(200).json(clients[id]);
    } else {
        return res.status(406).json({ message: 'usuário não encontrado' });
    }
});

router.post('/', (req, res) => {
    let { name, username, email, password } = req.body;
    clients.push({
        id: clients.length,
        name,
        username,
        email,
        password,
    });
    return res.status(200).json(clients);
});

router.patch('/:id', (req, res) => {
    let { id } = req.params;
    let { name, username, email, password } = req.body;
    if (clients[id] !== undefined) {
        clients[id] = {
            id: parseInt(id),
            name,
            username,
            email,
            password,
        };
        return res.status(200).json({ message: 'usuário atualizado' });
    } else {
        return res.status(406).json({ message: 'usuário não encontrado' });
    }
});

router.delete('/:id', (req, res) => {
    let { id } = req.params;
    if (clients[id] !== undefined) {
        let i = 0;
        clients.splice(id, 1);
        clients.forEach((client) => {
            client.id = i;
            i++;
        });
        return res.status(200).json({ message: 'Deletado com sucesso' });
    } else {
        return res.status(406).json({ message: 'usuário não deletado' });
    }
});

module.exports = router;