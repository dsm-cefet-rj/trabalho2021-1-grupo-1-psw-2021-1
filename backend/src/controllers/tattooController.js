
let tattoos = []

module.exports = class tattooController {

    static index(req, res) {    
        return res.json(tattoos)
    }
    
    static create(req, res) {
        let { tags, preco, name, description, image, user_id } = req.body;
        tattoos.push({
            id: tattoos.length,
            tags,
            preco,
            name,
            description,
            image,
            user_id
        });
        return res.json(tattoos)
    }

    static update(req, res) {
        let { tags, preco, name, description, image, user_id } = req.body;
        let tattoo = tattoos.indexOf(id, 0)
        if( tattoo > -1 ) {
            tattoos[tattoo] = {
                id: tattoos.length,
                tags,
                preco,
                name,
                description,
                image,
                user_id
            }
        } else {
            return res.status(404).json({"message": "not found"});
        }
        return res.json(tattoo);
    }

    static delete(req, res) {
        let {id} = req.body;
        let tattoo = tattoos.indexOf(id, 0)
        if( tattoo > -1 ) {
            tattoos.pop(tattoo)
            return res.status(201).json({"message": "Deletado com sucesso"});
        } else {
            return res.status(404).json({"message": "not found"});
        }
    }
}