professionals = [];

module.exports = class ProfessionalController {

    static index(req, res) {
        return res.json(professionals)
    }

    static show(req, res) {
        let { id } = req.params;
        if(professionals[id] !== undefined) {
            return res.status(200).json(professionals[id]);
        } else {
            return res.status(406).json({"message": "Tatuador não encontrado"});
        }
    }

    static create(req, res) {
        let { name, username, email, password } = req.body;
        professionals.push({
            id: professionals.length, 
            name, 
            username, 
            email,
            password
        });
        return res.status(200).json(professionals);
    }

    static update(req, res) {
        let { id } = req.params
        let {name, username, email, password } = req.body;
        if(professionals[id] !== undefined){
            professionals[id] = {
                id: parseInt(id),
                name, 
                username, 
                email, 
                password
            }
            return res.status(200).json({"message": "tatuador atualizado"});
        } else {
            return res.status(406).json({"message": "tatuador não encontrado"});
        }
    }

    static delete(req, res) {
        let { id } = req.params;
        if(professionals[id] !== undefined) {
            let i = 0
            professionals.splice(id, 1)
            professionals.forEach(professional => {
                professional.id = i;
                i++;
            })
            return res.status(200).json({"message": "Deletado com sucesso"});
        } else {
            return res.status(406).json({"message": "tatuador não deletado"});
        }
    }

}