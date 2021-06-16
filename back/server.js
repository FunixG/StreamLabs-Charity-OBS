const express = require('express');
const es6Renderer = require('express-es6-template-engine');

const app = express();
app.engine('html', es6Renderer);
app.set('views', 'front/views');
app.set('view engine', 'html');
app.use(express.static('front/public'));

app.listen(9777, function () {
    console.log("SPA SERVER DONNATIONS READY");
});

app.get('/spa/global', function (req, res) {
    res.render('global');
});

app.get('/spa/streamer/:streamer/:campagnName', function (req, res) {
    res.render('streamer', {locals: {channelName: req.params.streamer, campagnName: req.params.campagnName}});
});
