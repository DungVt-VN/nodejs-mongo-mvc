class NewsController {
    index(req, res) {
        console.log(req.body);
        res.render('news');
    }

    show(req, res) {
        res.send('hello');
    }
}

module.exports = new NewsController();
