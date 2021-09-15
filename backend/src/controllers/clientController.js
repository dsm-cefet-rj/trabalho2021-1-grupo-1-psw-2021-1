let clients = []

module.exports = class clientController {

    static index(req, res) {    
        return res.status(200).json(clients)
    }

    static show(req, res){
        let {id} = req.params;
        if(clients[id] !== undefined) {
            return res.status(200).json(clients[id]);
        } else {
            return res.status(406).json({"message": "usuário não encontrado"});
        }
    }
    
    static create(req, res) {
        let { name, username, email, password } = req.body;
        clients.push({
            id: clients.length,
            name,
            username,  
            email, 
            password
        });
        return res.status(200).json(clients)
    }

    static update(req, res) {
        let { id } = req.params
        let { name, username, email, password } = req.body;
        if(clients[id] !== undefined){
            clients[id] = {
                id: parseInt(id),
                name, 
                username, 
                email, 
                password
            }
            return res.status(200).json({"message": "usuário atualizado"});
        } else {
            return res.status(406).json({"message": "usuário não encontrado"});
        }
    }

    static delete(req, res) {
        let { id } = req.params;
        if(clients[id] !== undefined) {
            let i = 0
            clients.splice(id, 1)
            clients.forEach(client => {
                client.id = i;
                i++;
            })
            return res.status(200).json({"message": "Deletado com sucesso"});
        } else {
            return res.status(406).json({"message": "usuário não deletado"});
        }
    }
}