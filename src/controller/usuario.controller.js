const userService = require('../service/usuario.service');

const findUserByIdController = async (req, res) => {
    try{
        const user = await userService.findUserByIdService(req.params.id);

        if(!user){
            return res.status(404).send({message: 'Usuário não encontrado. Tente novamente.'});
        }

        return res.status(200).send(user);

    }catch (err){
        if(err.kind == 'ObjectID'){
            console.log(err.kind == 'ObjectId');
            return res.status(400).send({message: 'O ID informado está incorreto. Tente novamente.'});
        }

        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.'});
    }
};

const findAllUsersCrontoller = async (req, res) => {
    try{
        return res.status(200).send(await userService.findAllUsersService());        
    }catch (err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.'});
    }    
};

const createUserController = async (req, res) => {
    try{
        const body = req.body;
        if(!body.nome){
            return res.status(400).send({message: 'O campo "nome" precisa ser preenchido.'});
        }

        return res.status(200).send(await userService.createUserService(body));

    }catch (err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.'});
    }
};

const updateUserController =  async (req, res) => {
    try{
        const body = req.body;
        if(!body.nome){
            return res.status(400).send({message: 'O campo "nome" precisa ser preenchido.'});
        }

        return res.send(await userService.updateUserService(req.params.id, body));

    }catch (err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.'});
    }
};

const removeUserController = async (req, res) => {
    try{
        const deleteUser = await userService.removeUserService(req.params.id);

        if(deleteUser.deletedCount > 0){
            res.status(200).send({ message: 'Sucesso! Usuário excluído.'});
        }else{
            res.status(404).send({ message: 'Usuário não encontrado. Tente novamente.'});
        }

    }catch (err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.'});
    }
};

const addUserAddressController = async (req, res) => {
    try{

    }catch (err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.'});
    }
};

const removeUserAddressControler = async (req, res) => {
    try{

    }catch (err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.'});
    }
};

const addUserFavProductController = async (re, res) => {
    try{

    }catch (err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.'});
    }
};

const removeUserFavProductController = async (re, res) => {
    try{

    }catch (err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.'});
    }
};

module.exports = {
    findUserByIdController,
    findAllUsersCrontoller,
    createUserController,
    updateUserController,
    removeUserController,
    addUserAddressController,
    removeUserAddressControler,
    addUserFavProductController,
    removeUserFavProductController,
}