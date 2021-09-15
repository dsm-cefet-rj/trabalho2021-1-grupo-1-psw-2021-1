
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
        let client = clients.indexOf({
            id, 
            name, 
            username, 
            email, 
            password
        }, 0)
        res.json(client)
    }
}