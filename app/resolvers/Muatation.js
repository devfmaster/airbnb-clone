const HouseModel = require('../models/House');
const UserModel = require('../models/User');


const createHouse = async (root, params, context, info) => {

    const newHouse = await HouseModel(params, data)
        .catch(e => { throw new Error('Ocurrió un problema') })
    if (!newHouse) throw new Error('No se pudo crear');

    return newHouse.toObject();

},

const updateInfo = async (root, params, context, info) => {



},





    module.exports = {
        createHouse,
        updateInfo,
    }