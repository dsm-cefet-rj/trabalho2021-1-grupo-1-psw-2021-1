const { Router } = require('express');

const Client = require("../models/client");

const router = Router();

const { auth } = require("../middleware/auth");
const { generateToken } = require("../middleware/auth");
const passport = require("passport");

router.get('/', auth, async (req, res) => {
    let clients = await Client.find({});
    return res.status(200).json(clients);
});

router.get('/:id', auth, async (req, res) => {
    console.log(req.headers)
    let { id: _id } = req.params;

    let user = await Client.find({_id});

    if ( user !== undefined) {
        return res.status(200).json(user);
    } else {
        return res.status(406).json({ message: 'usuário não encontrado' });
    }
});

router.post('/login', async (req, res) => {

    let {email, password} = req.body;

    try{
        let {_id} = await Client.findOne({email, password});
        const token = generateToken(_id);
        return res
            .status(200)
            .header("auth", token)
            .json({sucess: true, token: token});
            
        } catch(error) {
            return res
                .status(401)
                .json({"message": error.message});
    }
})

router.post('/', async (req, res) => {
    let  {email, username, name, senha: password} = req.body;
    try{
        let user = new Client({email, username, name, password});
        await user.save();
        return res
            .status(200)
            .json({"message": "Usuário cadastrado"});
    } catch(err) {
        res
            .status(401)
            .json({"message": "Não foi possível cadastrar o usuário"});
    } 
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

router.get('/getHeaders',async (req, res) => {
    console.log(req.header)
    return res.json(req.header)
});

module.exports = router;