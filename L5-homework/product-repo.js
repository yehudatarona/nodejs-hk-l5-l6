const connectedKnex = require('./knex-connector');

function getAllProducts() {
    return connectedKnex('products').select('*');
};

function getSingleProducts(_id) {
    return connectedKnex('products').select('*').where("ID", _id);
};

function deleteSingleProducts(_id) {
    return connectedKnex("products").where("ID", _id).del()
};
function updateRecord(_id, _data) {
    return connectedKnex("products").where("ID", _id).update(_data);
};
function addRecord(_data) {
    return connectedKnex("products").insert(_data)
};

module.exports = {
    getAllProducts,
    getSingleProducts,
    deleteSingleProducts,
    updateRecord,
    addRecord
}