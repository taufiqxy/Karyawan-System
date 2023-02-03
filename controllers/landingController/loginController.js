const Bcrypt = require('bcrypt');
const { internals } = require('../../dumbData');
const { urls } = require('../../routes/urls');

const loginController = async (request, reply) => {
    const { email, password } = request.payload;
    const account = internals.users.find((user) => user.email === email);

    if (!account || !(await Bcrypt.compare(password, account.password))) {
        return reply.redirect(urls.pageLogin);
    }

    request.cookieAuth.set({ id: account.id });
    return reply.redirect(urls.pageShow);
};

module.exports = { loginController };
