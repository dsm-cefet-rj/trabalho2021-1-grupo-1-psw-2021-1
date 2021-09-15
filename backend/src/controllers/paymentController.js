payments = [];

module.exports = class PaymenteController {

    static index(req, res) {
        return res.json(payments)
    }

    static show(req, res) {
        let { id } = req.params;
        if(payments[id] !== undefined) {
            return res.status(200).json(payments[id]);
        } else {
            return res.status(406).json({"message": "transação não encontrado"});
        }
    }

    static create(req, res) {
        let { value , name, cpf, num_cartao, validade, preco, cvv, id_compra } = req.body;
        payments.push({
            id: payments.length, 
            value,
            name, 
            cpf,  
            num_cartao,
            validade,
            preco, 
            cvv, 
            id_compra
        });
        return res.status(200).json(payments);
    }

    static delete(req, res) {
        let { id } = req.params;
        if(payments[id] !== undefined) {
            let i = 0
            payments.splice(id, 1)
            payments.forEach(payment => {
                payment.id = i;
                i++;
            })
            return res.status(200).json({"message": "transação deletada com sucesso"});
        } else {
            return res.status(406).json({"message": "transação não deletada"});
        }
    }

}
