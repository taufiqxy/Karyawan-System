const { pageIndexController } = require('../controllers/landingController/pageIndexController');
const { pageLoginController } = require('../controllers/landingController/pageLoginController');
const { pageRegisterController } = require('../controllers/landingController/pageRegisterController');
const { registerController } = require('../controllers/landingController/registerController');
const { loginController } = require('../controllers/landingController/loginController');

const { pageShowController } = require('../controllers/adminController/pageShowController');
const { pageAddController } = require('../controllers/adminController/pageAddController');
const { pageUpdateController } = require('../controllers/adminController/pageUpdateController');
const { pageDeleteController } = require('../controllers/adminController/pageDeleteController');
const { pageEditController } = require('../controllers/adminController/pageEditController');
const { addDataController } = require('../controllers/adminController/addDataController');
const { updateDataController } = require('../controllers/adminController/updateDataController');
const { deleteDataController } = require('../controllers/adminController/deleteDataController');
const { logoutController } = require('../controllers/adminController/logoutController');

const { pageProfileController } = require('../controllers/karyawanController/pageProfileController');

const { urls } = require('./urls');

const routes = [

    // route to allow access public directory
    {
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: 'public',
                listing: false, // change to false to disable listing public path
            },
        },
        config: {
            auth: false,
        },
    },

    // landing page routes
    {
        method: 'GET',
        path: urls.pageIndex,
        handler: pageIndexController,
        config: {
            auth: false,
        },
    },
    {
        method: 'GET',
        path: urls.pageLogin,
        handler: pageLoginController,
        config: {
            auth: false,
        },
    },
    {
        method: 'GET',
        path: urls.pageRegister,
        handler: pageRegisterController,
        config: {
            auth: false,
        },
    },
    {
        method: 'POST',
        path: urls.login,
        config: {
            auth: {
                mode: 'try',
            },
        },
        handler: loginController,
    },
    {
        method: 'POST',
        path: urls.register,
        config: {
            auth: false,
            payload: {
                maxBytes: 5000000, // 5 MB
                output: 'stream',
                multipart: { output: 'data' },
                parse: true,
                // allow: 'multipart/form-data',
            },
        },
        handler: registerController,
    },

    // karyawan routes
    {
        method: 'GET',
        path: urls.pageProfile,
        handler: pageProfileController,
    },

    // admin routes
    {
        method: 'GET',
        path: urls.pageShow,
        handler: pageShowController,
    },
    {
        method: 'GET',
        path: urls.pageAdd,
        handler: pageAddController,
    },
    {
        method: 'GET',
        path: urls.pageUpdate,
        handler: pageUpdateController,
    },
    {
        method: 'GET',
        path: urls.pageDelete,
        handler: pageDeleteController,
    },
    {
        method: 'GET',
        path: urls.pageEdit,
        handler: pageEditController,
    },
    {
        method: 'POST',
        path: urls.add,
        handler: addDataController,
    },
    {
        method: 'POST',
        path: urls.delete,
        handler: deleteDataController,
    },
    {
        method: 'POST',
        path: urls.update,
        handler: updateDataController,
    },
    {
        method: 'POST',
        path: urls.logout,
        handler: logoutController,
    },

];

module.exports = { routes };
