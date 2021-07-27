const connectedKnex = require('./knex-connector');

function getAllProducts() {
    return connectedKnex('products').select('*');
};

function getSingleProducts(_id) {
    return connectedKnex('products').select('*').where("id", _id);
};

function deleteSingleProducts(_id) {
    return connectedKnex("products").where("id", _id).del()
};
function updateRecord(_id, _data) {
    return connectedKnex("products").where("id", _id).update(_data);
};
function addRecord(_data) {
    return connectedKnex("products").insert(_data);
};

module.exports = {
    getAllProducts,
    getSingleProducts,
    deleteSingleProducts,
    updateRecord,
    addRecord
}