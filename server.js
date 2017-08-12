const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();

app.use(serve(__dirname + '/html5up-multiverse'));
app.listen(3000, '0.0.0.0');

console.log('listening on port 3000'); 