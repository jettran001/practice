
class SitesController {
    index(req, res) {
        res.render('home');
    }
};

module.exports = new SitesController;