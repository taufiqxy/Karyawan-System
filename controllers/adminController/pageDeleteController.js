const { client } = require('../../database/client');
const { pool } = require('../../database/pool');

const pageDeleteController = async (request, h) => {
    try {
        const result = await pool.query('SELECT * FROM karyawan');
        const namaKaryawan = result.rows;
        const listKaryawan = namaKaryawan.map((x) => {
            return [x.id, x.name, x.email, x.address];
        });
        const flashMsg = request.yar.flash('success delete'); // get flash message
        return h.view('adminArea/delete.njk', { listKaryawan, flashMsg });
    } catch (err) {
        return 'Data gagal diambil';
    }
};

module.exports = { pageDeleteController };
