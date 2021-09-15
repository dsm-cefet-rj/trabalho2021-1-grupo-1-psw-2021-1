professionals = [];

module.exports = class ProfessionalController {

    static index(req, res){
        return res.json(professionals)
    }

    static create(req, res){
        let { name, username, email, password } = req.body;
        professionals.push({
            id: clients.length, 
            name, 
            username, 
            email,
            password
        });
        return res.json(professionals);
    }

    static update(req, res) {
        let {id, name, username, email, password} = req.body;
    }

}