const { Router } = require('express');

const Payment = require("../models/payment");

const router = Router();

const auth = require("../middleware/auth");

router.get('/', auth, async (req, res) => {
    try{
        let payments = await Payment.find({});
        return res.status(200).json(payments);
    } catch(err){
        return res.status(406).json({message: err.message});
    }

});
router.get('/:id', auth, async (req, res) => {
    let { id: _id } = req.params;
    try{
        let payment = await Payment.find({_id});
        return res.status(200).json(payment);
    } catch(err){
        return res.status(406).json({message: err.message});
    }
});

router.post('/', auth, async (req, res) => {
    let { value, name, cpf, num_cartao, validade, preco, cvv, id_compra } = req.body;

    try{
        let payment = new Payment({value, name, cpf, num_cartao, validade, preco, cvv, id_compra});
        await payment.save();
        return res.status(200).json({message: "Pagamento cadastrado"})
    } catch(err){
        return res.status(406).json({message: err.message});
    }
});

router.delete('/:id', auth, async (req, res) => {
    let { id: _id } = req.params;
    
    try{
        await Payment.remove({_id});
        return res.status(200).json({message: 'Deletado com sucesso' });
    } catch(err){
        return res.status(406).json({message: err.message});
    }
});

module.exports = router;
