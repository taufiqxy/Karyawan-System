const { client } = require('../database/client');
const { pool } = require('../database/pool');

const halamanAddController = (request, h) => {
    const flashMsg = request.yar.flash('success add'); // get flash message
    return h.view('add.njk', { flashMsg });
};

module.exports = { halamanAddController };
