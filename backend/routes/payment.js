const { Router } = require('express');

const router = Router();

payments = [];

router.get('/', (req, res) => {
    return res.json(payments);
});

router.get('/:id', (req, res) => {
    let { id } = req.params;
    if (payments[id] !== undefined) {
        return res.status(200).json(payments[id]);
    } else {
        return res.status(406).json({ message: 'transação não encontrado' });
    }
});

router.post('/', (req, res) => {
    let { value, name, cpf, num_cartao, validade, preco, cvv, id_compra } = req.body;
    payments.push({
        id: payments.length,
        value,
        name,
        cpf,
        num_cartao,
        validade,
        preco,
        cvv,
        id_compra,
    });
    return res.status(200).json(payments);
});

router.delete('/:id', (req, res) => {
    let { id } = req.params;
    if (payments[id] !== undefined) {
        let i = 0;
        payments.splice(id, 1);
        payments.forEach((payment) => {
            payment.id = i;
            i++;
        });
        return res.status(200).json({ message: 'transação deletada com sucesso' });
    } else {
        return res.status(406).json({ message: 'transação não deletada' });
    }
});

module.exports = router;
