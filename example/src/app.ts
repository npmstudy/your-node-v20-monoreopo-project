import Koa from 'koa';

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = 'Helsslo World';
});

app.listen(3000);
