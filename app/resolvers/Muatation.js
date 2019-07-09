const HouseModel = require('../models/House');
const UserModel = require('../models/User');


const createHouse = async (root, params, context, info) => {

    const newHouse = await HouseModel(params, data)

    return newHouse

},

const updateInfo = async (root, params, context, info) => {



},






    module.exports = {
        createHouse,
        updateInfo,
    }