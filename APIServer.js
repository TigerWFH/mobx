const Koa = require('koa');
const app = new Koa();
const server = require('koa-static');
const path = require('path');
const fs = require('fs');


app.use(server(path.join(__dirname, 'dist')));
app.use(async ctx => {
    var htmlFile = await (new Promise((resolve, reject) => {
        fs.readFile('./dist/index.html', (err, data) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    }));
    ctx.type = 'html';
    ctx.body = htmlFile;
});

app.on('error', () => {
    console.log("error=>", error);
})

app.listen(3000);