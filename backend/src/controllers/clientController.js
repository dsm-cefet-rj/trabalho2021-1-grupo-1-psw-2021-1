
let clients = []

module.exports = class clientController {

    static index(req, res) {    
        return res.json(clients)
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
        return res.json(clients)
    }

    static update(req, res) {
        let { id, name, username, email, password } = req.body;
        let client = Object.values(clients).indexOf(id, 0)
        if( client > -1 ) {
            clients[client] = {
                id, 
                name, 
                username, 
                email,
                password
            }
        } else {
            return res.status(404).json({"message": "not found"});
        }
        return res.json(client);
    }

    static delete(req, res) {
        let {id} = req.body;
        let client = clients.indexOf(id, 0)
        if( client > -1 ) {
            clients.pop(client)
            return res.status(201).json({"message": "Deletado com sucesso"});
        } else {
            return res.status(404).json({"message": "not found"});
        }
    }
}