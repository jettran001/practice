

class AccountsController {
    information(req, res) {
        res.render('account/information');
    }
};

module.exports = new AccountsController;