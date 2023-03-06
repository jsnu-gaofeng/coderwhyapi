const Koa = require('koa');
const app = new Koa();


app.use((ctx, next) => {
    console.log(ctx.request.URL);

})



app.listen(8888, () => {
    console.log('服务器启动成功！！！！')
})