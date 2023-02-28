const findUserByIdController = async (req, res) => {
    try{

    }catch (err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.'});
    }
};

const findAllUsersCrontoller = async (req, res) => {
    try{

    }catch (err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.'});
    }    
};

const createUserController = async (req, res) => {
    try{

    }catch (err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.'});
    }
};

const updateUserController =  async (req, res) => {
    try{

    }catch (err){
        console.log(`Erro: ${err.message}`)
        return res.status(500).send({ message: 'Erro! Tente novamente.'});
    }
};

const removeUserController = async (req, res) => {
    try{

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