const express = require('express');
const morganLog = require('morgan');
const es6Renderer = require('express-es6-template-engine');

const app = express();
app.use(morganLog('combined'));
app.engine('html', es6Renderer);
app.set('views', 'front/views');
app.set('view engine', 'html');
app.use(express.static('front/public'));

app.listen(9777, function () {
    console.log("Streamlabs charity server ready for listening -> Port 9777");
    console.log("[Pterodactyl] Ready");
});

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/global/:orga/:campagnName', function (req, res) {
    res.render('global', {locals: {orga: req.params.orga, campagnName: req.params.campagnName}});
});

app.get('/global/:orga/', function (req, res) {
    res.render('global', {locals: {orga: req.params.orga, campagnName: ""}});
});

app.get('/streamer/:streamer/:campagnName', function (req, res) {
    res.render('streamer', {locals: {event: req.params.event, channelName: req.params.streamer, campagnName: req.params.campagnName}});
});
